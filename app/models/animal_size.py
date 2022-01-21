from .db import db


class Animal_size(db.Model):
  __tablename__ = 'animal_sizes'
  
  
  id = db.Column(db.Integer, primary_key=True)
  size = db.Column(db.String(100))
  
  pet_posts = db.relationship('Pet_Post', back_populates='animal_sizes')
  
  
  def to_dict(self):
        return {
            'id': self.id,
            'type': self.size,
        }