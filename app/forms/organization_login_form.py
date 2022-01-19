from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Organization


def organization_exists(form, field):
    # Checking if user exists
    email = field.data
    organization = Organization.query.filter(Organization.email == email).first()
    if not organization:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    organization = Organization.query.filter(Organization.email == email).first()
    if not Organization:
        raise ValidationError('No such user exists.')
    if not organization.check_password(password):
        raise ValidationError('Password was incorrect.')


class OrganizationLoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), organization_exists])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])