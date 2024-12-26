const { Schema, model } = require('mongoose');

const BoardMembersSchema = new Schema({
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
  url: {
    type: String,
    trim: true,
  },
  bio: [{ type: String }],
});

const BoardMember = model('BoardMember', BoardMembersSchema);

module.exports = BoardMember;
