import React from 'react';

class Ingredients extends React.Component {
    constructor(props) {
        super(props);
        this.addIngredient = this.addIngredient.bind(this);
    }  

    addIngredient(e) {
        this.props.addIngredient(this.props.ingredient);
    }

    render() {
        return (
            <div className='component' style={{backgroundColor: this.props.ingredient.color}}>
                <p>{this.props.ingredient.name}</p>
                <button onClick={this.addIngredient}>+</button>
            </div>
        )
    }
} 


export default Ingredients;