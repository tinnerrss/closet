from flask import jsonify, redirect, g
from models import db, User

def create_user(**form_args):
  if not form_args['name'] or not form_args['email'] or not form_args['password']:
    raise Exception('Name, Email, and Password are required fields')
  if User.query.filter_by(email=form_args['email']).first() is not None:
    raise Exception('There is already a user with this email')

  new_user = User(**form_args)
  new_user.set_password(form_args['password'])
  db.session.add(new_user)
  db.session.commit()
  g.user = new_user
  # Authorize the user
  token = new_user.generate_token()
  return jsonify(user=new_user.as_dict(), token=token.decode('ascii'), status_code=201)

def update_user(id, **update_values):
  user = User.query.get(id)
  if user and user.id == g.user.id:
    for key, value in update_values.items():
      setattr(user, key, value)
    db.session.commit()
    return jsonify(user.as_dict())
  else:
    raise Exception('Error updating user at id {}'.format(id))

