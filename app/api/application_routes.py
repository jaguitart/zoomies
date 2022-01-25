from flask import Blueprint, jsonify, request
from app.models import application, db
from flask_login import login_required
from app.models import Application
from app.forms.application_form import NewApplicationForm

application_routes = Blueprint('applications', __name__)

# GET /api/applications/
@application_routes.route('/')
def get_all_application():
    applications = Application.query.all()
    return {'applications': [application.to_dict() for application in applications]}

# DELETE /api/applications/:applicationId
@application_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_application(id):
    application = Application.query.get(id)
    db.session.delete(application)
    db.session.commit()
    return "Application deleted"

# PUT /api/applications/:applicationId
@application_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_application(id):
    form = NewApplicationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        application = Application.query.get(id)
        application.answer1 = form.data['answer1']
        application.answer2 = form.data['answer2']
        application.answer3 = form.data['answer3']
        if form.data['status']!= '':
            application.status = form.data['status']
        db.session.commit()
        return {'application': application.to_dict()}
    return "Application updated"