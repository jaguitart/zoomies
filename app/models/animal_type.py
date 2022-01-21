from .db import db


class Animal_type(db.Model):
  __tablename__ = 'types'
  
  
  id = db.Column(db.Integer, primary_key=True)
  type = db.Column(db.String(100))
  
  pet_posts = db.relationship('Pet_Post', back_populates='types')
  
  
  def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
        }