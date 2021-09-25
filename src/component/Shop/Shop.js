import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
 const [products, setProducts]= useState([]);
 const [cart, setCart]= useState([]);
 const [searchProduct , setSearchProduct]=useState([]);

 useEffect(()=>{
     fetch('./products.JSON')
     .then(res=> res.json())
     .then(data => {
        setProducts(data)
        setSearchProduct(data)
     })
 },[])

const Handler=(product)=> {
   const newCart=[...cart, product];
   setCart(newCart);
}
//search products
const SearchProducts=(event)=>{
  const newSearch=event.target.value;
  const macthProduct= products.filter(product=> product.name.toLowerCase().includes(newSearch.toLowerCase()))
  setSearchProduct(macthProduct)
}

    return (
      <div>
      <div className="input-field">
      <input onChange={SearchProducts} type="text" placeholder="search your products" className="input"/>
      </div>

            <div className="shop">
            <div className="products">
            <h1>Peoducts</h1>
           {
            searchProduct.map(product=>  <Products product={product} handler={Handler}
            key={product.key}></Products>)
           }
            </div>

     
            <div className="shopping-cart">
            <Cart cart={cart}></Cart>
            </div>
        </div>
      </div>
    );
};

export default Shop;