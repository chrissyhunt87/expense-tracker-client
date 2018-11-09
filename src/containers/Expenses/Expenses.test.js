import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
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

    it('should show correct header text', () => {
        const wrapper = shallow(<Expenses />);
        expect(wrapper.find('h1').text("Hello, Chrissy!"));
    })
});