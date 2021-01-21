import React from 'react';
import { checkBudget } from '../helpers/checkBudget';
import PropTypes from 'prop-types';

const ControlBudget = ({ budget, budgetleft }) => {
    return (
        <>
            <div className="alert alert-primary">
                Budget: { budget }€
            </div>
            <div className={ checkBudget(budget, budgetleft) }>
                Left: { budgetleft }€
            </div>
        </>
    );
}

ControlBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    budgetleft: PropTypes.number.isRequired
}
 
export default ControlBudget;