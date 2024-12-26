const { DJ, Show, WeeklySchedule, BoardMember } = require('../models');

const resolvers = {
  Query: {
    djs: async () => {
      return await DJ.find({}).populate('Shows');
    },

    boardMembers: async () => {
      return await BoardMember.find({});
    },

    shows: async () => {
      return await Show.find({}).populate('host');
    },

    singleDJ: async (parent, { url }) => {
      return await DJ.findOne({ url: url }).populate('Shows');
    },

    singleBM: async (parent, { url }) => {
      return await BoardMember.findOne({ url: url });
    },

    singleShow: async (parent, { url }) => {
      return await Show.findOne({ url: url })
        .populate('host')
        .populate('schedule');
    },

    schedule: async (parent, { day }) => {
      return await WeeklySchedule.find({ day: day })
        .populate('show')
        .populate('dj');
    },
  },
};

module.exports = resolvers;
