import React from 'react'
import ReactDOM from 'react-dom';
import Button from '.';

import { render } from '@testing-library/react';

it('renders button correctly', () => {
    render(<Button onPress={() => {}} classProps={''} text={'Button'}/>)
})