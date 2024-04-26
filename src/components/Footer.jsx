import { FaYelp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="socials">
          <span className="facebook">
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaYelp />
          </span>
        </div>
        <div className="main-footer-content">
          <div className="footer-first-section">
            <div className="location-contact-wrapper">
              <div className="location">
                979 SouthEastWest Drive Lexington, KY 40000
              </div>
              <div className="contact-methods">
                <p>earthfood@email.com</p>
                <p>{'(859)909-0909'}</p>
              </div>
            </div>
            <div>
              <Link className="landing-page-h1 footer-logo" to="/">
                Earth Food
              </Link>
            </div>
            <div className="open-hours">
              <div className="mon-thu">
                <span>Monday - Thursday:</span> <br /> 8:00 am - 9:00 pm
                Breakfast: 8:00 am to 11:00 am Main Menu: 11:00 am to 9:00 pm
              </div>
              <div className="fri">
                <span>Friday:</span> <br /> 8:00 am - 10:00 pm Breakfast: 8:00
                am to 11:00 am Main Menu: 11:00 am to 10:00 pm
              </div>
              <div className="sat">
                <span>Saturday:</span> <br /> 8:00 am - 10:00 pm Breakfast: 8:00
                am to 11:30 am Main Menu: 12:00 pm to 10:00 pm
              </div>
              <div className="sun">
                <span>Sunday:</span> <br /> Closed
              </div>
            </div>
          </div>

          <div className="disclaimer">
            <p className="disclaimer-heading">
              <span>Disclaimer:</span>
            </p>
            Venture at your own risk into the diverse culinary landscape of
            Earth Food. Our authentic global dishes may thrill your palate but
            also challenge your digestive fortitude. We cannot foresee or assume
            responsibility for any gastrointestinal quests or conquests that
            follow. Eat wisely, brave soul.
          </div>
        </div>
      </div>
    </>
  );
}
