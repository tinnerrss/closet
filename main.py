from models import User, Item, Outfit, app
from flask import jsonify, request, g
from flask_httpauth import HTTPTokenAuth
from itsdangerous import (TimedJSONWebSignatureSerializer as Serializer, BadSignature, SignatureExpired)
from crud.item_crud import get_all_items, create_item, get_item, update_item
from crud.outfit_crud import get_all_outfits, create_outfit, get_outfit, update_outfit
from crud.user_crud import create_user

auth = HTTPTokenAuth('Bearer')

# App setup
@app.errorhandler(Exception)
def unhandled_exception(e):
  app.logger.error('Unhandled Exception: %s', (e))
  message_str = e.__str__()
  return jsonify(message=message_str.split(':')[0])

@auth.verify_token
def verify_token(token):
  print(f'💽 {token}')
  s = Serializer(app.config['SECRET_KEY'])
  try:
    data = s.loads(token)
    g.user = User.query.filter_by(id=data["id"]).first()
  except SignatureExpired:
    print(f'⏰ Signature Expired')
    return False # valid token, but expired
  except BadSignature:
    print(f'🧨 Invalid Token')
    return False # invalid token
  return True

@app.route('/auth/login', methods=['POST'])
def authenticate():
  if request.json['email'] is None or request.json['password'] is None:
    raise KeyError('Email and Password required')

  user = User.query.filter_by(email=request.json['email']).first()

  if user is None or not user.verify_password(request.json['password']):
    raise Exception("Unauthorized")

  g.user = user
  token = user.generate_token()
  return jsonify(user=user.as_dict(), token=token.decode('ascii'), status_code=200)

@app.route('/auth/signup', methods=['POST'])
def signup():
    return create_user(**request.json)


@app.route('/api/protected')
@auth.login_required
def get_resource():
  return jsonify({ 'data': 'Hello, %s!' % g.user.name })


@app.route('/')
def index():
    return jsonify(msg='hello')

@app.route('/profile')
@auth.login_required
def profile():
    name = g.user.name
    return jsonify(msg='hello again')

@app.route('/items', methods=['GET', 'POST'])
@auth.login_required
def item_index_create():
    if request.method == 'GET':
        try:
            return get_all_items()
        except Exception as error:
            return error('GET /items route', error)
    if request.method == 'POST':
        try:
            return create_item(name=request.json['name'], category=request.json['category'], available=request.json['available'], photo=request.json['photo'])
        except Exception as error:
            return error('POST /item route', error)  

@app.route('/items/<int:id>', methods=['GET', 'PUT', 'DELETE']) 
@auth.login_required
def item_show_update_delete(id):
    if request.method == 'GET':
        try:
            return get_item(id)
        except Exception as error:
            return error('GET /items/:id route', error)
    if request.method == 'PUT':
        try:
            return update_item(
                id=id,
                name=request.json['name'],
                category=request.json['category'],
                available=request.json['available'],
                photo=request.json['photo']
            )
        except Exception as error:
            return error('PUT /items/:id route', error)
    if request.method == 'DELETE':
        try:
            return destroy_item(id)
        except Exception as error:
            return error('DELETE /items/:id route', error)

@app.route('/outfits', methods=['GET', 'POST'])
@auth.login_required
def outfit_index_create():
    if request.method == 'GET':
        try:
            return get_all_outfits()
        except Exception as error:
            return error('GET /outfits route', error)
    if request.method == 'POST':
        try:
            return create_outfit(occasion=request.json['occasion'])
        except Exception as error:
            return error('POST /outfit route', error)  

@app.route('/outfits/<int:id>', methods=['GET', 'PUT', 'DELETE']) 
@auth.login_required
def outfit_show_update_delete(id):
    if request.method == 'GET':
        try:
            return get_outfit(id)
        except Exception as error:
            return error('GET /outfits/:id route', error)
    if request.method == 'PUT':
        try:
            return update_outfit(
                id=id,
                occasion=request.json['occasion'],
            )
        except Exception as error:
            return error('PUT /outfits/:id route', error)
    if request.method == 'DELETE':
        try:
            return destroy_outfit(id)
        except Exception as error:
            return error('DELETE /outfits/:id route', error)