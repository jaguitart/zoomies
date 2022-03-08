from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo_user = User(
        account_type_id= 1,
        username= 'Boo',
        name='Mary Gibbs',
        email='user@demo.io',
        bio="I am a young girl who is not scared of any monsters except occasionally Randall. I am looking to adopt my own 4-legs/fluffy monster!",
        password='password',
        profile_pic='https://static.wikia.nocookie.net/monstersincmovies/images/4/47/Boo-0.jpg/revision/latest/scale-to-width-down/1200?cb=20161105200356',
        # logo='',
        # lat='',
        # lng=''
    )
    demo_organization = User(
        account_type_id=2,
        username= 'Monsters',
        name="Monsters, Inc.",
        email='org@demo.io',
        bio="Monsters, Inc.'s main duty is to provide all citizens in Monstropolis with energy. We accomplish this by crossing into the Human World through the closets of children's bedrooms and giving them laughter and love in the shape of cats and dogs.",
        password='password',
        profile_pic='https://i.pinimg.com/736x/f0/03/a4/f003a480fb3fa2f3ffcb1952b886f728.jpg',
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
