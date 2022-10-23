import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import '../styles/style.css';
import { QUERY_ALL_GAMES } from '../utils/queries';
import AddCartBtn from '../components/AddCartBtn'
import { useQuery } from '@apollo/client';

export default function Store({ setCurrentPage, setCurrentGame }) {
  const { data, loading } = useQuery(QUERY_ALL_GAMES)
  const game = data
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
        {game.map((game) => {
          return (
            <Card className="w-96 mt-80 mb-20 ml-14 bg-blue bg-opacity-60 text-grey cursor-pointer" id='card1'
              onClick={() => {
                setCurrentPage("SingleGame");
                setCurrentGame(game);
              }}>
              <CardHeader className="relative h-56">
                <img
                  src={game.image}
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  {game.title}
                </Typography>
                <Typography>
                  {game.summary}
                  <br />
                  <br />
                  <br />
                </Typography>
              </CardBody>
              <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">${game.price}</Typography>
                <AddCartBtn />
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}