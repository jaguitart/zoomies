from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo_user = User(
        account_type_id= 1,
        username= 'Demo_User',
        name='Demo User',
        email='user@demo.io',
        bio="I'm a Demo User",
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
        bio="I'm a Demo Org",
        password='password',
        profile_pic='https://dineoncampus.com/img/staff-placeholder.jpg',
        logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQb3FSmQ-eNUntpOFN_Wy9crw4WIZHD3fKhyoygjwN6AKdWjeASfEEui5Uiu_YHYFdZo&usqp=CAU',
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
