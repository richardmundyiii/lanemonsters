const Alley = require("../../models/alley");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  try {
    const allies = await Alley.find({});
    res.status(200).json(allies);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function create(req, res) {
  try {
    const newAlley = await Alley.create(req.body);
    res.status(200).json(newAlley);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}