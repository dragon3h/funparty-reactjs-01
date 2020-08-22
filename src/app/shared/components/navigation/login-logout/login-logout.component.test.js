import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import LoginLogout from './login-logout.component';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}) => {
  return shallow(<LoginLogout {...props} />);
};

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders Login/Logout component without errors', () => {
  const wrapper = setup();
  const loginLogoutComponent = findByAttr(wrapper, 'login-logout-component');
  expect(loginLogoutComponent.length).toBe(1);
});