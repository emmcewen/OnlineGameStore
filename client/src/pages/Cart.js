import React, { useEffect } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
} from '@material-tailwind/react';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../utils/queries';
// import Auth from '../utils/auth';
// import { useStoreContext } from '../utils/GlobalState';
// import { idbPromise } from '../utils/helpers';
// import { ADD_TO_CART } from '../utils/mutations';
// import { REMOVE_FROM_CART } from '../utils/mutations';

const game = [
  {
    id: 1,
    title: 'Title1',
    href: '#',
    genre: 'genre1',
    price: '$60.00',
    quantity: 1,
    imageSrc: 'link to img src1',
    imageAlt: 'Game description 1',
  },
  {
    id: 2,
    title: 'Title2',
    href: '#',
    genre2: 'genre2',
    price: '$60.00',
    quantity: 1,
    imageSrc: 'link to img src 2',
    imageAlt: 'Game description 2',
  },

]

// const Cart = ({ game }) => {

    // const [, dispatch] = useStoreContext();

    // const removeFromCart = game => {
    //     dispatch({
    //         type: REMOVE_FROM_CART,
    //         _id: game._id
    //     });
    //     idbPromise('cart', 'delete', { ...game });

    // };
    // const AddToCart = (e) => {
    //     const value = e.target.value;
    //     dispatch({
    //         type: ADD_TO_CART,
    //         _id: game._id,
    //         purchaseQuantity: parseInt(value)
    //     });
    //     idbPromise('cart', 'put', { ...game, purchaseQuantity: parseInt(value) });

    // }


    // function calculateTotal() {
    //     let sum = 0;
    //     Cart.forEach((game) => {
    //         sum += game.price * game.purchaseQuantity;
    //     });
    //     return sum.toFixed(2);
    // };




    export default function Cart() {
        //    const Query CartItems
        // const [state, dispatch] = useStoreContext();
        // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

        // useEffect(() => {
        //     async function getCart() {
        //       const cart = await idbPromise('cart', 'get');
        //       dispatch({ type: ADD_TO_CART, products: [...cart] });
        //     }
        
        //     if (!state.cart.length) {
        //       getCart();
        //     }
        //   }, [state.cart.length, dispatch]);


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
                                    // role="img"
                                    // aria-label="trash"
                                    // onClick={() => removeFromCart(game)}
                                >
                                    🗑️
                                </span>
                            </div>
                        </CardBody>
                        <CardFooter divider className="flex items-center justify-between py-3">
                            <Typography variant="small">Total: $0
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
// }
//  export default Cart;