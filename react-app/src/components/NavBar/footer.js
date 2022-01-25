import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import "./footer.css"

const Footer = () => {

  return (
    <div>
      <div className='footer-bar'>
        <div className="infoContainer">
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
  );

}


export default Footer;