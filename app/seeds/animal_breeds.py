from app.models import db, Animal_breed


# def seed_animal_ages():
#     Dog = Animal_type(type="Dog")
#     Cat = Animal_type(type="Cat")


#     db.session.add(Dog)
#     db.session.add(Cat)


#     db.session.commit()


# def undo_types():
#     db.session.execute('TRUNCATE animal_types RESTART IDENTITY CASCADE;')
#     db.session.commit()