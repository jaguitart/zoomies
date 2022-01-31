import React from "react";
import NavBar from "../NavBar/NavBar";
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import './style.css'


const About = ({ posts, applications, users }) => {

  const textuser1 = "Our mission is match lovable kittens and puppies with caring owners to create a lifelong bond unlike any other. Browse our pet profiles to find the perfect zoomie for your lifestyle."
  const textuser2 = "When you are ready, apply for your favorite pet using the apply now button that you will see in every post!"
  const textuser3 = " We believe you'll have a wonderful experience in selecting your new family member whose quirky curiosity will put a smile on your face time and again."

  const textorg1 = 'If you are a rescue or shelter looking to find responsible potential owners, Zoomies is for you. Post your available cats and dogs for adoption and let us bring loving parents to you.'
  const textorg2 = 'We will pounce on the time consuming and expensive task of finding great parents for your special rescue pets.'
  const textorg3 = ' Rest assured, you will have more time to care for your special pets instead of spending it fretting over how to find quality loving parents. To get started, create an Organization account and start posting!'

  return (
    <div>
      <NavBar />
      <div className="home-alldiv">
        <div className="home-user-org-div">
          <div className="home-user-div">
            <h3>Information for adopting families</h3>
            <p>{textuser1}</p>
            <p>{textuser2}</p>
            <p>{textuser3}</p>
          </div>

          <div className="home-org-div">
            <h3>Information for Organizations</h3>
            <p>{textorg1}</p>
            <p>{textorg2}</p>
            <p>{textorg3}</p>
          </div>
        </div>
        <div className="home-web-info-position">
          <div className="home-web-info">
            <div className="home-onecolorband" />
            <div className="home-circles" id="circle1">
              <span className="home-text-span">{posts.length}</span>
              <img id="adoptablepets" alt='adoptablepets' src="https://i.imgur.com/SH3C7Kd.png" />
            </div>
            <div className="home-circles" id="circle2">
              <span className="home-text-span">{applications.filter(application => application.status).length}</span>
              <img id="homesfound" alt='homesfound' src="https://i.imgur.com/r8Hpbrv.png" />
            </div>
            <div className="home-circles" id="circle3">
              <span className="home-text-span">{users.filter(user => user.account_type.id === 2).length}</span>
              <img id="partners" alt='partners' src="https://i.imgur.com/D0H7ES6.png" />
            </div>
          </div>
        </div>
        <div className="home-footer-img">
          <img className="home-bottomlogo" alt='bottomlogo' src="https://i.imgur.com/FzFFmrv.png" />
        </div>
        <div className='footer-div-home'>
          <div id="footericon">
            <a href="https://github.com/jaguitart">
              <FaGithubSquare className="footerIcon" />
            </a>
            <a href="https://www.linkedin.com/in/joaquin-guitart-a950ab63/">
              <FaLinkedin className="footerIcon" />
            </a>
            <p id='madeby'>made by: <span id='name'>Joaquin Guitart</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About