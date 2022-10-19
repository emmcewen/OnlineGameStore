// const { Game } = require ();

const gameseeds =
    [
        {
            title: "Demon Slayer",
            price: 35.99,
            gameDescription: "Become the Blade that Destroys Demons!",
        },

        {
            title: "Fallout 3",
            price: 4.99,
            gameDescription: "Prepare for the Future™ With Fallout 3: Game of the Year Edition, experience the most acclaimed game of 2008 like never before. Create a character of your choosing and descend into an awe-inspiring, post-apocalyptic world where every minute is a fight for survival.",
        },

        {
            title: "Destiny 2",
            price: "Free",
            gameDescription: "Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.",
        },

        {
            title: "Tales of Arise",
            price: 23.99,
            gameDescription: "300 years of tyranny. A mysterious mask. Lost pain and memories. Wield the Blazing Sword and join a mysterious, untouchable girl to fight your oppressors. Experience a tale of liberation, featuring characters with next-gen graphical expressiveness!",
        },

        {
            title: "Beat Saber",
            price: 29.99,
            gameDescription: "Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music as they fly towards you, surrounded by a futuristic world.",
            
        },

        {
            title: "EA Sports FIFA 23",
            price: 69.99,
            gameDescription: "FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, men’s and women’s FIFA World Cup™ coming during the season, women’s club teams, cross-play features*, and more.",
        },

        {
            title: "Madden NFL 23",
            price: 38.99,
            gameDescription: "Play your way into the history books. Control your impact with every decision in all-new ways. Call the shots in Franchise with free agency and trade logic updates, leave a legacy in Face of the Franchise: The League, and assemble the most powerful roster in all of Madden Ultimate Team™.",
        },

        {
            title: "Final Fantasy VII Remake Intergrade",
            price: 69.99,
            gameDescription: "Cloud Strife, an ex-SOLDIER operative, descends on the mako-powered city of Midgar. The world of the timeless classic FINAL FANTASY VII is reborn, using cutting-edge graphics technology, a new battle system and an additional adventure featuring Yuffie Kisaragi.",
        },

        {
            title: "Counter-Strike: Global Offensive",
            price: "Free",
            gameDescription: "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
        },

        {
            title: "Dead by Daylight ",
            price: 19.99,
            gameDescription: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
        },

        {
            title: "Elden Ring",
            price: 59.99,
            gameDescription: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        },
    ]

    const seedGame = () => Game.bulkCreate(gameseeds, {
        individualHooks: true,
        returning: true,
    });

    module.exports = seedGame;