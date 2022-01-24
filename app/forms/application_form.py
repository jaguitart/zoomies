from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Application



class NewApplicationForm(FlaskForm):

    answer1 = StringField('Answer1')
    answer2 = StringField('Answer2')
    answer3 = StringField('Answer3')
    status = StringField('Status')
    submit = SubmitField('Submit')