import {
  BoardMember,
  DJ,
  Show,
  WeeklySchedule,
} from '@/app/api/graphql/models/index';
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';
import { IWeeklySchedule } from '../models/WeeklySchedule';

interface BoardMemberDocument {
  _id: ObjectId;
  username: string;
  password: string;
  email: string;
  interests: [string];
}

export class BoardMembers extends MongoDataSource<BoardMemberDocument> {
  // Function to fetch all board members
  async getAllBoardMembers() {
    try {
      return await BoardMember.find({});
    } catch (error) {
      throw new Error('Failed to fetch Board Members');
    }
  }
}

interface DJDocument {
  _id: ObjectId;
  username: string;
  password: string;
  email: string;
  interests: [string];
}

export class DJs extends MongoDataSource<DJDocument> {
  // Function to fetch all DJs
  async getAllDJs() {
    try {
      return await DJ.find({}).populate('Shows');
    } catch (error) {
      throw new Error('Failed to fetch djs');
    }
  }
}

interface ShowDocument {
  _id: ObjectId;
  username: string;
  password: string;
  email: string;
  interests: [string];
}

export class Shows extends MongoDataSource<ShowDocument> {
  // Function to fetch all Shows
  async getAllShows() {
    try {
      return await Show.find({}).populate('host');
    } catch (error) {
      throw new Error('Failed to fetch shows');
    }
  }
}

interface WeeklyScheduleDocument extends IWeeklySchedule {
  _id: ObjectId;
}

export class WeeklySchedules extends MongoDataSource<WeeklyScheduleDocument> {
  // Function to fetch all WeeklySchedules
  async schedule({ day }: { day: string }) {
    console.log('there');
    try {
      return await WeeklySchedule.find({ day: day })
        .populate({ path: 'show', populate: { path: 'host', model: 'DJ' } })
        .populate('dj');
    } catch (error) {
      throw new Error('Failed to fetch schedule');
    }
  }
}
