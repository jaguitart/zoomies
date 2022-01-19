from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Organization


def organization_exists(form, field):
    # Checking if user exists
    email = field.data
    organization = Organization.query.filter(Organization.email == email).first()
    if organization:
        raise ValidationError('Email address is already in use.')


def name_exists(form, field):
    # Checking if username is already in use
    name = field.data
    organization = Organization.query.filter(Organization.name == name).first()
    if organization:
        raise ValidationError('Username is already in use.')


class OrganizationSignUpForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired(), name_exists])
    email = StringField('email', validators=[DataRequired(), organization_exists])
    password = StringField('password', validators=[DataRequired()])
