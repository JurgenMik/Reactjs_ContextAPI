import React, {useState} from 'react';
import { IoShirtOutline } from 'react-icons/io5';
import { AiFillShopping } from 'react-icons/ai';
import {useContext} from 'react';
import CartContext from '../CartContext';

function Card({ name, price }) {
    const {addToCart} = useContext(CartContext)
    return(
        <div className="card">
            <div className="product-box">
                <IoShirtOutline/>
            </div>
            <div className="purchase">
                <h3>{name}</h3>
                <AiFillShopping onClick={()=> addToCart(name, price)}/>
            </div>
            <h4> ${price}</h4>
        </div>
    );
}

export default Card;
