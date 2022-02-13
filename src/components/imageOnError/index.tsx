import React from 'react';


export interface IProps {
  customClass?: string
  uri: string
}

const Image: React.FC<IProps> = (props) => {

    const addDefaultSrc = (ev:any) => {
        ev.target.src = require('../../assets/images/error.png');
    };

    return (
      <>
        <img
          onError={addDefaultSrc}
          className={props.customClass ? props.customClass :'imgOnError'}
          src={props.uri}
          alt="img"
        />
      </>
    )
}

export default Image