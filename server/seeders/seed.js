const db = require('../config/connection');
const { Game } = require('../models');
const gameSeeds = require('./gameDescriptionSeeds.json');

db.once('open', async () => {
  await Game.deleteMany({});
  await Game.create(gameSeeds);

  console.log('all done!');
  process.exit(0);
});