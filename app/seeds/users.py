from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo_user = User(
        account_type_id= 1,
        username= 'Demo_User',
        name='Demo User',
        email='user@demo.io',
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique augue viverra luctus sodales. Phasellus iaculis finibus sollicitudin. Aenean mattis odio ut ex porttitor finibus id eget risus. Proin placerat mauris vel congue hendrerit. Phasellus ut diam sagittis, viverra neque cursus, hendrerit mi. Nam volutpat, arcu non pretium mattis, mauris justo sagittis enim, quis congue dolor ipsum id sem. Cras venenatis justo eget elementum tristique. Curabitur quis leo ut purus luctus posuere. Donec a mi et felis ultrices commodo a et arcu. Donec fringilla mauris vel facilisis malesuada.",
        password='password',
        profile_pic='https://dineoncampus.com/img/staff-placeholder.jpg',
        # logo='',
        # lat='',
        # lng=''
    )
    demo_organization = User(
        account_type_id=2,
        username= 'Demo_Org',
        name='Demo Organization',
        email='org@demo.io',
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique augue viverra luctus sodales. Phasellus iaculis finibus sollicitudin. Aenean mattis odio ut ex porttitor finibus id eget risus. Proin placerat mauris vel congue hendrerit. Phasellus ut diam sagittis, viverra neque cursus, hendrerit mi. Nam volutpat, arcu non pretium mattis, mauris justo sagittis enim, quis congue dolor ipsum id sem. Cras venenatis justo eget elementum tristique. Curabitur quis leo ut purus luctus posuere. Donec a mi et felis ultrices commodo a et arcu. Donec fringilla mauris vel facilisis malesuada.",
        password='password',
        profile_pic='https://i.imgur.com/xYK7gAR.jpg',
        # logo='',
        # lat='',
        # lng=''
    )


    db.session.add(demo_user)
    db.session.add(demo_organization)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
