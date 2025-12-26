const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patient.controller");

router.get("/:id", patientController.getPatientCompleteData);

module.exports = router;
