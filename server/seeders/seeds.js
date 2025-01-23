const db = require('../config/connection');
const { DJ, Show, WeeklySchedule, BoardMember } = require('../models');
const DJSeeds = require('./DJSeeds.json');
const ShowSeeds = require('./ShowSeeds.json');
const BoardMemberSeeds = require('./BoardMembers.json');

//schedule data import
const afroCubaLati = require('./showSchedules/afroCubaLati.json');
const amerSong = require('./showSchedules/amerSong.json');
const berkJazz = require('./showSchedules/berkJazz.json');
const bigBandBlowOut = require('./showSchedules/bigBandBlowOut.json');
const collChoi = require('./showSchedules/collChoi.json');
const happBirtDearJazzArti = require('./showSchedules/happBirtDearJazzArti.json');
const jackShell = require('./showSchedules/jackShell.json');
const jazzALaMode = require('./showSchedules/jazzALaMode.json');
const jazzAndMore = require('./showSchedules/jazzAndMore.json');
const jazzFocu = require('./showSchedules/jazzFocu.json');
const jazzForEver = require('./showSchedules/jazzForEver.json');
const jazzForKids = require('./showSchedules/jazzForKids.json');
const jazzHaven = require('./showSchedules/jazzHaven.json');
const jazzScene = require('./showSchedules/jazzScene.json');
const jazzWithDaviBass = require('./showSchedules/jazzWithDaviBass.json');
const lastCall = require('./showSchedules/lastCall.json');
const mornGlor = require('./showSchedules/mornGlor.json');
const mornWithLindKay = require('./showSchedules/mornWithLindKay.json');
const mornWithMatt = require('./showSchedules/mornWithMatt.json');
const mornWithMike = require('./showSchedules/mornWithMike.json');
const mornWithTish = require('./showSchedules/mornWithTish.json');
const newVint = require('./showSchedules/newVint.json');
const nighLigh = require('./showSchedules/nighLigh.json');
const noct = require('./showSchedules/noct.json');
const prebOnJazz = require('./showSchedules/prebOnJazz.json');
const prog = require('./showSchedules/prog.json');
const reflOnJazz = require('./showSchedules/reflOnJazz.json');
const reseAndDeve = require('./showSchedules/reseAndDeve.json');
const sounIdea = require('./showSchedules/sounIdea.json');
const statOfIndi = require('./showSchedules/statOfIndi.json');
const talkJazz = require('./showSchedules/talkJazz.json');
const theJazzTrai = require('./showSchedules/theJazzTrai.json');
const theNiteOwl = require('./showSchedules/theNiteOwl.json');
const thisIsJazz = require('./showSchedules/thisIsJazz.json');
const toucOfClassics = require('./showSchedules/toucOfClassics.json');

db.once('open', async () => {
  try {
    // clear database
    await DJ.deleteMany({});
    await Show.deleteMany({});
    await WeeklySchedule.deleteMany({});
    await BoardMember.deleteMany({});

    // Bulk create each model
    const djs = await DJ.insertMany(DJSeeds);
    const shows = await Show.insertMany(ShowSeeds);
    const boardMembers = await BoardMember.insertMany(BoardMemberSeeds);
    let importedSchedules = [];
    importedSchedules.push(await WeeklySchedule.insertMany(afroCubaLati));
    importedSchedules.push(await WeeklySchedule.insertMany(amerSong));
    importedSchedules.push(await WeeklySchedule.insertMany(berkJazz));
    importedSchedules.push(await WeeklySchedule.insertMany(bigBandBlowOut));
    importedSchedules.push(await WeeklySchedule.insertMany(collChoi));
    importedSchedules.push(
      await WeeklySchedule.insertMany(happBirtDearJazzArti)
    );
    importedSchedules.push(await WeeklySchedule.insertMany(jackShell));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzALaMode));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzAndMore));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzFocu));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzForEver));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzForKids));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzHaven));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzScene));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzWithDaviBass));
    importedSchedules.push(await WeeklySchedule.insertMany(lastCall));
    importedSchedules.push(await WeeklySchedule.insertMany(mornGlor));
    importedSchedules.push(await WeeklySchedule.insertMany(mornWithLindKay));
    importedSchedules.push(await WeeklySchedule.insertMany(mornWithMatt));
    importedSchedules.push(await WeeklySchedule.insertMany(mornWithMike));
    importedSchedules.push(await WeeklySchedule.insertMany(mornWithTish));
    importedSchedules.push(await WeeklySchedule.insertMany(newVint));
    importedSchedules.push(await WeeklySchedule.insertMany(nighLigh));
    importedSchedules.push(await WeeklySchedule.insertMany(noct));
    importedSchedules.push(await WeeklySchedule.insertMany(prebOnJazz));
    importedSchedules.push(await WeeklySchedule.insertMany(prog));
    importedSchedules.push(await WeeklySchedule.insertMany(reflOnJazz));
    importedSchedules.push(await WeeklySchedule.insertMany(reseAndDeve));
    importedSchedules.push(await WeeklySchedule.insertMany(sounIdea));
    importedSchedules.push(await WeeklySchedule.insertMany(statOfIndi));
    importedSchedules.push(await WeeklySchedule.insertMany(talkJazz));
    importedSchedules.push(await WeeklySchedule.insertMany(theJazzTrai));
    importedSchedules.push(await WeeklySchedule.insertMany(theNiteOwl));
    importedSchedules.push(await WeeklySchedule.insertMany(thisIsJazz));
    importedSchedules.push(await WeeklySchedule.insertMany(toucOfClassics));

    for (let i = 0; i < importedSchedules.length; i++) {
      let tempShow = shows.filter(
        (show) => show.url === importedSchedules[i][0].showurl
      )[0];
      for (let j = 0; j < importedSchedules[i].length; j++) {
        tempShow.schedule.push(importedSchedules[i][j]._id);
        await tempShow.save();
        importedSchedules[i][j].show = tempShow._id;
        await importedSchedules[i][j].save();
      }
    }

    for (newShow of shows) {
      for (let i = 0; i < newShow.hosturl.length; i++) {
        const tempHostUrl = newShow.hosturl[i].url;
        const tempDJ = djs.filter((dj) => dj.url === tempHostUrl);
        tempDJ[0].Shows.push(newShow._id);
        await tempDJ[0].save();

        newShow.host.push(tempDJ[0]._id);
        await newShow.save();
      }
    }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
