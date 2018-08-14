import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={200} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={35999} />);
  expect(wrapper).toMatchSnapshot();
});