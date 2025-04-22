import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__inner}>
        <div className={s.footer__section}>
          <h2>About us</h2>
          <p>We are a team of music enthusiasts dedicated to providing the best selection of guitars and music equipment.</p>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Meet the Team</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className={s.footer__section}>
          <h2>Help & Support</h2>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Warranty & Repair</a></li>
          </ul>
        </div>
        <div className={s.footer_section}>
          <h2>Stay Connected</h2>
          <ul>
            <li><a href="#" className={s.footer__socialLink}><i className="fa fa-facebook" /></a></li>
            <li><a href="#" className={s.footer__socialLink}><i className="fa fa-instagram" /></a></li>
            <li><a href="#" className={s.footer__socialLink}><i className="fa fa-twitter" /></a></li>
          </ul>
        </div>
        
      </div>
      <div className={s.footer__bottom}>
        <p>&copy; 2025 Guitar Shop. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;