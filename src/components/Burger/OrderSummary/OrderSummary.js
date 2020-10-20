import React, { Component } from 'react'
import Auxillary from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingredient => {
            return <li key={ingredient}>
                <span style={{ textTransform: 'capitalize' }}>{ingredient}</span> : {this.props.ingredients[ingredient]}
            </li>
        }
        )
        return (
            <Auxillary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p><strong>Total Price: ${this.props.totalPrice}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxillary>
        )
    }
}

export default OrderSummary