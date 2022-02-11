import React from 'react';

interface IProps {}

const Footer: React.FC<IProps>  = () => {
  return (
    <div className="footer">
      <span className="footer-text">© 2021 - All Rights Reserved</span>
    </div>
  );
}

export default Footer;