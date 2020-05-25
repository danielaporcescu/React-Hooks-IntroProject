import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  // inputState is in the end an array with exactly two elements
  // first element is a snapshot of the current state
  // second element is a function tha allows to update the state
  const inputState = useState({
    title: '',
    amount: ''
  });

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            {/* inputState[0].title defines the first elements of the inputState array, and hence
            it is an object, .title shows the proprety of the object */}
            {/* event - is current event
            target - is the actual input field
            value - is the value user entered */}
            <input
              type="text"
              id="title"
              value={inputState[0].title}
              onChange={event => inputState[1]({ title: event.target.value })} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState[0].amount}
              onChange={event => inputState[1]({ amount: event.target.value })} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
