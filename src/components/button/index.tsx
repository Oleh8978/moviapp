import React from 'react';

interface IProps {
    onPress: () => void
    classProps: string;
    text: string
}

const Button: React.FC<IProps>  = (props) => {
  return (
    <div 
        className={`${props.classProps}`} 
        onClick={() => props.onPress()}
    >
        <span className='button-text'>
            {props.text}
        </span>
    </div>
  );
}

export default Button;