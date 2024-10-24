import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-lists">
        <div className="footer-list">
          <h3 className="footer-title">navigate</h3>
          <ul>
            <li>shop</li>
            <li>account</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="footer-list">
          <h3 className="footer-title">help</h3>
          <ul>
            <li>shipping & delivery</li>
            <li>exchange & return</li>
            <li>terms & privacy</li>
            <li>faq</li>
          </ul>
        </div>
        <div className="footer-list">
          <h3 className="footer-title">social</h3>
          <ul>
            <li>instagram</li>
            <li>facebook</li>
          </ul>
        </div>
      </div>
      <div className="footer-mobile">
        <Image src="/facebook.png" alt="facebook" width={100} height={100} />
        <Image src="/instagram.png" alt="instagram" width={100} height={100} />
      </div>
    </div>
  );
};
export default Footer;
