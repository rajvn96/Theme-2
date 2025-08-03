import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>© 2025 <strong>StarTech</strong></span>
        <a href="#">Blogs</a>
        <a href="#">FAQs</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="footer-right">
        <FaFacebookF />
        <FaTwitter />
        <FaGoogle />
        <FaInstagram />
        <FaPinterestP />
      </div>
    </footer>
  );
};

export default Footer;
