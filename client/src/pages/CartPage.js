import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../utils/queries';
// import Auth from '../utils/auth';
// import { useStoreContext } from '../utils/GlobalState';

const game = [
  {
    id: 1,
    title: "Title1",
    price: "$60.00",
    quantity: 1,
    image: "link to img src1",
    imageAlt: "Game description 1",
  },
  {
    id: 2,
    title: "Title2",
    price: "$60.00",
    quantity: 1,
    image: "link to img src 2",
    imageAlt: "Game desc 2",
  },
];

export default function CartPage() {
  //    const Query CartItems
  // const [state, dispatch] = useStoreContext();
  // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  return (
    <>
      <div class="card">
        <Card className="h-100 bg-black bg-opacity-90 text-grey">
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              Cart
            </Typography>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            ></CardFooter>
            {/* <img class="mx-auto"
                            src={game.img}
                            className='h-auto w-1/3 mt-40'
                        /> */}
            <Typography>
              {game.title} <br />
            </Typography>
            <Typography>$ {game.price}</Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">Total: $0</Typography>
            <Button variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
