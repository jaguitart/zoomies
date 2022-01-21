from .db import db


class Account_type(db.Model):
  __tablename__ = 'account_types'
  
  
  id = db.Column(db.Integer, primary_key=True)
  type = db.Column(db.String(255))
  
  users = db.relationship("User", back_populates="account_types")
  
  
  def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
        }