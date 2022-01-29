from .db import db
from datetime import datetime


class Pet_Post(db.Model):
    __tablename__ = 'pet_posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    type_id = db.Column(db.String(50), db.ForeignKey("animal_types.id"), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    sex_id = db.Column(db.String(50), db.ForeignKey("animal_sexs.id"), nullable=False)
    size_id = db.Column(db.String(50), db.ForeignKey("animal_sizes.id"), nullable=False)
    age_id = db.Column(db.String(50), db.ForeignKey("animal_ages.id"), nullable=False)
    color_id = db.Column(db.String(50), db.ForeignKey("animal_colors.id"), nullable=False)
    breed_id = db.Column(db.String(50), db.ForeignKey("animal_breeds.id"))
    pic_url1 = db.Column(db.String(2000))
    pic_url2 = db.Column(db.String(2000))
    pic_url3 = db.Column(db.String(2000))
    characteristics = db.Column(db.String(300))
    vaccination_status_id = db.Column(db.String(50), db.ForeignKey("animal_vaccination_status.id"), nullable=False)
    bio = db.Column(db.String(2000))
    question1 = db.Column(db.String(500))
    question2 = db.Column(db.String(500))
    question3 = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    users = db.relationship("User", back_populates="pet_posts")
    types = db.relationship("Animal_type", back_populates="pet_posts")
    sexs = db.relationship("Animal_sex", back_populates="pet_posts")
    sizes = db.relationship("Animal_size", back_populates="pet_posts")
    ages = db.relationship("Animal_age", back_populates="pet_posts")
    colors = db.relationship("Animal_color", back_populates="pet_posts")
    breeds = db.relationship("Animal_breed", back_populates="pet_posts")
    vaccination_status = db.relationship("Animal_vaccination_status", back_populates="pet_posts")
    applications = db.relationship('Application', back_populates='pet_posts')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'profile_pic': self.users.profile_pic,
            'type': self.types.type,
            'name': self.name,
            'sex': self.sexs.sex,
            'size': self.sizes.size,
            'age': {'id':self.ages.id , 'age': self.ages.age},
            'color': self.colors.color,
            'breed': self.breeds.breed,
            'pic_url1': self.pic_url1,
            'pic_url2': self.pic_url2,
            'pic_url3': self.pic_url3,
            'characteristics': self.characteristics,
            'vaccination_status': {'id':self.vaccination_status.id , 'vaccination_status': self.vaccination_status.vaccination_status},
            'bio': self.bio,
            'question1': self.question1,
            'question2': self.question2,
            'question3': self.question3,
            'username': self.users.username,
            'applications': [{'id':application.id, 'status':application.status, 'post_id':application.post_id} for application in self.applications if application.post_id == self.id],
            'created_at': self.created_at,
        }