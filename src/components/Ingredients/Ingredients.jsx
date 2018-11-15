import React from 'react';

const Ingredients = (props) => (
    <div className='component'  style={{backgroundColor: props.ingredient.color}}>
        {props.ingredient.name}
        <button onClick={props.addIngredient}>+</button>
    </div>
);

export default Ingredients;