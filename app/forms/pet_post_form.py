from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Pet_Post



class NewPetPostForm(FlaskForm):

    type = StringField('Type')
    name = StringField('Name')
    sex = StringField('Sex')
    age = StringField('Age')
    size = StringField('size')
    color = StringField('Color')
    breed = StringField('Breed')
    pic_url1 = StringField('Pic_url1')
    pic_url2 = StringField('Pic_url2')
    pic_url3 = StringField('Pic_url3')
    characteristics = StringField('Characteristics')
    vaccination_status = StringField('Vaccination_status')
    bio = StringField('Bio')
    question1 = StringField('Question1')
    question2 = StringField('Question2')
    question3 = StringField('Question3')
    submit = SubmitField('Submit')