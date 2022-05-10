import React from 'react';
import CartContext from '../CartContext';
import { useContext } from 'react';

function Checkout() {

    const { items } = useContext(CartContext)

    return (
        <div>
            <div>
                <h2>Checkout</h2>
            </div>
            <div className="shopping-bag">
                {items.map((item) => (
                   <div>
                       <h1>{item.price}</h1>
                       <h1>{item.name}</h1>
                   </div>
                ))}
            </div>
        </div>
    );
}

export default Checkout;