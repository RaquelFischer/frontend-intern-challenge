import React from 'react';
import Tw from '../assets/icon-twitter.png';
import Fb from '../assets/icon-facebook.png';

const Footer = () => (
  <footer className="footer">
    <div className="ancor">
      <a
        href="https://www.linx.com.br"
        target="_blank"
        className="char-ancor"
      >
        chr.dc
      </a>
    </div>
    <div className="icons">
      <a 
        className="a-icons"
        href="https://twitter.com/LinxRetail"
        target="_blank"
      >
        <img src={Tw} />
      </a>
      <a 
        className="a-icons"
        href="https://www.facebook.com/chaordic.com.br"
        target="_blank"
      >
        <img src={Fb} />
      </a>
    </div>
  </footer>
);

export default Footer;
