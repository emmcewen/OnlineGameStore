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
      <Card className="w-96 mt-60 mb-20 ml-10  bg-gold text-black" id='card1'>
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
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mb-20 ml-10 bg-gold text-black" id='card2'>
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
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mb-20 ml-10  bg-gold text-black" id='card3'>
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
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mb-20 ml-10 bg-gold text-black" id='card4'>
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
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mb-20 ml-10  bg-gold text-black" id='card5'>
        <CardHeader className="relative h-56">
          <img
            src="/img/GrandTheftCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Grand Theft Auto V
          </Typography>
          <Typography>
          Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$14.99</Typography>
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mb-20 ml-10  bg-gold text-black" id='card6'>
        <CardHeader className="relative h-56">
          <img
            src="/img/SimsCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            The Sims 4
          </Typography>
          <Typography>
          Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that is wholly unique. Explore and customize every detail from Sims to homes and much more.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$19.99</Typography>
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mb-20 ml-10  bg-gold text-black" id='card7'>
        <CardHeader className="relative h-56">
          <img
            src="/img/StardewCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
           Stardew Valley
          </Typography>
          <Typography>
          You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$14.99</Typography>
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mb-20 ml-10  bg-gold text-black" id='card8'>
        <CardHeader className="relative h-56">
          <img
            src="/img/AssassinsCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Assassin's Creed Odyssey
          </Typography>
          <Typography>
          Choose your fate in Assassin's Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$11.99</Typography>
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mb-20 ml-10  bg-gold text-black" id='card9'>
        <CardHeader className="relative h-56">
          <img
            src="/img/CODcard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
          Call of Duty: Modern Warfare II
          </Typography>
          <Typography>
          Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$19.99</Typography>
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

      <Card className="w-96 mb-20 ml-10  bg-gold text-black" id='card10'>
        <CardHeader className="relative h-56">
          <img
            src="/img/DemonCard.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Demon Slayer
          </Typography>
          <Typography>
          Become the Blade that Destroys Demons!
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$35.99</Typography>
          <Button className='button ml-10'><FaRegThumbsUp></FaRegThumbsUp></Button> 
          <Button className='button2 mr-5'><FaRegThumbsDown></FaRegThumbsDown></Button>
        </CardFooter>
      </Card>

    </>
  )
}