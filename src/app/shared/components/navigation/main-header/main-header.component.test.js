import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import MainHeader from './main-header.component';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = (props={}) => {
  return shallow(<MainHeader {...props}/>);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders MainHeader component without errors', () => {
  const wrapper = setup();
  const mainHeaderComponent = findByTestAttr(wrapper, 'main-header-component');
  expect(mainHeaderComponent.length).toBe(1);
});