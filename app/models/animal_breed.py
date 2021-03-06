from .db import db

# PUEDE SER MAS DE UNA EVALUAR LA POSIBILIDAD DE USAR MANY-to-MANY
class Animal_breed(db.Model):
  __tablename__ = 'animal_breeds'
  
  
  id = db.Column(db.Integer, primary_key=True)
  type = db.Column(db.String(50))
  breed = db.Column(db.String(100))
  
  pet_posts = db.relationship('Pet_Post', back_populates='breeds')
  
  
  def to_dict(self):
    if self.type == 'dog':
      type = 1
    else:
      type = 2
    return {
            'id': self.id,
            'type':type,
            'breed': self.breed
        }