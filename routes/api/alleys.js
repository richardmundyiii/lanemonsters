const express = require("express");
const router = express.Router();
const alleyCtrl = require("../../controllers/api/alleys");

router.get("/", alleyCtrl.index);

router.get("/:id", alleyCtrl.alleyDetail);

router.post("/", alleyCtrl.create);

module.exports = router;
