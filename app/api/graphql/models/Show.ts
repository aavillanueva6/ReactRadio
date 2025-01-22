import { Schema, model, models, Document } from 'mongoose';
import { IDJ } from './DJ';
import { IWeeklySchedule } from './WeeklySchedule';

interface IHosturl {
  url?: string;
}

export interface IShow extends Document {
  name: string;
  host?: IDJ[];
  shortDescription?: string;
  longDescription?: string[];
  url?: string;
  image?: string;
  schedule?: IWeeklySchedule[];
  source?: string;
  hosturl?: IHosturl[];
}

const showSchema = new Schema<IShow>({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  host: [
    {
      type: Schema.Types.ObjectId,
      ref: 'DJ',
    },
  ],
  shortDescription: {
    type: String,
    trim: true,
  },
  longDescription: [
    {
      type: String,
      trim: true,
    },
  ],
  url: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  schedule: [
    {
      type: Schema.Types.ObjectId,
      ref: 'WeeklySchedule',
    },
  ],
  source: {
    type: String,
    trim: true,
  },
  hosturl: [{ type: Object }],
});

const Show = models.Show || model<IShow>('Show', showSchema);

export default Show;
