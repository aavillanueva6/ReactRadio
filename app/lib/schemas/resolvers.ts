import { DJ, Show, WeeklySchedule, BoardMember } from '../models';

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

    singleDJ: async ({ url }: { url: string }) => {
      return await DJ.findOne({ url: url }).populate('Shows');
    },

    singleBM: async ({ url }: { url: string }) => {
      return await BoardMember.findOne({ url: url });
    },

    singleShow: async ({ url }: { url: string }) => {
      return await Show.findOne({ url: url })
        .populate('host')
        .populate('schedule');
    },

    schedule: async ({ day }: { day: string }) => {
      return await WeeklySchedule.find({ day: day })
        .populate({ path: 'show', populate: { path: 'host', model: 'DJ' } })
        .populate('dj');
    },
  },
};

export default resolvers;
