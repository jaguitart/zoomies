from app.models import db, Pet_Post


def seed_pet_posts():
    Dog1 = Pet_Post(
      user_id=2,
      type='dog',
      name='Dogo',
      sex='Male',
      age=1,
      color='black',
      breed='mix',
      pic_url1='https://images.pexels.com/photos/2125049/pexels-photo-2125049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      # pic_url2=,
      # pic_url3=,
      # characteristics=,
      vaccination_status='ok',
      # bio=,
      # question1=,
      # question2=,
      # question3=,
      )

    Dog2 = Pet_Post(
      user_id=2,
      type='dog',
      name='Jack',
      sex='Male',
      age=2,
      color='brown',
      breed='mix',
      pic_url1='https://images.pexels.com/photos/3203535/pexels-photo-3203535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      # pic_url2=,
      # pic_url3=,
      # characteristics=,
      vaccination_status='ok',
      # bio=,
      # question1=,
      # question2=,
      # question3=,
      )

    Cat1 = Pet_Post(
      user_id=2,
      type='cat',
      name='Millie',
      sex='Female',
      age=1,
      color='orange',
      breed='mix',
      pic_url1='https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      # pic_url2=,
      # pic_url3=,
      # characteristics=,
      vaccination_status='ok',
      # bio=,
      # question1=,
      # question2=,
      # question3=,
      )

    Cat2 = Pet_Post(
      user_id=2,
      type='cat',
      name='Mylo',
      sex='Male',
      age=2,
      color='black',
      breed='mix',
      pic_url1='https://images.pexels.com/photos/2034264/pexels-photo-2034264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      # pic_url2=,
      # pic_url3=,
      # characteristics=,
      vaccination_status='ok',
      # bio=,
      # question1=,
      # question2=,
      # question3=,
      )



    db.session.add(Dog1)
    db.session.add(Dog2)
    db.session.add(Cat1)
    db.session.add(Cat2)


    db.session.commit()


def undo_pet_posts():
    db.session.execute('TRUNCATE pet_posts RESTART IDENTITY CASCADE;')
    db.session.commit()