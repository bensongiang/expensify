import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, {...expense});
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Edit</h1>
        <ExpenseForm 
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button 
          className="button-link"
          onClick={this.onRemove}
        >Remove</button>
      </div> 
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
