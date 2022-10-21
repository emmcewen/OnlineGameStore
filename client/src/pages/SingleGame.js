import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function SingleGame() {
  return (
    <>
      <img class="mx-auto"
        src='/img/minecraft.jpg'
        className='h-1/3 w-1/3 mt-40'
      />
      <div class='card'>
        <Card className="h-auto bg-blue bg-opacity-60 text-grey">
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              About
            </Typography>
            <Typography>
              Minecraft Dungeons: <br />
              Fight your way through an exciting action-adventure game, inspired by classic dungeon crawlers and set in the Minecraft universe! Brave the dungeons alone, or team up with friends! Up to four players can battle together through action-packed, treasure-stuffed, wildly varied levels – all in an epic quest to save the villagers and take down the evil Arch-Illager!
            </Typography>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <Typography variant="small">$19.99
              <br />
              <br />
              ESRB: Everyone 10+
            </Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              <div className='addtocart'>
                <button className='addtocartbtn mr-20 text-grey'>Add to cart<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg></button>
              </div>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}