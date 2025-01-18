const { Schema, model } = require('mongoose');

const showSchema = new Schema({
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

const Show = model('Show', showSchema);

module.exports = Show;
