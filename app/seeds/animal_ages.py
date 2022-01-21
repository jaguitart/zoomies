from app.models import db, Animal_age


def seed_animal_ages():
    Baby = Animal_age(age="Baby")
    Young = Animal_age(age="Young")
    Mature = Animal_age(age="Mature")
    Senior = Animal_age(age="Senior")

    db.session.add(Baby)
    db.session.add(Young)
    db.session.add(Mature)
    db.session.add(Senior)

    db.session.commit()


def undo_animal_ages():
    db.session.execute('TRUNCATE animal_ages RESTART IDENTITY CASCADE;')
    db.session.commit()