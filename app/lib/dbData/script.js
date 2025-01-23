// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

import mongoose from 'mongoose';
import {
  DJ,
  Show,
  WeeklySchedule,
  BoardMember,
} from '../../api/graphql/models/index.js';
import DJsData from './DJsData.json' assert { type: 'json' };
import ShowsData from './ShowsData.json' assert { type: 'json' };
import BoardMembersData from './BoardMembersData.json' assert { type: 'json' };

import afroCubaLati from './showSchedules/afroCubaLati.json' assert { type: 'json' };
import amerSong from './showSchedules/amerSong.json' assert { type: 'json' };
import berkJazz from './showSchedules/berkJazz.json' assert { type: 'json' };
import bigBandBlowOut from './showSchedules/bigBandBlowOut.json' assert { type: 'json' };
import collChoi from './showSchedules/collChoi.json' assert { type: 'json' };
import happBirtDearJazzArti from './showSchedules/happBirtDearJazzArti.json' assert { type: 'json' };
import jazzALaMode from './showSchedules/jazzALaMode.json' assert { type: 'json' };
import jazzAndMore from './showSchedules/jazzAndMore.json' assert { type: 'json' };
import jazzEverLike from './showSchedules/jazzEverLike.json' assert { type: 'json' };
import jazzFocu from './showSchedules/jazzFocu.json' assert { type: 'json' };
import jazzForKids from './showSchedules/jazzForKids.json' assert { type: 'json' };
import jazzHaven from './showSchedules/jazzHaven.json' assert { type: 'json' };
import jazzScene from './showSchedules/jazzScene.json' assert { type: 'json' };
import jazzWithDaviBass from './showSchedules/jazzWithDaviBass.json' assert { type: 'json' };
import lastCall from './showSchedules/lastCall.json' assert { type: 'json' };
import mornGlor from './showSchedules/mornGlor.json' assert { type: 'json' };
import mornWithLindKay from './showSchedules/mornWithLindKay.json' assert { type: 'json' };
import mornWithMatt from './showSchedules/mornWithMatt.json' assert { type: 'json' };
import mornWithMidd from './showSchedules/mornWithMidd.json' assert { type: 'json' };
import mornWithMike from './showSchedules/mornWithMike.json' assert { type: 'json' };
import mornWithTish from './showSchedules/mornWithTish.json' assert { type: 'json' };
import newVint from './showSchedules/newVint.json' assert { type: 'json' };
import nighLigh from './showSchedules/nighLigh.json' assert { type: 'json' };
import noct from './showSchedules/noct.json' assert { type: 'json' };
import prebOnJazz from './showSchedules/prebOnJazz.json' assert { type: 'json' };
import prog from './showSchedules/prog.json' assert { type: 'json' };
import reflOnJazz from './showSchedules/reflOnJazz.json' assert { type: 'json' };
import sounIdea from './showSchedules/sounIdea.json' assert { type: 'json' };
import statOfIndi from './showSchedules/statOfIndi.json' assert { type: 'json' };
import talkJazz from './showSchedules/talkJazz.json' assert { type: 'json' };
import theJazzTrai from './showSchedules/theJazzTrai.json' assert { type: 'json' };
import theNiteOwl from './showSchedules/theNiteOwl.json' assert { type: 'json' };
import thisIsJazz from './showSchedules/thisIsJazz.json' assert { type: 'json' };
import toucOfClassics from './showSchedules/toucOfClassics.json' assert { type: 'json' };

// const db = await (async () => {
//   const dbConnection = await mongoose.connect(uri);
//   return dbConnection.connection;
// });

const db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/WETF-Local-dev');

// const dbConnection async = await mongoose.connect(uri);
// const db = dbConnection.connection;
// const db = require('@/app/api/graphql/route.ts');
// const {
//   DJ,
//   Show,
//   WeeklySchedule,
//   BoardMember,
// } = require('@/app/api/graphql/models');
// const WeeklySchedule = require('../models/WeeklySchedule');
// const DJsData = require('@/app/lib/dbData/DJsData.json');
// const ShowsData = require('@/app/lib/dbData/ShowsData.json');
// const BoardMembersData = require('@/app/lib/dbData/BoardMembersData.json');

//schedule data import
// const afroCubaLati = require('./showSchedules/afroCubaLati.json');
// const amerSong = require('./showSchedules/amerSong.json');
// const berkJazz = require('./showSchedules/berkJazz.json');
// const bigBandBlowOut = require('./showSchedules/bigBandBlowOut.json');
// const collChoi = require('./showSchedules/collChoi.json');
// const happBirtDearJazzArti = require('./showSchedules/happBirtDearJazzArti.json');
// const jazzALaMode = require('./showSchedules/jazzALaMode.json');
// const jazzAndMore = require('./showSchedules/jazzAndMore.json');
// const jazzEverLike = require('./showSchedules/jazzEverLike.json');
// const jazzFocu = require('./showSchedules/jazzFocu.json');
// const jazzForKids = require('./showSchedules/jazzForKids.json');
// const jazzHaven = require('./showSchedules/jazzHaven.json');
// const jazzScene = require('./showSchedules/jazzScene.json');
// const jazzWithDaviBass = require('./showSchedules/jazzWithDaviBass.json');
// const lastCall = require('./showSchedules/lastCall.json');
// const mornGlor = require('./showSchedules/mornGlor.json');
// const mornWithLindKay = require('./showSchedules/mornWithLindKay.json');
// const mornWithMatt = require('./showSchedules/mornWithMatt.json');
// const mornWithMidd = require('./showSchedules/mornWithMidd.json');
// const mornWithMike = require('./showSchedules/mornWithMike.json');
// const mornWithTish = require('./showSchedules/mornWithTish.json');
// const newVint = require('./showSchedules/newVint.json');
// const nighLigh = require('./showSchedules/nighLigh.json');
// const noct = require('./showSchedules/noct.json');
// const prebOnJazz = require('./showSchedules/prebOnJazz.json');
// const prog = require('./showSchedules/prog.json');
// const reflOnJazz = require('./showSchedules/reflOnJazz.json');
// const sounIdea = require('./showSchedules/sounIdea.json');
// const statOfIndi = require('./showSchedules/statOfIndi.json');
// const talkJazz = require('./showSchedules/talkJazz.json');
// const theJazzTrai = require('./showSchedules/theJazzTrai.json');
// const theNiteOwl = require('./showSchedules/theNiteOwl.json');
// const thisIsJazz = require('./showSchedules/thisIsJazz.json');
// const toucOfClassics = require('./showSchedules/toucOfClassics.json');

db.once('open', async () => {
  try {
    // clear database
    await DJ.deleteMany({});
    await Show.deleteMany({});
    await WeeklySchedule.deleteMany({});
    await BoardMember.deleteMany({});

    // Bulk create each model
    const djs = await DJ.insertMany(DJsData);
    const shows = await Show.insertMany(ShowsData);
    const boardMembers = await BoardMember.insertMany(BoardMembersData);
    let importedSchedules = [];
    importedSchedules.push(await WeeklySchedule.insertMany(afroCubaLati));
    importedSchedules.push(await WeeklySchedule.insertMany(amerSong));
    importedSchedules.push(await WeeklySchedule.insertMany(berkJazz));
    importedSchedules.push(await WeeklySchedule.insertMany(bigBandBlowOut));
    importedSchedules.push(await WeeklySchedule.insertMany(collChoi));
    importedSchedules.push(
      await WeeklySchedule.insertMany(happBirtDearJazzArti)
    );
    importedSchedules.push(await WeeklySchedule.insertMany(jazzALaMode));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzAndMore));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzEverLike));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzFocu));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzForKids));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzHaven));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzScene));
    importedSchedules.push(await WeeklySchedule.insertMany(jazzWithDaviBass));
    importedSchedules.push(await WeeklySchedule.insertMany(lastCall));
    importedSchedules.push(await WeeklySchedule.insertMany(mornGlor));
    importedSchedules.push(await WeeklySchedule.insertMany(mornWithLindKay));
    importedSchedules.push(await WeeklySchedule.insertMany(mornWithMatt));
    importedSchedules.push(await WeeklySchedule.insertMany(mornWithMidd));
    importedSchedules.push(await WeeklySchedule.insertMany(mornWithMike));
    importedSchedules.push(await WeeklySchedule.insertMany(mornWithTish));
    importedSchedules.push(await WeeklySchedule.insertMany(newVint));
    importedSchedules.push(await WeeklySchedule.insertMany(nighLigh));
    importedSchedules.push(await WeeklySchedule.insertMany(noct));
    importedSchedules.push(await WeeklySchedule.insertMany(prebOnJazz));
    importedSchedules.push(await WeeklySchedule.insertMany(prog));
    importedSchedules.push(await WeeklySchedule.insertMany(reflOnJazz));
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

    for (let newShow of shows) {
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
