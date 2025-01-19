import { Schema, model, Document } from 'mongoose';
import { IDJ } from './DJ';
import { IShow } from './Show';

interface IHosturl {
  url?: string;
}

export interface IWeeklySchedule extends Document {
  day: string;
  startTime24?: number;
  startTime12?: string;
  endTime12?: string;
  show?: IShow;
  dj?: IDJ[];
  hosturl?: IHosturl[];
}

const WeeklyScheduleSchema = new Schema<IWeeklySchedule>({
  day: {
    type: String,
    required: true,
    trim: true,
  },
  startTime24: {
    type: Number,
    trim: true,
  },
  startTime12: {
    type: String,
    trim: true,
  },

  endTime12: {
    type: String,
    trim: true,
  },
  show: {
    type: Schema.Types.ObjectId,
    ref: 'Show',
  },
  dj: [
    {
      type: Schema.Types.ObjectId,
      ref: 'DJ',
    },
  ],
  hosturl: [{ type: Schema.Types.Mixed }],
});

const WeeklySchedule = model<IWeeklySchedule>(
  'WeeklySchedule',
  WeeklyScheduleSchema
);

export default WeeklySchedule;
