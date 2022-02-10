import React from 'react';

// components 
import MenuItem from '../menuItem';
import SignInSection from '../signInSection';

// svg
import Planet from '../../assets/svg/Planet';
import Menu from '../../assets/svg/Menu';

// constants 
import { menuConstants } from '../../assets/constants/menu';

interface IProps {}

const Header: React.FC<IProps>  = () => {
  return (
    <div className="header">
      <Menu />
      <Planet />
      <div className='header-list'>
        {menuConstants.map(item => {
          return <MenuItem key={item} text={item}/>
        })}
      </div>
      <SignInSection />
    </div>
  );
}

export default Header;