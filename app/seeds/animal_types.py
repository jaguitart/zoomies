from app.models import db, Animal_type


def seed_animal_types():
    Dog = Animal_type(type="Dog")
    Cat = Animal_type(type="Cat")


    db.session.add(Dog)
    db.session.add(Cat)


    db.session.commit()


def undo_animal_types():
    db.session.execute('TRUNCATE animal_types RESTART IDENTITY CASCADE;')
    db.session.commit()