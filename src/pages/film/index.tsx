import React from 'react';

// components
import Footer from '../../components/footer';

interface IProps {}

const Film: React.FC<IProps>  = () => {
  return (
    <div className="films-single">
      <Footer />
    </div>
  );
}

export default Film;
