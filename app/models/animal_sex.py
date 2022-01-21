from .db import db


class Animal_sex(db.Model):
  __tablename__ = 'sexs'
  
  
  id = db.Column(db.Integer, primary_key=True)
  sex = db.Column(db.String(100))
  
  pet_posts = db.relationship('Pet_Post', back_populates='sexs')
  
  
  def to_dict(self):
        return {
            'id': self.id,
            'sex': self.sex,
        }