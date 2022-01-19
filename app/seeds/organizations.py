from app.models import db, Organization

def seed_organizations():
    demo = Organization(
        name='Demo Org', email='demoorg@aa.io', password='password')
    dogs = Organization(
        name='Dogs Org', email='dogs@aa.io', password='password')
    cats = Organization(
        name='Cats Org', email='cats@aa.io', password='password')

    db.session.add(demo)
    db.session.add(dogs)
    db.session.add(cats)

    db.session.commit()


def undo_organizations():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()