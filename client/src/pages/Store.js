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
      <Card className="w-96" id='cards1'>
        <CardHeader color="blue" className="relative h-56">
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
      <Card className="w-96" id='cards1'>
        <CardHeader color="blue" className="relative h-56">
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
      <Card className="w-96" id='cards1'>
        <CardHeader color="blue" className="relative h-56">
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
      <Card className="w-96" id='cards1'>
        <CardHeader color="blue" className="relative h-56">
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
      <Card className="w-96" id='cards1'>
        <CardHeader color="blue" className="relative h-56">
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
    </>
  )
}