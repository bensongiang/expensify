import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 150, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Coffee', amount: 80, createdAt: 1800 }));
const expenseFour = store.dispatch(addExpense({ description: 'Video games', amount: 50, createdAt: 3000 }));
const expenseFive = store.dispatch(addExpense({ description: 'Restaurants and dining', amount: 1500, createdAt: 150 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));