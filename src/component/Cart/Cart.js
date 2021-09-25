import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const {cart}= props;
 let price=0;
 for (const prices of cart) {
    price=price+prices.price;
 }
 
 const shipping= price>0?15:0;
 const charge=price*0.1;
 const total = shipping+ charge+ price;
  
    return (
        <div>
            <h2>Order Summary</h2>
            <h2> Ordered products: {cart.length}</h2>
            <h4>Price: ${price.toFixed(2)}</h4>
            <h4>Charge: ${charge.toFixed(2)}</h4>
            <h4>Shipping: ${shipping.toFixed(2)}</h4>
            <h4>GrandTotal: ${total.toFixed(2)}</h4>

        </div>
    );
};

export default Cart;