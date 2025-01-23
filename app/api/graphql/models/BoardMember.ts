import mongoose, { Schema, model, Document } from 'mongoose';

export interface IBoardMember extends Document {
  firstName: string;
  lastName: string;
  fullName?: string;
  nickName?: string;
  Title?: string;
  image?: string;
  sqImage?: string;
  url?: string;
  bio?: string[];
}

const BoardMemberSchema = new Schema<IBoardMember>({
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

const BoardMember =
  mongoose.models.BoardMember ||
  model<IBoardMember>('BoardMember', BoardMemberSchema);

export default BoardMember;
