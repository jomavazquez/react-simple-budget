import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({ saveCost, saveCreatecost }) => {

    // Define states
    const [ name, saveName ] = useState('');
    const [ amount, saveAmount ] = useState(0);
    const [ error, saveError ] = useState(false);

    // Function when user add a cost
    const addNewCost = e => {
        e.preventDefault();
        
        // Validate
        if( amount < 1 || isNaN(amount) || name.trim() === '' ){
            saveError(true);
            return;
        }

        // Erase the previous message
        saveError(false);

        // Build the cost
        const cost = {
            name,
            amount,
            id: shortid.generate()
        }

        // Pass cost to main component
        saveCost(cost);
        saveCreatecost(true);

        // Reset form
        saveName('');
        saveAmount(0);
    }

    return (
        <form
            onSubmit={ addNewCost }
        >
            <h2>Add any cost</h2>
            {
                error ? <Error message="All fields are required o wrong budget" /> : null
            }
            <div className="mb-2">
                <label>Concept</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Examples: transport, food, cinema ..."
                    value={ name }
                    onChange={ e => saveName(e.target.value) }
                />
            </div>
            <div className="mb-2">
                <label>Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Examples: 25, 100, ..."
                    value={ amount }
                    onChange={ e => saveAmount( parseInt(e.target.value, 10)) }
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add cost"
            />
        </form>
    );
}

Form.propTypes = {
    saveCost: PropTypes.func.isRequired,
    saveCreatecost: PropTypes.func.isRequired
}
 
export default Form;