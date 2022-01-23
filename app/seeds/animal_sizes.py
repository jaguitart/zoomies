from app.models import db, Animal_size


def seed_animal_sizes():
    Small = Animal_size(size="Small")
    Medium = Animal_size(size="Medium")
    Large = Animal_size(size="Large")


    db.session.add(Small)
    db.session.add(Medium)
    db.session.add(Large)


    db.session.commit()


def undo_animal_sizes():
    db.session.execute('TRUNCATE animal_sizes RESTART IDENTITY CASCADE;')
    db.session.commit()