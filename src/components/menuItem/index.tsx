import React from 'react';
import { useDispatch, connect } from 'react-redux';

// actions 
import * as actions from '../../controllers/menuIemReducer/actions';

// interfaces
import { IStore } from '../../controllers/storeModel';

interface IProps {
    text: string;
    activeItem: string
}

const MenuItem: React.FC<IProps>  = (props) => {
    const dispatch = useDispatch();

  return (
    <div 
        className={"header-list-item" + `${props.activeItem === props.text ? ' activeText' : ''}`} 
        onClick={() => dispatch(actions.setMenuItem({item: props.text}))}
    >
        {props.text}
    </div>
  );
}

export default connect(
    (state: IStore) => ({
      activeItem: state.activeMenuItem.item,
    }),
    {},
  )(MenuItem);