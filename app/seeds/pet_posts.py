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

    Dog3 = Pet_Post(
      user_id=3,
      type_id=1,
      name='Brighton',
      sex_id=1,
      size_id=3,
      age_id=3,
      color_id=6,
      breed_id=3,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573411/1/?bust=1644450015&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573411/2/?bust=1644450015&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573411/4/?bust=1644450017&width=720',
      characteristics='House-trained Funny',
      vaccination_status_id=1,
      bio="Brighton is a great dog who will be a wonderful family member. As previously said, he loves to play with his toys and he is really a playful, loving, and gentle soul. He is not a bad walker and, in fact, he loves to walk. He is also a good car rider.",
      question1='Why do you think this is the right time in your live to adopt a dog?',
      question2='How will you provide for the dog if you have to go out of town?',
      question3='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      )

    Dog4 = Pet_Post(
      user_id=2,
      type_id=1,
      name='Brandy',
      sex_id=2,
      size_id=3,
      age_id=2,
      color_id=1,
      breed_id=18,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573396/1/?bust=1644449748&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573396/2/?bust=1644449749&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573396/4/?bust=1644449750&width=720',
      characteristics='House-trained Funny',
      vaccination_status_id=1,
      bio="Brandy, like all German Shepherds, is strong willed, smart, and can be domineering. She is also loving, devoted, protective, dependable, trainable, and we can't say this enough, smart. Brandy seems to like male dogs, and with them she loves to run and play and run.",
      question1='Why do you think this is the right time in your live to adopt a dog?',
      question2='How will you provide for the dog if you have to go out of town?',
      question3='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      )

    Dog5 = Pet_Post(
      user_id=3,
      type_id=1,
      name='Abby',
      sex_id=2,
      size_id=1,
      age_id=4,
      color_id=1,
      breed_id=48,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573370/2/?bust=1644449482&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573370/1/?bust=1644449481&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573370/4/?bust=1644449483&width=720',
      characteristics='Good in a home with other dogs, cats, children',
      vaccination_status_id=2,
      bio="Abby is 4.6 pounds and 10 weeks old. She loves her toys and is a little bundle of energy. She gets along with other dogs and cats, and would be a great addition to a home with existing pets. She would love to have a human sibling to snuggle up with on the couch.",
      question1='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      question2='Why do you think this is the right time in your live to adopt a dog?',
      question3='How will you provide for the dog if you have to go out of town?',
      )

    Dog6 = Pet_Post(
      user_id=2,
      type_id=1,
      name='Bruno',
      sex_id=1,
      size_id=2,
      age_id=4,
      color_id=1,
      breed_id=33,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573366/3/?bust=1644450056&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573366/1/?bust=1644450062&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573366/2/?bust=1644450048&width=720',
      characteristics='Sweet Loving Gentle',
      vaccination_status_id=1,
      bio="Bruno is a sweet, loving, gentle guy that loves getting pets. He enjoys meeting new people and is very affectionate but isn't clingy. Bruno's favorite activities are sunbathing in the morning, getting pets from his people, and daily walks. He's calm in the house, preferring to curl up in his bed when you're doing work or other things. He learns very quickly and is respectful of boundaries that you set. He's an affectionate licker and when offered your hand, will lick for minutes at a time and may gently nibble your fingers out of affection. Bruno's learning to play with toys - he loves soft plushies that he can lick all over and gently chew. His greatest nemesis are loud vehicles: motorcycles, delivery trucks.",
      question1='Why do you think this is the right time in your live to adopt a dog?',
      question2='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      question3='How will you provide for the dog if you have to go out of town?',
      )
      
    Dog7 = Pet_Post(
      user_id=3,
      type_id=1,
      name='Lucy',
      sex_id=2,
      size_id=1,
      age_id=1,
      color_id=2,
      breed_id=32,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573362/1/?bust=1644450046&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573362/4/?bust=1644450048&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573362/5/?bust=1644450055&width=720',
      characteristics='Loyal',
      vaccination_status_id=2,
      bio="Lucy came to us from a backyard breeder situation where she was the protector of the pack. Consequently, she is very tolerant of other small dogs. Lucy is housetrained using a dog door and sleeps quietly in a crate at night. Trimming her nails is a breeze. Her vet care is up-to-date, including a recent dental cleaning. Lucy does need some leash work as her adventurous spirit sometimes gets the better of her.",
      question1='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      question2='Why do you think this is the right time in your live to adopt a dog?',
      question3='How will you provide for the dog if you have to go out of town?',
      )

    Dog8 = Pet_Post(
      user_id=2,
      type_id=1,
      name='West',
      sex_id=1,
      size_id=3,
      age_id=4,
      color_id=2,
      breed_id=4,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573354/2/?bust=1644449392&width=720',
      # pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573366/1/?bust=1644450062&width=720',
      # pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573366/2/?bust=1644450048&width=720',
      characteristics='Outgoing Playful',
      vaccination_status_id=1,
      bio="Wild West is a dilute brindle boy! He has been the show stealer of the litter since he could walk. He is outgoing, playful, and a tad wild!",
      question1='Why do you think this is the right time in your live to adopt a dog?',
      question2='How will you provide for the dog if you have to go out of town?',
      question3='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      )

    Dog9 = Pet_Post(
      user_id=3,
      type_id=1,
      name='Lilian',
      sex_id=2,
      size_id=1,
      age_id=4,
      color_id=2,
      breed_id=12,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573341/1/?bust=1644449837&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573341/3/?bust=1644449834&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573341/2/?bust=1644449836&width=720',
      characteristics='Easy going',
      vaccination_status_id=1,
      bio="We took Lillian and Ellis out the other day. Super fun doggies. This is the second time we have taken Lillian because she is just so darn easy. She walks nicely on a leash, does great in the car and loves to cuddle.",
      question1='Why do you think this is the right time in your live to adopt a dog?',
      question2='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      question3='How will you provide for the dog if you have to go out of town?',
      )

    Dog10 = Pet_Post(
      user_id=2,
      type_id=1,
      name='Pepper',
      sex_id=2,
      size_id=2,
      age_id=3,
      color_id=5,
      breed_id=32,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573297/1/?bust=1644449520&width=720',
      # pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573341/3/?bust=1644449834&width=720',
      # pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573341/2/?bust=1644449836&width=720',
      characteristics='Friendly Loyal',
      vaccination_status_id=1,
      bio="Sweet Pepper has been a shelter favorite for a long time! She had to wait for a dental procedure and has been enjoying life in her loving foster home. She is playful, walks well on leash, loves cuddles and playtime. She has done well spending time with children 10+. This cutie is also potty trained and very treat motivated. She would love to meet her perfect forever home!",
      question1='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      question2='Why do you think this is the right time in your live to adopt a dog?',
      question3='How will you provide for the dog if you have to go out of town?',
      )

    Dog11 = Pet_Post(
      user_id=3,
      type_id=1,
      name='Stormy',
      sex_id=2,
      size_id=2,
      age_id=3,
      color_id=4,
      breed_id=32,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573410/1/?bust=1644450016&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573341/3/?bust=1644449834&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54573341/2/?bust=1644449836&width=720',
      characteristics='Curious Independent Quiet',
      vaccination_status_id=1,
      bio="Shut the front door and look at all this scruff and fluff! We found Stormy on a, you guessed it, stormy day. But she brought some sunshine into that day for us! We learned that she was saved from a home where she was tied out on a chain, living in the mud with no shelter and no human to give her attention or love. Despite her crappy background, she is open to trusting and loving people. She has learned to walk well on leash and is becoming more and more confident as the days go on. We are so excited for Stormy to get a home with a wam, soft bed and her very own people to love on her.",
      question1='Why do you think this is the right time in your live to adopt a dog?',
      question2='Do you agree to a neuter and vaccine commitment, if the pet being adopted has not been fixed or had all of their essential shots yet?',
      question3='How will you provide for the dog if you have to go out of town?',
      )

    Cat3 = Pet_Post(
      user_id=3,
      type_id=2,
      name='Judi',
      sex_id=2,
      size_id=2,
      age_id=4,
      color_id=4,
      breed_id=42,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53895754/1/?bust=1639457110&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53895754/3/?bust=1639457112&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53895754/2/?bust=1639457111&width=720',
      characteristics='Prefers a home without other cats or children',
      vaccination_status_id=1,
      bio="I'm well behaved. I don't jump up on countertops and don't scratch furniture. I enjoy cat trees and I like to sleep in my “hooman's” bed. I'm not particularly fond of cat beds. I'll choose a carpeted floor first. Like a good kitty, I use my plain style litter pan properly. I like wet food* and kibble and drink lots of water. I enjoy being groomed with a brush and slicker but I resist tummy grooming. Also, I prefer short and sweet tummy rubs.",
      question1='What are your daily activities, schedule, and hobbies?' ,
      question2='Why do you think this is the right time in their lives to adopt a cat?',
      question3='How many other people share the same household with you?',
      )

    Cat4 = Pet_Post(
      user_id=2,
      type_id=2,
      name='Bobb',
      sex_id=2,
      size_id=1,
      age_id=1,
      color_id=5,
      breed_id=36,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54566796/6/?bust=1644424845&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54566796/2/?bust=1644424842&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54566796/3/?bust=1644424843&width=720',
      characteristics='Affectionate Gentle Playful',
      vaccination_status_id=2,
      bio="Bobb is a very sweet loving kitten. As soon as you pick her up she purrs like crazy. She is a special kitten, her and her brother were both born with bob tails. We were told she is a manx mix but she is a rescue we just know they were born with bob tails. Very cute girl that gets along with the other cats and likes all humans she has met so far.",
      question1='Why do you think this is the right time in their lives to adopt a cat?',
      question2='How many other people share the same household with you?',
      question3='What are your daily activities, schedule, and hobbies?' ,
      )

    Cat5 = Pet_Post(
      user_id=3,
      type_id=2,
      name='Noah',
      sex_id=1,
      size_id=2,
      age_id=3,
      color_id=1,
      breed_id=48,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41051417/1/?bust=1519669567&width=720',
      # pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54566796/2/?bust=1644424842&width=720',
      # pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54566796/3/?bust=1644424843&width=720',
      characteristics='Playful Active',
      vaccination_status_id=1,
      bio="Noah is a very playful sweet kitty",
      question1='Why do you think this is the right time in their lives to adopt a cat?',
      question2='How many other people share the same household with you?',
      question3='What are your daily activities, schedule, and hobbies?' ,
      )

    Cat6 = Pet_Post(
      user_id=2,
      type_id=2,
      name='Fluffly',
      sex_id=2,
      size_id=2,
      age_id=3,
      color_id=5,
      breed_id=48,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/32482975/3/?bust=1452517691&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/32482975/1/?bust=1465829529&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/32482975/2/?bust=1447934855&width=720',
      characteristics='Curious Independent',
      vaccination_status_id=1,
      bio="I am Fluffly and I am super happy to be here. I used to live at a tire shop where the nice workers fed me and loved me as much as they could. They said it was okay for FieldHaven to take me in to be spayed and find me a loving home. Oh boy do I want a loving home where I can get tons and tons of attention. I love people and other cats a lot! I crave attention and pets and really enjoy climbing into laps.",
      question1='Why do you think this is the right time in their lives to adopt a cat?',
      question2='How many other people share the same household with you?',
      question3='What are your daily activities, schedule, and hobbies?' ,
      )

    Cat7 = Pet_Post(
      user_id=2,
      type_id=2,
      name='Bo',
      sex_id=1,
      size_id=3,
      age_id=1,
      color_id=1,
      breed_id=48,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52301747/2/?bust=1625881298&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52301747/3/?bust=1625881304&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52301747/1/?bust=1625881294&width=720',
      characteristics='House trained',
      vaccination_status_id=1,
      bio="Bo... he's a cuddler! He likes people he will seek out people's attention sometimes more then their siblings. He will sleep on our laps while all the others play. He has been raised in a home with other cats and lots of people to love. If you think he would be a good fit please click on the link below complete and return the application.",
      question1='How many other people share the same household with you?',
      question2='Why do you think this is the right time in their lives to adopt a cat?',
      question3='What are your daily activities, schedule, and hobbies?' ,
      )

    Cat8 = Pet_Post(
      user_id=2,
      type_id=2,
      name='Pickle',
      sex_id=1,
      size_id=3,
      age_id=1,
      color_id=5,
      breed_id=48,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52019999/2/?bust=1624072343&width=720',
      # pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52301747/3/?bust=1625881304&width=720',
      # pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52301747/1/?bust=1625881294&width=720',
      characteristics='Independent',
      vaccination_status_id=1,
      bio="This is sweet pickle boy he is fostered with wasabi olives pickles and pepper. He is a fun loving guy who is fostering at home with dogs cats and kids. His foster family says he is a joy to have around a super fun playful boy.",
      question1='How many other people share the same household with you?',
      question2='Why do you think this is the right time in their lives to adopt a cat?',
      question3='What are your daily activities, schedule, and hobbies?' ,
      )

    Cat9 = Pet_Post(
      user_id=3,
      type_id=2,
      name='Sadie',
      sex_id=2,
      size_id=2,
      age_id=2,
      color_id=5,
      breed_id=36,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53341159/3/?bust=1634933435&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53341159/1/?bust=1634933433&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53341159/2/?bust=1634933434&width=720',
      characteristics='Playful Curious Quiet Loyal',
      vaccination_status_id=1,
      bio="Sadie and her siblings were born to a community cat and found living underneath a manufactured home. A Good Samaritan couldn't leave them there and reached out to Lapcats for assistance. When Sadie arrived she was cautious and sassy, definitely a girl that knows what she wants! Sadie is still very cautious and shy around strangers but she is very sweet with her foster mom. Sadie greets her foster mom at the door and rubs against anything nearby just to say look how cute I am, come pet me! She also loves laying in her cat tree and will roll around to show her belly for pets. Sadie is sweet and loves attention once she is comfortable with her family but she doesn't like to be held.",
      question1='Why do you think this is the right time in their lives to adopt a cat?',
      question2='How many other people share the same household with you?',
      question3='What are your daily activities, schedule, and hobbies?' ,
      )

    Cat10 = Pet_Post(
      user_id=2,
      type_id=2,
      name='Cricket',
      sex_id=2,
      size_id=2,
      age_id=4,
      color_id=1,
      breed_id=48,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52769747/1/?bust=1644424409&width=720',
      # pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53341159/1/?bust=1634933433&width=720',
      # pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53341159/2/?bust=1634933434&width=720',
      characteristics='Good in a home with othe cats',
      vaccination_status_id=1,
      bio="Cricket is a beautiful black and white 12 year old senior girl.Due to a viral infection, Cricket's left eye was surgically removed when she was 10. She will slowly continue to lose vision in her right eye over time. She has adapted quite well to the loss of vision.",
      question1='Why do you think this is the right time in their lives to adopt a cat?',
      question2='What are your daily activities, schedule, and hobbies?' ,
      question3='How many other people share the same household with you?',
      )

    Cat11 = Pet_Post(
      user_id=3,
      type_id=2,
      name='Cremini',
      sex_id=2,
      size_id=2,
      age_id=1,
      color_id=5,
      breed_id=48,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54555182/1/?bust=1644350712&width=720',
      # pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53341159/1/?bust=1634933433&width=720',
      # pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53341159/2/?bust=1634933434&width=720',
      characteristics='Easy going',
      vaccination_status_id=1,
      bio="Cremini is an adorable, 8-week old female kitten looking for her forever home. She has been at the shelter since Jan 12.",
      question1='Why do you think this is the right time in their lives to adopt a cat?',
      question2='How many other people share the same household with you?',
      question3='What are your daily activities, schedule, and hobbies?' ,
      )

    Cat12 = Pet_Post(
      user_id=2,
      type_id=2,
      name='Ivory',
      sex_id=2,
      size_id=2,
      age_id=3,
      color_id=6,
      breed_id=48,
      pic_url1='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54519307/1/?bust=1644178225&width=720',
      pic_url2='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54519307/2/?bust=1644286227&width=720',
      pic_url3='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54519307/2/?bust=1644286227&width=720',
      characteristics='Playful Active',
      vaccination_status_id=1,
      bio="Hi, I'm Ivory. I'm fairly new here, after being in a home that sadly turned out not to be a good fit for me. It was devastating for my person, but we knew I deserved a good place of my own, so here I am! I arrived at FieldHaven a couple months ago and have been in foster care with a cool guy. I have a very sweet disposition with some timidness thrown in, so my ideal home would be one without young kids, dogs or other cats. I just might get along with another super mellow kitty, but it would take some time, so in order for me to be the best I can be, I think a home with just me and my adult people would be better.",
      question1='What are your daily activities, schedule, and hobbies?' ,
      question2='Why do you think this is the right time in their lives to adopt a cat?',
      question3='How many other people share the same household with you?',
      )





    db.session.add(Dog1)
    db.session.add(Dog2)
    db.session.add(Cat1)
    db.session.add(Cat2)
    db.session.add(Dog3)
    db.session.add(Cat3)
    db.session.add(Cat4)
    db.session.add(Cat5)
    db.session.add(Dog4)
    db.session.add(Cat6)
    db.session.add(Dog5)
    db.session.add(Dog6)
    db.session.add(Dog7)
    db.session.add(Dog8)
    db.session.add(Cat7)
    db.session.add(Cat8)
    db.session.add(Cat9)
    db.session.add(Dog9)
    db.session.add(Cat10)
    db.session.add(Cat11)
    db.session.add(Cat12)
    db.session.add(Dog10)
    db.session.add(Dog11)


    db.session.commit()


def undo_pet_posts():
    db.session.execute('TRUNCATE pet_posts RESTART IDENTITY CASCADE;')
    db.session.commit()