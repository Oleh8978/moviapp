import React from 'react';
import { useDispatch, connect } from 'react-redux';

// components
import Button from '../button';

// svgs
import ToTop from '../../assets/svg/toTop';

// interfaces
import { IStore } from '../../controllers/storeModel';

interface IProps {
    showScroll: boolean
}

const LoadMore: React.FC<IProps>  = (props) => {
    const dispatch = useDispatch();

  return (
    <div 
        className={"loadMore"}
    >
        <Button 
            classProps={'button_loadMore'}
            textProps={'text-load-more'}
            text='Load more'
            onPress={() => {}}
        />
        {props.showScroll && <ToTop />}
    </div>
  );
}

export default connect(
    (state: IStore) => ({
        showScroll: state.scroll.show
    }),
    {},
  )(LoadMore);