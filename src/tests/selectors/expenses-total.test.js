import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should add up multiple expenses', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(10395);
});

test('Should add up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(295);
});

test('Should return 0 with no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});