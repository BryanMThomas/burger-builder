import React from 'react'
import Auxillary from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredient => {
        return <li key={ingredient}>
            <span style={{ textTransform: 'capitalize' }}>{ingredient}</span> : {props.ingredients[ingredient]}
        </li>
    }
    )
    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price: ${props.totalPrice}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxillary>
    )
}

export default orderSummary