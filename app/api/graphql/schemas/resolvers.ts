import { DJ, Show, WeeklySchedule, BoardMember } from '../models';

const resolvers = {
  Query: {
    djs: async () => {
      try {
        return await DJ.find({}).populate('Shows');
      } catch (error) {
        throw new Error('Failed to fetch DJs');
      }
    },

    boardMembers: async () => {
      try {
        return await BoardMember.find({});
      } catch (error) {
        throw new Error('Failed to fetch board members');
      }
    },

    shows: async () => {
      try {
        return await Show.find({}).populate('host');
      } catch (error) {
        throw new Error('Failed to fetch shows');
      }
    },

    // @ts-ignore
    singleDJ: async (_, { url }: { url: string }) => {
      try {
        return await DJ.findOne({ url: url }).populate('Shows');
      } catch (error) {
        throw new Error('Failed to fetch single DJ');
      }
    },

    // @ts-ignore
    singleBM: async (_, { url }: { url: string }) => {
      try {
        return await BoardMember.findOne({ url: url });
      } catch (error) {
        throw new Error('Failed to fetch single Board Member');
      }
    },

    // @ts-ignore
    singleShow: async (_, { url }: { url: string }) => {
      try {
        return await Show.findOne({ url: url })
          .populate('host')
          .populate('schedule');
      } catch (error) {
        throw new Error('Failed to fetch single show');
      }
    },

    // @ts-ignore
    schedule: async (_, { day }: { day: string }) => {
      try {
        return await WeeklySchedule.find({ day: day })
          .populate({ path: 'show', populate: { path: 'host', model: 'DJ' } })
          .populate('dj');
      } catch (error) {
        throw new Error('Failed to fetch schedule');
      }
    },
  },
};

export default resolvers;
