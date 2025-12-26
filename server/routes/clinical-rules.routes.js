const express = require("express");
const router = express.Router();

const clinicalRulesController = require("../controllers/clinical-rules.controller");

router.get("/", clinicalRulesController.getAllRules);

module.exports = router;
