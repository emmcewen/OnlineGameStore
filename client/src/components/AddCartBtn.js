import React from 'react';
import { ADD_TO_CART } from '../utils/mutations';
import { useMutation } from '@apollo/client'; 

// include more state (indicate more info about cart items with state)
export default function AddCartButton({game}) {
    const [addToCart] = useMutation(ADD_TO_CART);

    // const game = data.?game

    async function handleAddToCart() {
        try {

            const {data, error} = await addToCart({
                variables: {
                    body: { game }
                }
            });

            console.log(data)

            if (error) {
                throw new Error('There was an error when adding to cart');
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='addtocart'>
            <button className='addtocartbtn mr-20 text-grey' 
            onClick={()=>handleAddToCart()}
            >Add to cart</button>
        </div>
    )

}
