import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const text = 'bill';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
  expect(state.text).toBe(text);
});

test('Should set start date filter', () => {
  const date = moment().startOf('month');
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', date });
  expect(state.startDate).toEqual(date);
});

test('Should set end date filter', () => {
  const date = moment().endOf('month');
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', date });
  expect(state.endDate).toEqual(date);
});