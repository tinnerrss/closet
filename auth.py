# from flask import (
#     Blueprint, flash, redirect, render_template, request, session, url_for
# )
# from werkzeug.security import check_password_hash, generate_password_hash
# from flask_login import login_user, logout_user, login_required
# from models import User, app, db




# @app.route('/login', method=['POST'])
# def login_post():
#     email = request.form.get('email')
#     password = request.form.get('password')
#     remember = True if request.form.get('rememeber') else False

#     user = User.query.filter_by(email=email).first()

#     if not user and not check_password_hash(user.password, password):
#         flash('Please check your login details and try again.')
#         return redirect(url_for('auth.login'))

#     login_user(user, remember=remember)


#     return redirect(url_for('main.profile'))

# @app.route('/signup')
# def signup():
#     email = request.form.get('email')
#     name = request.form.get('name')
#     password = request.form.get('password')

#     user = User.query.filter_by(email=email).first()

#     if user:
#         flask('Email address already exists.')
#         return redirect(url_for('auth.login'))
    
#     new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))

#     db.session.add(new_user)
#     db.session.commit()


#     return redirect(url_for('auth.login'))

# @app.route('/logout')
# @login_required
# def logout():
#     logout_user()
#     return redirected(url_for('main.index'))


