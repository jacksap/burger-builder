import React from 'react';

const ClearBurger = (props) => (
    <div className='component'>
        <button onClick={props.clearStack}>ClearBurger</button>
    </div>
);

export default ClearBurger;