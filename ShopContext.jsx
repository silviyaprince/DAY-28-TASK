import React,{createContext,useState} from "react";
import {PRODUCTS} from "./data";

export const ShopContext=createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
};

export function ShopContextProvider(props){
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const addtocart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    };
    const removefromcart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
                totalAmount+=cartItems[item]*itemInfo.price;
            }
            }
            return totalAmount;
        };
    
const contextValue={cartItems,addtocart,removefromcart,getTotalCartAmount};
console.log(cartItems);

    return(
        <ShopContext.Provider value={contextValue}>
{props.children}
        </ShopContext.Provider>
    )
}