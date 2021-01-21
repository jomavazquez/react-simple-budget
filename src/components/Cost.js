import React from 'react';
import PropTypes from 'prop-types';

const Cost = ({ cost }) => (  
    <li className="gastos">
        <p>
            { cost.name }
            <span className="gasto">{ cost.amount }€</span>
        </p>
    </li>
);

Cost.propTypes = {
    cost: PropTypes.object.isRequired
}
 
export default Cost;