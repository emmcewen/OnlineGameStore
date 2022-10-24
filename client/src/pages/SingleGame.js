import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'
export default function SingleGame({ currentGame: game }) {
  return (
    <>
      Single Game
      <div class="flex items-center justify-center">
        <img class="mx-auto"
          src={game.image}
          alt = ""
          className='h-1/2 w-1/2 mt-40'
        />
      </div>
      <div class="flex items-center justify-center">
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
              <Typography variant="small" color="gray" className="flex gap">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}