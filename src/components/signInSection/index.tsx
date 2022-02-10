import React from 'react';

// components
import Search from '../../assets/svg/Search';
import Button from '../button';

interface IProps {}

const SignInSection: React.FC<IProps>  = () => {
  return (
    <div className="signIn">
        <Search />
        <div className='buttons-holder'>
          <Button 
              classProps={'button_join'}
              text={'Join'} 
              onPress={() => {console.log('join')}}
          />
          <Button 
              classProps={'button_login'}
              text={'Login'} 
              onPress={() => {console.log('login')}}
          />
        </div>
    </div>
  );
}

export default SignInSection;