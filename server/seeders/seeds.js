const db = require('../config/connection');
const { DJ, Show, WeeklySchedule, BoardMember } = require('../models');
// const WeeklySchedule = require('../models/WeeklySchedule');
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
    console.log(shows);
    const boardMembers = await BoardMember.insertMany(BoardMemberSeeds);
    const afroCubaLatiData = await WeeklySchedule.insertMany(afroCubaLati);
    const amerSongData = await WeeklySchedule.insertMany(amerSong);
    const berkJazzData = await WeeklySchedule.insertMany(berkJazz);
    const bigBandBlowOutData = await WeeklySchedule.insertMany(bigBandBlowOut);
    const collChoiData = await WeeklySchedule.insertMany(collChoi);
    const happBirtDearJazzArtiData = await WeeklySchedule.insertMany(
      happBirtDearJazzArti
    );
    const jackShellData = await WeeklySchedule.insertMany(jackShell);
    const jazzALaModeData = await WeeklySchedule.insertMany(jazzALaMode);
    const jazzAndMoreData = await WeeklySchedule.insertMany(jazzAndMore);
    const jazzFocuData = await WeeklySchedule.insertMany(jazzFocu);
    const jazzForEverData = await WeeklySchedule.insertMany(jazzForEver);
    const jazzForKidsData = await WeeklySchedule.insertMany(jazzForKids);
    const jazzHavenData = await WeeklySchedule.insertMany(jazzHaven);
    const jazzSceneData = await WeeklySchedule.insertMany(jazzScene);
    const jazzWithDaviBassData = await WeeklySchedule.insertMany(
      jazzWithDaviBass
    );
    const lastCallData = await WeeklySchedule.insertMany(lastCall);
    const mornGlorData = await WeeklySchedule.insertMany(mornGlor);
    const mornWithLindKayData = await WeeklySchedule.insertMany(
      mornWithLindKay
    );
    const mornWithMattData = await WeeklySchedule.insertMany(mornWithMatt);
    const mornWithMikeData = await WeeklySchedule.insertMany(mornWithMike);
    const mornWithTishData = await WeeklySchedule.insertMany(mornWithTish);
    const newVintData = await WeeklySchedule.insertMany(newVint);
    const nighLighData = await WeeklySchedule.insertMany(nighLigh);
    const noctData = await WeeklySchedule.insertMany(noct);
    const prebOnJazzData = await WeeklySchedule.insertMany(prebOnJazz);
    const progData = await WeeklySchedule.insertMany(prog);
    const reflOnJazzData = await WeeklySchedule.insertMany(reflOnJazz);
    const reseAndDeveData = await WeeklySchedule.insertMany(reseAndDeve);
    const sounIdeaData = await WeeklySchedule.insertMany(sounIdea);
    const statOfIndiData = await WeeklySchedule.insertMany(statOfIndi);
    const talkJazzData = await WeeklySchedule.insertMany(talkJazz);
    const theJazzTraiData = await WeeklySchedule.insertMany(theJazzTrai);
    const theNiteOwlData = await WeeklySchedule.insertMany(theNiteOwl);
    const thisIsJazzData = await WeeklySchedule.insertMany(thisIsJazz);
    const toucOfClassicsData = await WeeklySchedule.insertMany(toucOfClassics);

    for (e of afroCubaLatiData) {
      let tempShow = shows[0];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of amerSongData) {
      let tempShow = shows[1];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of berkJazzData) {
      let tempShow = shows[2];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of bigBandBlowOutData) {
      let tempShow = shows[3];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of collChoiData) {
      let tempShow = shows[4];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of happBirtDearJazzArtiData) {
      let tempShow = shows[5];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jackShellData) {
      let tempShow = shows[6];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jazzALaModeData) {
      let tempShow = shows[7];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jazzAndMoreData) {
      let tempShow = shows[8];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jazzFocuData) {
      let tempShow = shows[9];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jazzForEverData) {
      let tempShow = shows[10];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jazzForKidsData) {
      let tempShow = shows[11];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jazzHavenData) {
      let tempShow = shows[12];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jazzSceneData) {
      let tempShow = shows[13];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of jazzWithDaviBassData) {
      let tempShow = shows[14];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of lastCallData) {
      let tempShow = shows[15];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of mornGlorData) {
      let tempShow = shows[16];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of mornWithLindKayData) {
      let tempShow = shows[17];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of mornWithMattData) {
      let tempShow = shows[18];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of mornWithMikeData) {
      let tempShow = shows[19];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of mornWithTishData) {
      let tempShow = shows[20];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of newVintData) {
      let tempShow = shows[21];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of nighLighData) {
      let tempShow = shows[22];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of noctData) {
      let tempShow = shows[23];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of prebOnJazzData) {
      let tempShow = shows[24];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of progData) {
      let tempShow = shows[25];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of reflOnJazzData) {
      let tempShow = shows[26];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of reseAndDeveData) {
      let tempShow = shows[27];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of sounIdeaData) {
      let tempShow = shows[28];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of statOfIndiData) {
      let tempShow = shows[29];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of talkJazzData) {
      let tempShow = shows[30];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of theJazzTraiData) {
      let tempShow = shows[31];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of theNiteOwlData) {
      let tempShow = shows[32];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of thisIsJazzData) {
      let tempShow = shows[33];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
    }
    for (e of toucOfClassicsData) {
      let tempShow = shows[34];
      tempShow.schedule.push(e._id);
      await tempShow.save();
      e.show = tempShow._id;
      await e.save();
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
