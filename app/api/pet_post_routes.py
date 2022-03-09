from flask import Blueprint, request
from app.models import db, Pet_Post, Application
from flask_login import login_required, current_user
from app.forms import NewPetPostForm, NewApplicationForm
from app.AWS.aws import (upload_file_to_s3, allowed_file, get_unique_filename)

post_routes = Blueprint('posts', __name__)


# GET /api/posts/:id
@post_routes.route('/<int:id>')
def get_post(id):
    post = Pet_Post.query.get(id)
    return post.to_dict()


# GET /api/posts
@post_routes.route('/')
def get_all_posts():
    posts = Pet_Post.query.all()
    return {'posts': [post.to_dict() for post in posts]}


# POST /api/posts
@post_routes.route('/', methods=["POST"])
@login_required
def new_post():
    if "pic_url1" not in request.files:
        return {"errors": "image required"}, 400
    image = request.files["pic_url1"]

    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400
    imgURL = upload["url"]

    form = NewPetPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Pet_Post(
            user_id=form.data['user_id'],
            type_id=form.data['type'],
            name=form.data['name'],
            sex_id=form.data['sex'],
            age_id=form.data['age'],
            size_id=form.data['size'],
            color_id=form.data['color'],
            breed_id=form.data['breed'],
            pic_url1=imgURL,
            pic_url2=form.data['pic_url2'],
            pic_url3=form.data['pic_url3'],
            characteristics=form.data['characteristics'],
            vaccination_status_id=form.data['vaccination_status'],
            bio=form.data['bio'],
            question1=form.data['question1'],
            question2=form.data['question2'],
            question3=form.data['question3']
        )
        db.session.add(post)
        db.session.commit()
        return {'post': post.to_dict()}
    return (form.errors)


# PUT /api/pet-posts/:id
@post_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_post(id):
    #     if "pic_url1" not in request.files:
    #     return {"errors": "image required"}, 400
    # image = request.files["pic_url1"]

    # image.filename = get_unique_filename(image.filename)
    # upload = upload_file_to_s3(image)

    # if "url" not in upload:
    #     return upload, 400
    # imgURL = upload["url"]


    form = NewPetPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Pet_Post.query.get(id)
        post.age_id = form.data['age'],
        post.pic_url1 = form.data['pic_url1'],
        post.pic_url2 = form.data['pic_url2'],
        post.pic_url3 = form.data['pic_url3'],
        post.characteristics = form.data['characteristics'],
        post.vaccination_status_id = form.data['vaccination_status'],
        post.bio = form.data['bio'],
        post.question1 = form.data['question1'],
        post.question2 = form.data['question2'],
        post.question3 = form.data['question3']
        db.session.commit()
        return {'post': post.to_dict()}
    return (form.errors)

# DELETE /api/pet-posts/:id
@post_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_post(id):
    post = Pet_Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return "Post deleted"

# GET /api/pet-posts/:id/applications
@post_routes.route('/<int:id>/applications')
def get_posts_applications(id):
    applications = Application.query.filter(Application.post_id==id).all()
    return {'applications': [application.to_dict() for application in applications]}


# POST /api/pet-posts/:id/applications
@post_routes.route('/<int:id>/applications', methods=["POST"])
@login_required
def new_application(id):
    data = request.json
    form = NewApplicationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        application = Application(
            user_id=data['user_id'],
            post_id=data['post_id'],
            answer1 = form.data['answer1'],
            answer2 = form.data['answer2'],
            answer3 = form.data['answer3']
        )
        db.session.add(application)
        db.session.commit()
        return application.to_dict()
    return (form.errors)

