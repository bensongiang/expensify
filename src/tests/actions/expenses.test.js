import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup Remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should setup Edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { note: 'New value' }
  });
});

test('Should Add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1000,
    createdAt: 1000,
    note: 'August rent'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should Add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '', 
      note: '', 
      amount: 0, 
      createdAt: 0,
      id: expect.any(String)
    }
  });
});