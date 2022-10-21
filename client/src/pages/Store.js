import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import {FaRegThumbsUp} from 'react-icons/fa';
import {FaRegThumbsDown} from 'react-icons/fa';
import '../styles/style.css';

export default function Store({setCurrentPage, setCurrentGame}) {
  //TODO: refactor to generate cards from array of data and seperate card component
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'> 
      <Card className="w-96 mt-80 mb-20 ml-14 bg-blue bg-opacity-60 text-grey cursor-pointer" id='card1' 
        onClick={ () => {
          setCurrentPage("SingleGame"); 
          setCurrentGame("gameId");
        }
        }
      >
        <CardHeader className="relative h-56">
          <img
            src="/img/MinecraftCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {/* {game.title} */}
          </Typography>
          <Typography>
            Fight your way through an exciting action-adventure game, inspired by classic dungeon crawlers and set in the Minecraft universe!
            <br />
            <br />
            <br />
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$19.99</Typography>
          <Button className='button ml-14 bg-black'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5 bg-black'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>
      </div>
    </>
  )
}