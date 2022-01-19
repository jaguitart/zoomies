from flask import Blueprint, jsonify, session, request
from app.models import Organization, db
from app.forms import OrganizationLoginForm
from app.forms import OrganizationSignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_organizations_routes = Blueprint('organizations_auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_organizations_routes.route('/')
def organization_authenticate():
    """
    Authenticates a organizations.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_organizations_routes.route('/login', methods=['POST'])
def organization_login():
    """
    Logs a organization in
    """
    form = OrganizationLoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        organization = Organization.query.filter(Organization.email == form.data['email']).first()
        login_user(organization)
        return organization.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_organizations_routes.route('/logout')
def organization_logout():
    """
    Logs a organization out
    """
    logout_user()
    return {'message': 'Organization logged out'}


@auth_organizations_routes.route('/signup', methods=['POST'])
def organization_sign_up():
    """
    Creates a new organizations and logs them in
    """
    form = OrganizationSignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        organization = Organization(
            name=form.data['name'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(organization)
        db.session.commit()
        login_user(organization)
        return organization.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_organizations_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
