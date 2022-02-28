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
    arc_ca = User(
        account_type_id=2,
        username= 'ARCCalifornia',
        name='Animal Rescue Center of California',
        email='arc@arc.io',
        bio="Is a non-profit 501c3 that is dedicated to rescuing animals who are living on the street or who have been abandoned, and find them forever homes. In our care, they are given medical attention; including all vetting, spaying/neutering and chipping. Most importantly, we give them emotional support, love, food and a safe environment.",
        password='password',
        profile_pic='https://scontent.fsac1-2.fna.fbcdn.net/v/t1.6435-9/123247294_102903858298386_5287172833751236369_n.png?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OiB38Wejnv0AX_1_HH9&_nc_ht=scontent.fsac1-2.fna&oh=00_AT8aVzEGx-aIFs2qREYRhghc229406TjQlhitD5B_3TWKA&oe=622B4192',
        # logo='',
        # lat='',
        # lng=''
    )


    db.session.add(demo_user)
    db.session.add(demo_organization)
    db.session.add(arc_ca)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
