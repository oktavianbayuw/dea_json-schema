const express = require("express");
const checkController = require("../controllers/checkController");

const router = express.Router();

router.post("/validateAndSave", (req, res) => {
  checkController.validateAndSave(req, res);
});

module.exports = router;
