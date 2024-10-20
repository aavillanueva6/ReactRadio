const { Schema, model } = require('mongoose');

const DJsSchema = new Schema({
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
});

const DJ = model('DJ', DJsSchema);

module.exports = DJ;
