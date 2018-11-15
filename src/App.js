import React, {Component} from 'react';
import './App.css';
import BurgerPane from './components/BurgerPane/BurgerPane'
import IngredientList from './components/IngredientList/IngredientList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
        ], 
        stack: [{name: 'Onion', color: 'lightyellow'}]
    }
    this.addIngredient = this.addIngredient.bind(this)
    this.removeIngredient = this.removeIngredient.bind(this)
    this.clearStack = this.clearStack.bind(this)
  }

  addIngredient() {
    this.setState((state) => {
      var ingIdx = state.ingredients.indexOf(state.ingredient === this.props.ingredient)
      return { stack: state.stack.push(state.ingredients[{ingIdx}]) }
    });
  }

  removeIngredient() {
    this.setState((state) => {
        return {stack: state.stack.pop()}
    });
  }

  clearStack() {
    this.setState((state) => {
        return {stack: state.stack = []}
    });
  }

  render() {
    return (
      <div className="App container flex-h">
        <IngredientList ingredients={this.state.ingredients} addIngredient={this.addIngredient}/>
        <BurgerPane stack={this.state.stack} ingredients={this.state.ingredients} removeIngredient={this.removeIngredient} clearStack={this.clearStack}/>
      </div>
    );
  }
}

export default App;
