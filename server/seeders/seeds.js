const db = require('../config/connection');
const { DJ, Show } = require('../models');
const DJSeeds = require('./DJSeeds.json');
const ShowSeeds = require('./ShowSeeds.json');

db.once('open', async () => {
  try {
    // clear database
    await DJ.deleteMany({});
    await Show.deleteMany({});

    // Bulk create each model
    const djs = await DJ.insertMany(DJSeeds);
    const shows = await Show.insertMany(ShowSeeds);

    for (newShow of shows) {
      // randomly add each show to a DJ
      const tempDJ = djs[Math.floor(Math.random() * djs.length)];
      tempDJ.Shows.push(newShow._id);
      await tempDJ.save();

      // reference DJ on Show model too
      newShow.host = tempDJ._id;
      await newShow.save();
    }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
