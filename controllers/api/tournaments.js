const Tournament = require("../../models/tournament");

module.exports = {
  index,
  create,
  tournamentDetails,
};

async function index(req, res) {
  try {
    const tournaments = await Tournament.find({});
    res.status(200).json(tournaments);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function create(req, res) {
  try {
    const newTournament = await Tournament.create(req.body);
    res.status(200).json(newTournament);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function tournamentDetails(req, res) {
  try {
    const tournament = await Tournament.findById(req.params.id);
    res.status(200).json(tournament);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
