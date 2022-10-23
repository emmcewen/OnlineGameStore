import React from 'react';
import { ADD_TO_CART } from '../utils/mutations';


export default function AddCartButton({game}) {
    

    function handleAddToCart() {
        
    }
    return (
        <div className='addtocart'>
            <button className='addtocartbtn mr-20 text-grey' 
            onClick={()=>handleAddToCart()}
            >Add to cart</button>
        </div>
    )

}
