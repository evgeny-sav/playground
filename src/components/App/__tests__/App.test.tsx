import React from 'react';
import { create } from 'react-test-renderer';
import App from '../App';

test('renders learn react link', () => {
  const component = create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
