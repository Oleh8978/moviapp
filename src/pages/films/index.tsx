import React from 'react';
import { useDispatch, connect } from 'react-redux';

// components
import Footer from '../../components/footer';
import FilmsWrapper from '../../components/filmsWrapper';

//  actions 
import * as actions from '../../controllers/showScroller/actions';
import { IStore } from '../../controllers/storeModel';

interface IProps {}

const Films: React.FC<IProps>  = () => {

  const dispatch = useDispatch();

  const showScroll = () => {
    const scrolledElem = document.querySelector('.films');

    if (scrolledElem) {
      scrolledElem.scrollTop > 600 ? dispatch(actions.setShowScroll({show: true})) : dispatch(actions.setShowScroll({show: false}))
    }
  }
  
  return (
    <div className="films" onScroll={() => showScroll()}>
      <FilmsWrapper />
      <Footer />
    </div>
  );
}

export default connect(
  (state: IStore) => ({
      showScroll: state.scroll.show
  }),
  {},
)(Films);
