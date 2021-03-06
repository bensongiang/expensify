import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';

  return (
    <div className="expense-summary">
      <p>You have {expenseCount} {expenseWord} totaling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: expensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);