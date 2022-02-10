import React from 'react';
import { Route, Switch } from 'react-router-dom';

// routing 
import Routing from './routing';

interface IProps {}

const App: React.FC<IProps>  = () => {
  return (
    <div className="main">
      <Switch>
          <Route path="*" component={Routing} />
      </Switch>
    </div>
  );
}

export default App;
