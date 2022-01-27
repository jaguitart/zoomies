from flask import Blueprint, jsonify, request
from app.models import db, Animal_breed, Animal_sex, Animal_vaccination_status, Animal_color, Animal_type, Animal_age, Account_type


dropdown_routes = Blueprint('dropdown', __name__)


# GET /api/dropdown/breed
@dropdown_routes.route('/breed')
def get_all_breeds():
    breeds = Animal_breed.query.all()
    return {'breed': [breed.to_dict() for breed in breeds]}

# GET /api/dropdown/sex
@dropdown_routes.route('/sex')
def get_all_sexs():
    sexs = Animal_sex.query.all()
    return {'sex': [sex.to_dict() for sex in sexs]}

# GET /api/dropdown/vaccination_status
@dropdown_routes.route('/vaccination_status')
def get_all_vaccination_status():
    vaccinations_status = Animal_vaccination_status.query.all()
    return {'vaccination_status': [vaccination_status.to_dict() for vaccination_status in vaccinations_status]}

# GET /api/dropdown/color
@dropdown_routes.route('/color')
def get_all_colors():
    colors = Animal_color.query.all()
    return {'color': [color.to_dict() for color in colors]}

# GET /api/dropdown/type
@dropdown_routes.route('/type')
def get_all_types():
    types = Animal_type.query.all()
    return {'type': [type.to_dict() for type in types]}

# GET /api/dropdown/age
@dropdown_routes.route('/age')
def get_all_ages():
    ages = Animal_age.query.all()
    return {'age': [age.to_dict() for age in ages]}

# GET /api/dropdown/account_type
@dropdown_routes.route('/account_type')
def get_all_account_types():
    account_types = Account_type.query.all()
    return {'account_type': [account_type.to_dict() for account_type in account_types]}
