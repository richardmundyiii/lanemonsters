const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const laneType = ["Wood", "AMF Synthetic", "Brunswick Synthetic"];

const alleySchema = new Schema({
  name: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  laneType: {
    type: String,
    enum: laneType,
  },
  numberOfLanes: {
    type: Number,
  },
  imgUrl: {
    type: String,
    default:
      "https://icons.veryicon.com/png/o/miscellaneous/travel-flat-colorful-icon/placeholder-9.png",
  },
  smokingAllowed: {
    type: Boolean,
  },
  hasRestaurant: {
    type: Boolean,
  },
  hasBar: {
    type: Boolean,
  },
  beerAndWineOnly: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Alley", alleySchema);
