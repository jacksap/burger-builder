import React from 'react';


const BurgerStack = (props) => (
    <div className='component' style={{backgroundColor: props.ingredient.color}}>
    {props.ingredient.name}
    <button onClick={props.removeIngredient}>-</button>
    </div>
);

export default BurgerStack;