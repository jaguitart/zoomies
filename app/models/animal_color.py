from .db import db

# PUEDE SER MAS DE UNA EVALUAR LA POSIBILIDAD DE USAR MANY-to-MANY
class Animal_color(db.Model):
  __tablename__ = 'animal_colors'
  
  
  id = db.Column(db.Integer, primary_key=True)
  color = db.Column(db.String(50))
  
  pet_posts = db.relationship('Pet_Post', back_populates='animal_colors')
  
  
  def to_dict(self):
        return {
            'id': self.id,
            'color': self.color,
        }