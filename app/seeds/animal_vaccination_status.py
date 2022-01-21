from app.models import db, Animal_vaccination_status


def seed_animal_vaccination_status():
    Uptodate = Animal_vaccination_status(vaccination_status="Up to date")
    Incomplete = Animal_vaccination_status(vaccination_status="Incomplete")

    db.session.add(Uptodate)
    db.session.add(Incomplete)


    db.session.commit()


def undo_animal_vaccination_status():
    db.session.execute('TRUNCATE animal_vaccination_status RESTART IDENTITY CASCADE;')
    db.session.commit()