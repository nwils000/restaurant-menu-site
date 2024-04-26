import { FaYelp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="socials">
          <FaFacebookF />
          <FaInstagram />
          <FaYelp />
        </div>
        <div className="main-footer-content">
          <div className="location">
            979 SouthEastWest Drive Lexington, KY 40000
          </div>
          <div className="open-hours">
            <div className="mon-thu">
              Monday - Thursday: 8:00 am - 9:00 pm Breakfast: 8:00 am to 11:00
              am Main Menu: 11:00 am to 9:00 pm
            </div>
            <div className="fri">
              Friday: 8:00 am - 10:00 pm Breakfast: 8:00 am to 11:00 am Main
              Menu: 11:00 am to 10:00 pm
            </div>
            <div className="sat">
              Saturday: 8:00 am - 10:00 pm Breakfast: 8:00 am to 11:30 am Main
              Menu: 12:00 pm to 10:00 pm
            </div>
            <div className="sun">Sunday: Closed</div>
          </div>
          <div className="contact-methods">
            <p>{'(859)909-0909'}</p>
            <p>earthfood@email.com</p>
          </div>
          <div className="disclaimer">
            <p className="disclaimer-heading">Disclaimer:</p>Venture at your own
            risk into the diverse culinary landscape of Earth Food. Our
            authentic global dishes may thrill your palate but also challenge
            your digestive fortitude. We cannot foresee or assume responsibility
            for any gastrointestinal quests or conquests that follow. Eat
            wisely, brave soul.
          </div>
        </div>
      </div>
    </>
  );
}
