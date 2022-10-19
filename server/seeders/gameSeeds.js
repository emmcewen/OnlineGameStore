
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