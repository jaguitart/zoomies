from .db import db


class Animal_vaccination_status(db.Model):
  __tablename__ = 'animal_vaccination_status'
  
  
  id = db.Column(db.Integer, primary_key=True)
  vaccination_status = db.Column(db.String(50))
  
  pet_posts = db.relationship('Pet_Post', back_populates='animal_vaccination_status')
  
  
  def to_dict(self):
        return {
            'id': self.id,
            'vaccination_status': self.vaccination_status,
        }