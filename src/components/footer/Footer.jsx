import React from 'react';
import './Footer.css';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        My best recipe <span>{year}</span> &copy;
      </p>
    </div>
  );
};

export default Footer;
