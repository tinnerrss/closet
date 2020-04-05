from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/closet'
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    photo = db.Column(db.String(150))

    items = db.relationship('Item', backref='user', lazy=True)

    def __repr__(self):
        return f"💁‍♀️User(id={self.id}, name='{self.name}', email='{self.email}', photo='{self.photo}')💁‍♀️"


items_outfits = db.Table('items_outfits',
    db.Column('item_id', db.Integer, db.ForeignKey('items.id'), primary_key=True),
    db.Column('outfit_id', db.Integer, db.ForeignKey('outfits.id'), primary_key=True))



class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    category = db.Column(db.String, nullable=False)
    available = db.Column(db.Boolean, nullable=False)
    photo = db.Column(db.String(150))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='SET NULL'))


    def __repr__(self):
        return f"👚Item(id={self.id}, name='{self.name}', category='{self.category}', available='{self.available}', photo='{self.photo}', user_id={self.user_id})👚"


dates_outfits = db.Table('dates_outfits',
    db.Column('date_id', db.Integer, db.ForeignKey('dates.id'), primary_key=True),
    db.Column('outfit_id', db.Integer, db.ForeignKey('outfits.id'), primary_key=True))


class Outfit(db.Model):
    __tablename__ = 'outfits'

    id = db.Column(db.Integer, primary_key=True)
    occassion = db.Column(db.String(150))
    

    def __repr__(self):
        return f"👗Item(id={self.id}, occassion='{self.occassion})'👗"


class Date(db.Model):
    __tablename__ = 'dates'

    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(150))

    def __repr__(self):
        return f"📅Item(id={self.id}, occassion='{self.occassion})'📅"




