import React, { Component } from 'react'
import Auxillary from '../../../hoc/Auxillary'
import Burger from '../../Burger/Burger'
import BurgerControls from '../../Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: .50,
    bacon: 1,
    cheese: .75,
    meat: 1.50
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5
    }

    addIngredientHandler = (type) => {
        //Update Ingredients
        const oldCount = this.state.ingredients[type];
        let newCount = oldCount + 1;
        let updatedIngredients = {
            ...this.state.ingredients
        }
        //Update Price
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type]
        //set new state
        updatedIngredients[type] = newCount;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
    }

    removeIngredientHandler = (type) => {
        //Update Ingredients
        const oldCount = this.state.ingredients[type];
        if (oldCount !== 0) {
            let newCount = oldCount - 1;
            let updatedIngredients = {
                ...this.state.ingredients
            }
            //Update Price
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENT_PRICES[type]
            //set new state
            updatedIngredients[type] = newCount;
            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        }
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxillary>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Auxillary>
        );
    }
}

export default BurgerBuilder