import React,{useContext} from 'react';
import { ShopContext } from './ShopContext';

export  function Cartitem({dt}) {
    const{cartItems,addtocart,removefromcart }=useContext(ShopContext);
  return (
    <div className='cartItem'>
        <div>
            <img src={dt.thumbnail}/>
            <p>{dt.title}</p>
            <p>₹{dt.price}</p>
            <div className='countHandler'>
                <button onClick={(()=>removefromcart(dt.id))}> - </button>
                <input value={cartItems[dt.id]}/>
                <button onClick={(()=>addtocart(dt.id))}> + </button>
            </div>
        </div>
    </div>
  )
}
