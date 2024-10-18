const { Schema, model } = require('mongoose');

const showSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: 'DJ',
  },
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
});

const Show = model('Show', showSchema);

module.exports = Show;
