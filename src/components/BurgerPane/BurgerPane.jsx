import React from 'react';
import BurgerStack from '../BurgerStack/BurgerStack';
import ClearBurger from '../ClearBurger/ClearBurger';

class BurgerPane extends React.Component {
    render() {
        var mappedStack = this.props.stack.map(ingredient => <BurgerStack ingredient={ingredient} />)
        // pass in removeIngredient
        console.log(mappedStack)
        return (
            <div className='component'>
                BurgerPane
                {mappedStack}
                <ClearBurger clearStack={this.props.clearStack}/>
            </div>
        );
    }
}

export default BurgerPane;