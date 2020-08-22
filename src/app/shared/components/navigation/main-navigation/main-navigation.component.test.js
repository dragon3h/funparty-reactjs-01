import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import MainNavigation from './main-navigation.component';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = (props={}) => {
  return shallow(<MainNavigation {...props}/>);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders MainNavigation component without errors', () => {
  const wrapper = setup();
  const mainNavigationComponent = findByTestAttr(wrapper, 'main-navigation-component');
  expect(mainNavigationComponent.length).toBe(1);
});

test('renders MainHeader component inside the MainNavigation component without errors', () => {
  const wrapper = setup();
  const mainHeaderComponent = findByTestAttr(wrapper, 'main-header-component');
  expect(mainHeaderComponent.length).toBe(1);
});