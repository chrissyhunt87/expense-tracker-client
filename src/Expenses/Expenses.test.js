import React from 'react';
import ReactDOM from 'react-dom';
import Expenses from './Expenses';

it('Expenses renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Expenses />, div);
    ReactDOM.unmountComponentAtNode(div);
});