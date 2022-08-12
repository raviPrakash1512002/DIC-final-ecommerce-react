import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart)
    {
        quantity+=product.quantity;
        total+= product.price*product.quantity;
        shipping+= product.shipping;
    }
    const tax = (total*0.1).toFixed(2);
    const grandtotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
                <h2>Order Summary </h2>
                <p>Selected item: {quantity} </p>
                <p>Total Price: Rs. {total}</p>
                <p>Total Shipping: Rs. {shipping}</p>
                <p>Tax: Rs. {tax}</p>
                <h4>Grand Total: Rs. {grandtotal.toFixed(2)}</h4>
                {props.children}
        </div>
    );
};

export default Cart;