import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Expenses from './Expenses';

describe('Expenses component', () => {
    it('Component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Expenses />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Expenses debug />);
        expect(component).toMatchSnapshot();
    })
});