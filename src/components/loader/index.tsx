import React from 'react';

interface IProps {}

const Loader: React.FC<IProps>  = () => {
  return (
    <div className="loader-wrapper">
        <div className="spinner"></div>
    </div>
  );
}

export default Loader;