from app.models import db, Animal_sex


def seed_animal_sexs():
    Male = Animal_sex(sex="Male")
    Female = Animal_sex(sex="Female")

    db.session.add(Male)
    db.session.add(Female)

    db.session.commit()


def undo_animal_sexs():
    db.session.execute('TRUNCATE animal_sexs RESTART IDENTITY CASCADE;')
    db.session.commit()