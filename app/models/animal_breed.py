from .db import db

# PUEDE SER MAS DE UNA EVALUAR LA POSIBILIDAD DE USAR MANY-to-MANY
class Animal_breed(db.Model):
  __tablename__ = 'animal_breeds'
  
  
  id = db.Column(db.Integer, primary_key=True)
  breed = db.Column(db.String(100))
  
  pet_posts = db.relationship('Pet_Post', back_populates='animal_breeds')
  
  
  def to_dict(self):
        return {
            'id': self.id,
            'breed': self.breed,
        }