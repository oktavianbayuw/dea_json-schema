const express = require("express");
const checkController = require("../controllers/checkController");

const router = express.Router();

router.post("/validateAndSave", checkController.validateAndSave);

module.exports = router;
