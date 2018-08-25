import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

test('Should render Login correctly', () => {
  const wrapper = shallow(<Login startLogin={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<Login startLogin={onSubmitSpy} />);
  wrapper.find('button').at(0).simulate('click');

  expect(onSubmitSpy).toHaveBeenCalled();
});