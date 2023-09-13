import React from 'react';
import {PRODUCTS} from "./data";
import {Product} from "./Product";

export  function Shop() {
  return (
    <div className='shop'>
      <div className='Shop-title'>
        <h1>where style comes from</h1>

     </div>
     <div className='products'>
      {PRODUCTS.map((product)=>(
        <Product data={product} />
      ))}
     </div>
    </div>
  )
}
