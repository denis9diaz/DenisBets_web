import os
from flask import Flask, request, jsonify, send_from_directory
from flask_migrate import Migrate
from api.utils import APIException, generate_sitemap
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from api.models import db
from flask_mail import Mail, Message
from flask_cors import CORS

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__, template_folder='../src/templates')

app.config.update(dict(
    DEBUG=False,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USE_SSL=False,
    MAIL_USERNAME="denisbets.info@gmail.com",
    MAIL_PASSWORD='gezvxyuquwtnshem'
))
mail = Mail(app)

CORS(app)
app.url_map.strict_slashes = False

# database configuration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# Endpoint para enviar correos
@app.route('/api/contact', methods=['POST'])
def contact():
    body = request.get_json(silent=True)
    if not body:
        return jsonify({'msg': "No se han proporcionado datos"}), 400

    username = body.get('username')
    subject = body.get('subject')
    message = body.get('message')

    if not all([username, subject, message]):
        return jsonify({'msg': "Todos los campos son obligatorios"}), 400

    try:
        msg = Message(subject="Formulario de Contacto: " + subject,
                      sender="denisbets.info@gmail.com",  # Puedes usar una dirección de correo fijo
                      recipients=["denisbets.info@gmail.com"])
        msg.html = f"<h3>Mensaje de: {username}</h3><p>{message}</p>"
        mail.send(msg)
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({'msg': "Error al enviar el mensaje"}), 500

    return jsonify({"msg": "Mensaje enviado con éxito"}), 200

# Endpoint para servir archivos estáticos
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
