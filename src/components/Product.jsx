import { useState } from 'react';
import Card from './Card';

function Products() {
    const products = [
        { name: "vest", price: 50},
        { name: "jacket", price: 45},
        { name: "sweater", price: 30},
        { name: "tshirt", price: 70},
        { name: "jumper", price: 25},
    ];
    return(
       <div className="product-list">
           {products.map((products, tag) => (
               <Card name={products.name} price={products.price} key={tag}/>
               ))}
       </div>
    );
}

export default Products;