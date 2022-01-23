from app.models import db, Animal_color


def seed_animal_colors():
    Black = Animal_color(color="Black")
    Brown = Animal_color(color="Brown")
    Gold = Animal_color(color="Gold")
    Cream = Animal_color(color="Cream")
    Grey = Animal_color(color="Grey")
    White = Animal_color(color="White")
    Red = Animal_color(color="Red(Ginger)")


    db.session.add(Black)
    db.session.add(Brown)
    db.session.add(Gold)
    db.session.add(Cream)
    db.session.add(Grey)
    db.session.add(White)
    db.session.add(Red)


    db.session.commit()


def undo_animal_colors():
    db.session.execute('TRUNCATE animal_colors RESTART IDENTITY CASCADE;')
    db.session.commit()