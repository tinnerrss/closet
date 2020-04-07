from flask import jsonify, redirect
from models import db, User

def create_user(name, kind, description):
    try:
        new_user = User(name=name, email=email, password=password, photo=photo or None)
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.as_dict())
    except Exception as error:
        return error('Creating new user', error)

