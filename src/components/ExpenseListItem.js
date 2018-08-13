import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div className="expense-item">
    <p><Link to={{ pathname: `/edit/${id}` }}>{description}</Link></p>
    <p>{amount}</p>
    <p>{createdAt}</p>
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