import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={onSubmitSpy} />);
  wrapper.find('button').at(0).simulate('click');

  expect(onSubmitSpy).toHaveBeenCalled();
});