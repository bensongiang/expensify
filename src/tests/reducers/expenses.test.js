import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { setExpenses, startSetExpenses } from '../../actions/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('Should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '9'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add expense to expenses array', () => {
  const newExpense = {
    id: '4',
    description: 'Poke',
    note: '',
    amount: 550,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense])
});

test('Should edit an expense by id', () => {
  const description = 'Mango';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(description);
});

test('Should not edit an expense if id not found', () => {
  const description = 'Mango';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '99',
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
  const setExpensesData = [expenses[1]];
  const action = {
    type: 'SET_EXPENSES',
    expenses: setExpensesData
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(setExpensesData);
});