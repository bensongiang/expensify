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
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));