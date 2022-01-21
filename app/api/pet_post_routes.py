from flask import Blueprint, jsonify, request
from app.models import db, Pet_Post
from flask_login import login_required, current_user
from app.forms import NewPetPostForm


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
    data = request.json
    form = NewPetPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Pet_Post(
            user_id=data['user_id'],
            type_id=form.data['type'],
            name=form.data['name'],
            sex_id=form.data['sex'],
            age_id=form.data['age'],
            color_id=form.data['color'],
            breed_id=form.data['breed'],
            pic_url1=form.data['pic_url1'],
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
