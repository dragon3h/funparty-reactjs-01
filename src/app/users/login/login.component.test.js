import React from 'react';
import { shallow } from 'enzyme';

import Login from './login.component';
import { findByTestAttr } from "../../../test/testUtils";

const setup = (props={}) => {
  return shallow(<Login {...props} />);
};

test('renders Login component without error', () => {
  const wrapper = setup();
  const loginComponent = findByTestAttr(wrapper, 'component-login');
  expect(loginComponent.length).toBe(1);
});
