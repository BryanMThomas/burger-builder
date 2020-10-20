import React, { Component } from 'react'
import Auxillary from '../../../hoc/Auxillary'
import Burger from '../../Burger/Burger'
import BurgerControls from '../../Burger/BuildControls/BuildControls'
import Modal from '../../../components/UI/Modal/Modal'
import OrderSummary from '../../../components/Burger/OrderSummary/OrderSummary'

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
        totalPrice: 5,
        purchaseable: false,
        purchasing: false
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
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice, purchaseable: true })
    }

    removeIngredientHandler = (type) => {
        //Update Ingredients
        let purchaseable = false;
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
            for (let key in updatedIngredients) {
                if (updatedIngredients[key] !== 0) {
                    purchaseable = true;
                    break;
                }
            }
            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice, purchaseable: purchaseable })
        }
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
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
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    purchaseHandler={this.purchaseHandler}
                />
            </Auxillary>
        );
    }
}

export default BurgerBuilder