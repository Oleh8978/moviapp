import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { render } from '@testing-library/react';

import CrewComponent from '.';

// History
import history from '../../historyApi';

// store 
import store from '../../stote';

const staticData = {
                id:634649,
                cast:[
                        {
                            adult:false,
                            gender:2,
                            id:1136406,
                            known_for_department:"Directing",
                            name:"Tom Holland",
                            original_name:"Tom Holland",
                            popularity:135.154,
                            profile_path:"/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
                            cast_id:1,
                            character:"Peter Parker / Spider-Man",
                            credit_id:"5d8e28d38289a0000fcc32f9",
                            order:0
                        },
                    ]
                }

it('renders button correctly', () => {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <CrewComponent credits={staticData}/>
            </ConnectedRouter>
        </Provider>
    )
})