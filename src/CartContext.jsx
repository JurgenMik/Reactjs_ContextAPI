import React from 'react';
import { createContext , useState} from 'react';
// children - react props, represents all components wrapped around the context provider
// context can be modularised for different data sets

const CartContext = React.createContext();

export function CartProvider({children}) {
    const [items, setItems] = useState([]);

    console.log(items);

    const addToCart = (name, price) => {
        setItems((prevState) => [...prevState , {name, price}])
    }
    // passing different data&functions that can be accessed by othere components via CartContext
    return (
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContext;