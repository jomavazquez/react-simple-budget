import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({ saveBudget, saveBudgetleft, saveShowQuestion }) => {

    // Defining states
    const [ amount, saveAmount ] = useState(0);
    const [ error, saveError ] = useState(false);

    // Function to read the budget
    const setBudget = e => {
        saveAmount( parseInt(e.target.value, 10) );
    }

    // Submit to define the budget
    const addBudget = e => {
        e.preventDefault();
        
        // Validate
        if( amount < 1 || isNaN(amount) ){
            saveError(true);
            return;
        }        

        // If validation is good
        saveError(false);
        saveBudget(amount);
        saveBudgetleft(amount);
        saveShowQuestion(false);
    }

    return (
        <>
            <h2>Set your budget</h2>
            {
                error 
                ? 
                    <Error message="Wrong budget" /> 
                : null
            }
            <form
                onSubmit={ addBudget }
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Set your personal budget"
                    onChange={ setBudget }
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Set budget"
                />
            </form>
        </>
        
    );
}

Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveBudgetleft: PropTypes.func.isRequired,
    saveShowQuestion: PropTypes.func.isRequired
}

export default Question;