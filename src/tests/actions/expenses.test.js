import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expenseData).then(() => done());
});

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Cheese',
    amount: 3000,
    note: 'Smells like ass',
    createdAt: 999921
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
  });
});

test('Should add expense defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: '', 
    note: '', 
    amount: 0, 
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
  });
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should start set expenses', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('Should remove expense from firebase', (done) => {
  const store = createMockStore({});
  const removeExpense = { id: expenses[0].id };

  store.dispatch(startRemoveExpense(removeExpense)).then(() => {
    return database.ref(`expenses/${expenses[0].id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(null);
      done();
  });
});

test('Should edit expense in firebase', (done) => {
  const store = createMockStore({});
  const updates = {
    description: 'Mocha pie',
    amount: '777'
  };

  store.dispatch(startEditExpense(expenses[0].id, updates)).then(() => {
    const actions = store.getActions();
    const id = expenses[0].id
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual({
        ...updates,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
      });
      done();
  });
});