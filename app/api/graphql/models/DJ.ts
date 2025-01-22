import { Schema, model, models, Document } from 'mongoose';
import { IShow } from './Show'; // Assuming you have a Show interface defined

export interface IDJ extends Document {
  firstName: string;
  lastName: string;
  fullName?: string;
  nickName?: string;
  Title?: string;
  Shows?: Schema.Types.ObjectId[] | IShow[];
  image?: string;
  sqImage?: string;
  url?: string;
  bio?: string[];
}

const DJSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  fullName: {
    type: String,
    trim: true,
  },
  nickName: {
    type: String,
    trim: true,
  },
  Title: {
    type: String,
    trim: true,
  },
  Shows: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Show',
    },
  ],
  image: {
    type: String,
    trim: true,
  },
  sqImage: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    trim: true,
  },
  bio: [{ type: String }],
});

const DJ = models.DJ || model<IDJ>('DJ', DJSchema);

export default DJ;
