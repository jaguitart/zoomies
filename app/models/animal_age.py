from .db import db


class Animal_age(db.Model):
  __tablename__ = 'animal_ages'
  
  
  id = db.Column(db.Integer, primary_key=True)
  age = db.Column(db.String(50))
  
  pet_posts = db.relationship('Pet_Post', back_populates='ages')
  
  
  def to_dict(self):
        return {
            'id': self.id,
            'age': self.age,
        }