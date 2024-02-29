const express = require("express");
const router = express.Router();
const tournamentCtrl = require("../../controllers/api/tournaments");

router.get("/", tournamentCtrl.index);

router.get("/:id", tournamentCtrl.tournamentDetails);

router.post("/", tournamentCtrl.create);

module.exports = router;
