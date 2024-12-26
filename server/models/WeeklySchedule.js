const { Schema, model } = require('mongoose');

const WeeklyScheduleSchema = new Schema({
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

const WeeklySchedule = model('WeeklySchedule', WeeklyScheduleSchema);

module.exports = WeeklySchedule;
