import React, { useEffect } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
} from '@material-tailwind/react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalState';
import { idbPromise } from '../utils/helpers';
import { ADD_TO_CART } from '../utils/mutations';
import { REMOVE_FROM_CART } from '../utils/mutations';

const game = ({ game })
// [
//     {
//         id: 1,
//         title: 'Title1',
//         price: '$60.00',
//         quantity: 1,
//         image: 'link to img src1',
//         imageAlt: 'Game description 1',
//     },
//     {
//         id: 2,
//         title: 'Title2',
//         price: '$60.00',
//         quantity: 1,
//         image: 'link to img src 2',
//         imageAlt: 'Game desc 2',
//     },
// ];

const Cart = ({ item }) => {

    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });

    };
    const AddToCart = (e) => {
        const value = e.target.value;
        dispatch({
            type: ADD_TO_CART,
            _id: item._id,
            purchaseQuantity: parseInt(value)
        });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }


    function calculateTotal() {
        let sum = 0;
        Cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    };




    function Cart() {
        //    const Query CartItems
        const [state, dispatch] = useStoreContext();
        const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

        useEffect(() => {
            async function getCart() {
              const cart = await idbPromise('cart', 'get');
              dispatch({ type: ADD_TO_CART, products: [...cart] });
            }
        
            if (!state.cart.length) {
              getCart();
            }
          }, [state.cart.length, dispatch]);


        return (
            <>

                <div class='card'>
                    <Card className="h-100 bg-black bg-opacity-90 text-grey">
                        <CardBody className="text-center">
                            <Typography variant="h5" className="mb-2">
                                Cart
                            </Typography>
                            <CardFooter divider className="flex items-center justify-between py-3"></CardFooter>
                            {/* <img class="mx-auto"
                            src={game.img}
                            className='h-auto w-1/3 mt-40'
                        /> */}
                            <div>
                                <Typography>
                                    {game.title} <br />
                                </Typography>
                                <Typography>
                                    $ {game.price}
                                </Typography>
                                <span
                                    role="img"
                                    aria-label="trash"
                                    onClick={() => removeFromCart(item)}
                                >
                                    🗑️
                                </span>
                            </div>
                        </CardBody>
                        <CardFooter divider className="flex items-center justify-between py-3">
                            <Typography variant="small">Total: ${calculateTotal()}
                            </Typography>
                            <Button variant="small" color="gray" className="flex gap-1">
                                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                                Checkout
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </>
        )
    }
}
 export default Cart;