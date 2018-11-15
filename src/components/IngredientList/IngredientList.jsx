import React, {Component} from 'react';
import Ingredients from '../Ingredients/Ingredients';

class IngredientList extends Component {
    render() {
        var mappedIngredients = this.props.ingredients.map(ingredient => <Ingredients ingredient={ingredient} />)
        // pass in addIngredient
        return (
        <div className='component'>
            IngredientList
            {mappedIngredients}
        </div>
        );
    }
}

export default IngredientList;