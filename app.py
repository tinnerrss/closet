from models import app, User, Item, Outfit
from flask import jsonify, request
from crud.item_crud import get_all_items, create_item, get_item, update_item
from crud.outfit_crud import get_all_outfits, create_outfit, get_outfit, update_outfit



@app.route('/')
def home():
  first_user = User.query.first()
  print(f'🎀{first_user}')
  return jsonify(user=first_user.as_dict())


@app.route('/items', methods=['GET', 'POST'])
def item_index_create():
    if request.method == 'GET':
        try:
            return get_all_items()
        except Exception as error:
            return error('GET /items route', error)
    if request.method == 'POST':
        try:
            return create_item(name=request.form['name'], category=request.form['category'], available=request.form['available'], photo=request.form['photo'])
        except Exception as error:
            return error('POST /item route', error)  

@app.route('/items/<int:id>', methods=['GET', 'PUT', 'DELETE']) 
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
                name=request.form['name'],
                category=request.form['category'],
                available=request.form['available'],
                photo=request.form['photo']
            )
        except Exception as error:
            return error('PUT /items/:id route', error)
    if request.method == 'DELETE':
        try:
            return destroy_item(id)
        except Exception as error:
            return error('DELETE /items/:id route', error)

@app.route('/outfits', methods=['GET', 'POST'])
def outfit_index_create():
    if request.method == 'GET':
        try:
            return get_all_outfits()
        except Exception as error:
            return error('GET /outfits route', error)
    if request.method == 'POST':
        try:
            return create_outfit(occasion=request.form['occasion'])
        except Exception as error:
            return error('POST /outfit route', error)  

@app.route('/outfits/<int:id>', methods=['GET', 'PUT', 'DELETE']) 
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
                occasion=request.form['occasion'],
            )
        except Exception as error:
            return error('PUT /outfits/:id route', error)
    if request.method == 'DELETE':
        try:
            return destroy_outfit(id)
        except Exception as error:
            return error('DELETE /outfits/:id route', error)