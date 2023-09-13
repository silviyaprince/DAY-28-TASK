import React, { useContext } from 'react'
import { PRODUCTS } from './data'
import {Cartitem} from "./Cartitem";
import { ShopContext } from './ShopContext';
import Button from "@mui/material/Button";

export  function Cart() {
  const{cartItems,getTotalCartAmount}=useContext(ShopContext);
  const totalAmount=getTotalCartAmount();
  return (
    <div className='cart'>
      <div ><h1>YOUR CART ITEMS</h1></div>
      <div className='cart-item'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <Cartitem  dt={product}/>;
          }
        })}
      </div>
      <div className='checkout'>
        <p>SHIPPING:          FREE</p>
        <p>SUB TOTAL:         ₹{totalAmount}</p>
        <Button>CONTINUE SHOPPING</Button>
        <Button>CHECKOUT</Button>
      </div>
    </div>
  )
}
