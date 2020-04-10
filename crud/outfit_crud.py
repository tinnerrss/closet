from flask import jsonify, redirect
from models import db, Outfit


def get_all_outfits():
    try:
        all_outfits = Outfit.query.all()
        result = [outfit.as_dict() for outfit in all_outfits]
        return jsonify(result)
    except Exception as error:
        return error('Getting all outfits', error)


def create_outfit(name, kind, description):
    try:
        new_outfit = Outfit(occasion=occasion or None)
        db.session.add(new_outfit)
        db.session.commit()
        return jsonify(new_outfit.as_dict())
    except Exception as error:
        return error('Creating new outfit', error)

def get_outfit(id):
    try:
        outfit = Outfit.query.get(id)
        if outfit:
            return jsonify(outfit.as_dict())
        else:
            raise Exception('Error getting outfit at id {}'.format(id))
    except Exception as error:
        return error('Error getting one outfit', error)


def update_outfit(id, occasion):
    try:
        outfit = Outfit.query.get(id)
        outfit.occasion = occasion or outfit.occasion
        db.session.commit()
        return jsonify(outfit.as_dict())
    except Exception as error:
        return error('Updating one outfit', error)

def destroy_outfit(id):
    try:
        outfit = Outfit.query.get(id)
        db.session.delete(outfit)
        db.session.commit()
        return redirect('/outfits')
    except Exception as error:
        return error('Deleting a outfit', error)