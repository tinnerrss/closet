from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app import app
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    photo = db.Column(db.String(150))

    items = db.relationship('Item', backref='user', lazy=True)

    def __repr__(self):
        return f"💁‍♀️User(id={self.id}, name='{self.name}', email='{self.email}', password='{self.password}, photo='{self.photo}')💁‍♀️"

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'password': self.password,
            'photo': self.photo
        }


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

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'available': self.available,
            'photo': self.photo
        }    


dates_outfits = db.Table('dates_outfits',
    db.Column('date_id', db.Integer, db.ForeignKey('dates.id'), primary_key=True),
    db.Column('outfit_id', db.Integer, db.ForeignKey('outfits.id'), primary_key=True))


class Outfit(db.Model):
    __tablename__ = 'outfits'

    id = db.Column(db.Integer, primary_key=True)
    occasion = db.Column(db.String(150))
    
    items = db.relationship('Item', backref='outfits', secondary=items_outfits, lazy=True)


    def __repr__(self):
        return f"👗Item(id={self.id}, occasion='{self.occasion})'👗"

    def as_dict(self):
        return{
            'id': self.id,
            'occasion': self.occasion
        }


class Date(db.Model):
    __tablename__ = 'dates'

    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(150))

    outfits = db.relationship('Outfit', backref='dates', secondary=dates_outfits, lazy=True)

    def __repr__(self):
        return f"📅Item(id={self.id}, day='{self.day})'📅"

    def as_dict(self):
        return{
            'id': self.id,
            'day': self.day
        }




