import React, { useContext } from 'react';
import {ShopContext} from "./ShopContext";
import Button from '@mui/material/Button';
import {addtocart} from "./ShopContext";
export  function Product({data}) {
    const {addtocart,cartItems}  =useContext(ShopContext);
    const cartItemAmount=cartItems[data.id];
  return (
    <div className='product'>
    <div className='image'>
        <img src={data.thumbnail}/>
    </div>
    <div className='name'>
       <b> <p>{data.title}</p></b>
       </div>
       <p>₹{data.price}</p>
       <p className='description'>{data.description}</p>
       <Button
              className="addtocartbutton"
              color="warning"
              size="small"
              onClick={(()=>addtocart(data.id))}>
             add to cart{cartItemAmount>0&&<>({cartItemAmount})</>}
            </Button>
       </div>
  )
}
