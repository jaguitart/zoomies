from app.models import db, Account_type


def seed_types():
    User = Account_type(type ="User")
    Organization = Account_type(type="Organization")

    db.session.add(User)
    db.session.add(Organization)

    db.session.commit()


def undo_types():
    db.session.execute('TRUNCATE account_types RESTART IDENTITY CASCADE;')
    db.session.commit()