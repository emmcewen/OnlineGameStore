import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'

export default function SingleGame({currentGame: game}) {
  return (
    <>
      Single Game
      <img class="mx-auto"
        src={game.image}
        className='h-1/3 w-1/3 mt-40'
      />
      <div className='card'>
        <Card className="h-auto bg-blue bg-opacity-60 text-grey">
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
              
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}