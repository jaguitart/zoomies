from sqlalchemy import lateral
from .db import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    account_type_id = db.Column(db.Integer, nullable=False)
    username = db.Column(db.String(50), nullable=False, unique=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    bio = db.Column(db.String(2000))
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_pic = db.Column(db.String(2000))
    logo = db.Column(db.String(2000))
    lat = db.Column(db.Float)
    lng = db.Column(db.Float)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    #revisar relacion
    # account_types = db.relationship("Account_type", back_populates="users")
    

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
