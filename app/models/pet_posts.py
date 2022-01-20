from .db import db
from datetime import datetime


class Pet_Post(db.Model):
    __tablename__ = 'pet_posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    type = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    sex = db.Column(db.String(50), nullable=False)
    age = db.Column(db.String(50), nullable=False)
    color = db.Column(db.String(50), nullable=False)
    breed = db.Column(db.String(50))
    pic_url1 = db.Column(db.String(2000))
    pic_url2 = db.Column(db.String(2000))
    pic_url3 = db.Column(db.String(2000))
    characteristics = db.Column(db.String(300))
    vaccination_status = db.Column(db.String(50), nullable=False)
    bio = db.Column(db.String(2000))
    question1 = db.Column(db.String(500))
    question2 = db.Column(db.String(500))
    question3 = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    users = db.relationship("User", back_populates="pet_posts")

    def to_dict(self):

        return {
            'id': self.id,
            'user_id': self.user_id,
            'type': self.type,
            'name': self.name,
            'sex': self.sex,
            'age': self.age,
            'color': self.color,
            'breed': self.breed,
            'pic_url1': self.pic_url1,
            'pic_url2': self.pic_url2,
            'pic_url3': self.pic_url3,
            'characteristics': self.characteristics,
            'vaccination_status': self.vaccination_status,
            'bio': self.bio,
            'question1': self.question1,
            'question2': self.question2,
            'question3': self.question3,
            'username': self.users.username,
            'created_at': self.created_at,
        }