import React from 'react';
import Cost from './Cost';
import PropTypes from 'prop-types';

const List = ({ costs }) => (
    <div className="my-costs mb-2">
        <h2>My List</h2>
        {
            costs.map( cost => (
                <Cost 
                    key={ cost.id }
                    cost={ cost } 
                />
            ))
        }
    </div>
);

List.propTypes = {
    costs: PropTypes.array.isRequired
}
 
export default List;