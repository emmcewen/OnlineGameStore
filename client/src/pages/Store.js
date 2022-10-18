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
import {FaRegThumbsDown} from 'react-icons/fa'
import '../styles/style.css'

export default function Store() {
  return (
    <>
      <Card className="w-96 mt-60 bg-gold text-black" id='card1'>
        <CardHeader className="relative h-56">
          <img
            src="/img/MinecraftCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Minecraft Dungeons
          </Typography>
          <Typography>
            Fight your way through an exciting action-adventure game, inspired by classic dungeon crawlers and set in the Minecraft universe!
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$19.99</Typography>
          <Button><FaRegThumbsUp></FaRegThumbsUp></Button>
          <Button><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mt-20 bg-gold text-black" id='card2'>
        <CardHeader className="relative h-56">
          <img
            src="/img/ApexCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Apex Legends
          </Typography>
          <Typography>
       Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.

          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$Free</Typography>
          <Button><FaRegThumbsUp></FaRegThumbsUp></Button>
          <Button><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mt-20 bg-gold text-black" id='card3'>
        <CardHeader className="relative h-56">
          <img
            src="/img/LostArkCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Lost Ark
          </Typography>
          <Typography>
          Embark on an odyssey for the Lost Ark in a vast, vibrant world: explore new lands, seek out lost treasures, and test yourself in thrilling action combat in this action-packed free-to-play RPG.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$Free</Typography>
          <Button><FaRegThumbsUp></FaRegThumbsUp></Button>
          <Button><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mt-20 bg-gold text-black" id='card4'>
        <CardHeader className="relative h-56">
          <img
            src="/img/BlackDesertCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Black Desert
          </Typography>
          <Typography>
          Black Desert Online is an open-world, action MMORPG. Experience intense, action-packed combat, battle massive world bosses, fight alongside friends to siege and conquer castles, and train in professions such as fishing, trading, crafting, cooking, and more!
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$9.99</Typography>
          <Button><FaRegThumbsUp></FaRegThumbsUp></Button>
          <Button><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mt-20 bg-gold text-black" id='card5'>
        <CardHeader className="relative h-56">
          <img
            src="/img/BlackDesertCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Black Desert
          </Typography>
          <Typography>
          Black Desert Online is an open-world, action MMORPG. Experience intense, action-packed combat, battle massive world bosses, fight alongside friends to siege and conquer castles, and train in professions such as fishing, trading, crafting, cooking, and more!
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$9.99</Typography>
          <Button><FaRegThumbsUp></FaRegThumbsUp></Button>
          <Button><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>


    </>
  )
}