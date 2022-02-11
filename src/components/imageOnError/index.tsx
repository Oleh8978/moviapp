import React from 'react';


export interface IProps {
  uri: string
}

const Image: React.FC<IProps> = (props) => {

    const addDefaultSrc = (ev:any) => {
        ev.target.src = '../../assets/images/testflix_logo.png';
    };

    return (
      <>
        <img
        onError={addDefaultSrc}
        className={'imgOnError'}
        src={props.uri}
        alt="img"
        />
      </>
    )
}

export default Image