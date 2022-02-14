import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { render } from '@testing-library/react';

import MenuItem from '.';

// History
import history from '../../historyApi';

// store 
import store from '../../stote';

it('renders button correctly', () => {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <MenuItem 
                    text={'Test'}
                    activeItem={'Test'}
                />
            </ConnectedRouter>
        </Provider>
    )
})