import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='container footer__container footer'>
        <article>
          <Link to='/' className='logo'>
            <img src={Logo} alt='Footer Logo' />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            laudantium ipsam reiciendis ex placeat.
          </p>
          <div className='footer__socials'>
            <a href='https://linkedin.com/' target='blank' rel='none'>
              <FaLinkedin />
            </a>
            <a href='https://facebook.com/' target='blank' rel='none'>
              <FaFacebook />
            </a>
            <a href='https://twitter.com/' target='b lank' rel='none'>
              <FaInstagram />
            </a>
            <a href='https://instagram.com/' target='blank' rel='none'>
              <FaTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/plans'>Plans</Link>
          <Link to='/trailers'>Trailers</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to='/s'>Blog</Link>
          <Link to='/s'>Case Studies</Link>
          <Link to='/s'>Events</Link>
          <Link to='/s'>Communities</Link>
          <Link to='/s'>FAQ</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/s'>Support</Link>
        </article>
      </div>
      <div className='footer__copyright'>
        <small>2023 TomE Tech &copy; All rights Reserved for me only</small>
      </div>
    </footer>
  );
};

export default Footer;
