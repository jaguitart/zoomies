from app.models import db, Pet_Post


def seed_pet_posts():
    Dog1 = Pet_Post(
      user_id=2,
      type_id=1,
      name='Eugene',
      sex_id=1,
      age_id=2,
      size_id=1,
      color_id=4,
      breed_id=1,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54073913/1/?bust=1641934113&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54073913/2/?bust=1641934114&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54073913/3/?bust=1641934115&width=720',
      characteristics='Good for a home with kids',
      vaccination_status_id=1,
      bio='Eugene and Carl are ready to begin the search for their forever homes! These 5-month-old boys are Pug, Terrier, possible Poodle mixes? Their estimated DOB is 7/21/21. They were surrendered to us when they were about 12 weeks old. They are all between 3 and 7lbs currently. Yes, they are small. We don’t think they’ll be more than 10lbs when they mature but make no guarantee on their breed or size. Eugene is the biggest and most outgoing puppy. He loves to play with his littermates and the other dogs in his foster home. Alfred is the most reserved puppy initially but is a little spitfire once he’s comfortable. Carl is the smallest and also can be slightly reserved but likes to follow his foster mom around. All will need continued socialization. The ideal homes for these boys would be adult only and where there is someone home a majority of the time. They are still working on house training and crate training. When applying, please be aware that they are going to require regular professional groomings. Upon adoption they will be neutered, utd on vaccinations, dewormed, microchipped, on Bravecto and sent home with a 6 month supply of Tri-Heart. They are being fostered in Olivehurst CA.',
      question1='Do you currently have dogs or other pets?',
      question2='Where will the dog be kept during the day? At night?',
      question3='Why do you think this is the right time in your lives to adopt a dog?',
      )

    Dog2 = Pet_Post(
      user_id=2,
      type_id=1,
      name='Drake',
      sex_id=1,
      size_id=1,
      age_id=2,
      color_id=3,
      breed_id=12,
      pic_url1='https://www.thesprucepets.com/thmb/Kh-xt27-hqeQzhyr9288cl_P64I=/1396x1396/smart/filters:no_upscale()/twenty20_f84c633e-705e-4bf8-a724-00cdea750d8d-590b51893df78c92837b18d6.jpg',
      pic_url2='https://t1.uc.ltmcdn.com/en/images/3/0/5/img_how_big_does_a_chihuahua_get_6503_600.jpg',
      pic_url3='https://www.parkvet.net/sites/default/files/styles/large/public/chihuahua-dog-breed-info.jpg?itok=KivcoaVx',
      characteristics='Good for a home with other pets',
      vaccination_status_id=2,
      bio='Drake, 12 year old, male, chihuahua mix. He seems to get along with both dogs and cats',
      question1='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      question2='Why do you think this is the right time in your lives to adopt a dog?',
      question3='How many other people share the same household with you?',
      )

    Cat1 = Pet_Post(
      user_id=2,
      type_id=2,
      name='Millie',
      sex_id=2,
      size_id=2,
      age_id=3,
      color_id=4,
      breed_id=44,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49842155/5/?bust=1612900968&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49842155/1/?bust=1605849450&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49842155/3/?bust=1605849424&width=720',
      characteristics='Calm Playful',
      vaccination_status_id=1,
      bio="Millie was born on July 14, 2010 with a crooked short tail. Her mom was feral (wild) and she abandoned Millie and her brother when they were around 8 weeks old. They were taken in and raised indoors by a loving family until circumstances changed and they were surrendered to 2nd Chance Rescue Kitties. What we know about Millie - she had her teeth removed years ago due to dental disease and is doing great. We found out that she is diabetic in August 2020 and started insulin treatment. She needs it twice a day and is very easy to inject. We just put some treats in front of her and while she is munching, give her the shot. She doesn't put up any resistance or fuss. She is doing great with her current dosage.",
      question1='Why do you think this is the right time in their lives to adopt a cat?',
      question2='What are your daily activities, schedule, and hobbies?' ,
      question3='How many other people share the same household with you?',
      )

    Cat2 = Pet_Post(
      user_id=2,
      type_id=2,
      name='Bruce',
      sex_id=1,
      size_id=1,
      age_id=3,
      color_id=1,
      breed_id=1,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52696793/1/?bust=1629847744&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52696793/2/?bust=1629847745&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52696793/5/?bust=1629847750&width=720',
      characteristics='House-trained Funny',
      vaccination_status_id=2,
      bio='Bruce is a goofy guy who likes to lounge on a bed or couch. He loves being part of a pet family, wanting to be friends with the other pets. He tries to rub his head on the kitties in his foster home but he is so big, he knocks them over!',
      question1='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      question2='Why do you think this is the right time in your live to adopt a cat?',
      question3='How will you provide for the cat if you have to go out of town?',
      )



    db.session.add(Dog1)
    db.session.add(Dog2)
    db.session.add(Cat1)
    db.session.add(Cat2)


    db.session.commit()


def undo_pet_posts():
    db.session.execute('TRUNCATE pet_posts RESTART IDENTITY CASCADE;')
    db.session.commit()