const express = require("express");
const router = express.Router();

const medicationController = require("../controllers/medications.controller");

router.get("/", medicationController.getMedications);

module.exports = router;
