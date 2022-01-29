from email.policy import default
from .db import db
from datetime import datetime


class Application(db.Model):
    __tablename__ = "applications"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey("pet_posts.id"),nullable=False)
    answer1 = db.Column(db.String(1000))
    answer2= db.Column(db.String(1000))
    answer3 = db.Column(db.String(1000))
    status = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())


    users = db.relationship('User', back_populates='applications')
    pet_posts = db.relationship('Pet_Post', back_populates='applications')


    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "answer1": self.answer1,
            "answer2": self.answer2,
            "answer3": self.answer3,
            "status": self.status,
            'created_at': self.created_at
        }
