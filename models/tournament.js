const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  alley: {
    type: Schema.Types.ObjectId,
    ref: "Alley",
  },
  maxEntrants: {
    type: Number,
    required: true,
    default: 999,
  },
  entryFee: {
    type: Number,
    required: true,
  },
});
