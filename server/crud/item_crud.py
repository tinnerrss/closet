from flask import jsonify, redirect
from models import db, Item


def get_all_items():
    try:
        all_items = Item.query.all()
        result = [item.as_dict() for item in all_items]
        return jsonify(result)
    except Exception as error:
        return error('Getting all items', error)


def create_item(name, kind, description):
    try:
        new_item = Item(name=name, category=category, available=available, photo=photo or None)
        db.session.add(new_item)
        db.session.commit()
        return jsonify(new_item.as_dict())
    except Exception as error:
        return error('Creating new item', error)

def get_item(id):
    try:
        item = Item.query.get(id)
        if item:
            return jsonify(item.as_dict())
        else:
            raise Exception('Error getting item at id {}'.format(id))
    except Exception as error:
        return error('Error getting one item', error)


def update_item(id, name, category, available, photo):
    try:
        item = Item.query.get(id)
        item.name = name or item.name
        item.category = category or item.category
        item.available = available or item.available
        item.photo = photo or item.photo
        db.session.commit()
        return jsonify(item.as_dict())
    except Exception as error:
        return error('Updating one item', error)

def destroy_item(id):
    try:
        item = Item.query.get(id)
        db.session.delete(item)
        db.session.commit()
        return redirect('/items')
    except Exception as error:
        return error('Deleting a item', error)