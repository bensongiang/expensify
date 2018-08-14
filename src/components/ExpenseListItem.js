import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div className="expense-item">
    <p><Link to={{ pathname: `/edit/${id}` }}>{description}</Link></p>
    <p>{numeral(amount / 100).format('$0,0.00')}</p>
    <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
    <button 
      className="button-link"
      onClick={() =>
        {
          dispatch(removeExpense({ id }));
        }}
    >Remove</button>
  </div>
);

export default connect()(ExpenseListItem);