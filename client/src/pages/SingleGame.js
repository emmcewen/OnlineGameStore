import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import React from 'react';

import AddCartBtn from '../components/AddCartBtn';

export default function SingleGame(gameData) {
  const game = gameData.currentGame;
  return (
    <>
      <img className="mx-auto h-1/2 w-1/2 mt-20"
        src={game.image}
        alt=""
      />
  
        <div className="flex flex-wrap justify-center">
          <div className='card'>
            <Card className="bg-blue bg-opacity-60 text-grey mr-44">
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  About
                </Typography>
                <Typography>
                  {game.title} <br />
                  {game.description}
                </Typography>
              </CardBody>
              <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">${game.price}
                </Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                  <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                  <AddCartBtn />
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
    </>
  )
}