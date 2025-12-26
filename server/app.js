const express = require("express");
const app = express();
const patientRoutes = require("./routes/patient.routes");
const rulesRoutes = require("./routes/clinical-rules.routes");
const medicationsRoutes = require("./routes/medications.routes");

//middlewares
app.use(express.json());
app.use("/api/v1/patients", patientRoutes);
app.use("/api/v1/rules", rulesRoutes);
app.use("/api/v1/medications", medicationsRoutes);

module.exports = app;
