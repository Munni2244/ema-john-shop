import React from 'react';
import './Products.css'

const Products = (props) => {
    // console.log(props.product);
    const {name, price, img, seller, stock}=props.product;

    return (
        <div className="product-container">
            <div>
                <img src={img} alt="" />
            </div>
           <div className="product-details">
           <h2 style={{color:'peru'}}>{name}</h2>
           <h5>By {seller}</h5>
           <p>Price: ${price}</p>
           <p> Only {stock} products are left, order soon</p>
           <button onClick={()=>props.handler(props.product)} className="button"> Add to cart</button>
           </div>
        </div>
    );
};

export default Products;