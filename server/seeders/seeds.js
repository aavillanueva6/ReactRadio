const db = require('../config/connection');
const { DJ, Show } = require('../models');
const WeeklySchedule = require('../models/WeeklySchedule');
const DJSeeds = require('./DJSeeds.json');
const ShowSeeds = require('./ShowSeeds.json');
const BebBisSeeds = require('./showSchedules/BebBisSeeds.json');
const BluNotSeeds = require('./showSchedules/BluNotSeeds.json');
const BopStoSeeds = require('./showSchedules/BopStoSeeds.json');
const CooCatSeeds = require('./showSchedules/CooCatSeeds.json');
const FunFriSeeds = require('./showSchedules/FunFriSeeds.json');
const FusGroSeeds = require('./showSchedules/FusGroSeeds.json');
const JazJouSeeds = require('./showSchedules/JazJouSeeds.json');
const LatLouSeeds = require('./showSchedules/LatLouSeeds.json');
const LatLulSeeds = require('./showSchedules/LatLulSeeds.json');
const MidMooSeeds = require('./showSchedules/MidMooSeeds.json');
const NexNotSeeds = require('./showSchedules/NexNotSeeds.json');
const StaStoSeeds = require('./showSchedules/StaStoSeeds.json');
const SwiSunSeeds = require('./showSchedules/SwiSunSeeds.json');
const SwiTimSeeds = require('./showSchedules/SwiTimSeeds.json');

db.once('open', async () => {
  try {
    // clear database
    await DJ.deleteMany({});
    await Show.deleteMany({});
    await WeeklySchedule.deleteMany({});

    // Bulk create each model
    const djs = await DJ.insertMany(DJSeeds);
    const shows = await Show.insertMany(ShowSeeds);
    const midMooData = await WeeklySchedule.insertMany(MidMooSeeds);
    const bebBisData = await WeeklySchedule.insertMany(BebBisSeeds);
    const swiSunData = await WeeklySchedule.insertMany(SwiSunSeeds);
    const bluNotData = await WeeklySchedule.insertMany(BluNotSeeds);
    const jazJouData = await WeeklySchedule.insertMany(JazJouSeeds);
    const cooCatData = await WeeklySchedule.insertMany(CooCatSeeds);
    const latLouData = await WeeklySchedule.insertMany(LatLouSeeds);
    const funFriData = await WeeklySchedule.insertMany(FunFriSeeds);
    const swiTimData = await WeeklySchedule.insertMany(SwiTimSeeds);
    const latLulData = await WeeklySchedule.insertMany(LatLulSeeds);
    const bopStoData = await WeeklySchedule.insertMany(BopStoSeeds);
    const staStoData = await WeeklySchedule.insertMany(StaStoSeeds);
    const fusGroData = await WeeklySchedule.insertMany(FusGroSeeds);
    const nexNotData = await WeeklySchedule.insertMany(NexNotSeeds);

    for (e of midMooData) {
      let tempShow = shows[0];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of bebBisData) {
      let tempShow = shows[1];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of swiSunData) {
      let tempShow = shows[2];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of bluNotData) {
      let tempShow = shows[3];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jazJouData) {
      let tempShow = shows[4];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of cooCatData) {
      let tempShow = shows[5];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of latLouData) {
      let tempShow = shows[6];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of funFriData) {
      let tempShow = shows[7];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of swiTimData) {
      let tempShow = shows[8];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of latLulData) {
      let tempShow = shows[9];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of bopStoData) {
      let tempShow = shows[10];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of staStoData) {
      let tempShow = shows[11];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of fusGroData) {
      let tempShow = shows[12];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of nexNotData) {
      let tempShow = shows[13];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }

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
