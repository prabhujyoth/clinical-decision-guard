const pool = require("../config/db");

const getPatientCompleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const patientResult = await pool.query(
      "SELECT * FROM patients where patient_id = $1",
      [id]
    );

    if (patientResult.rowCount === 0) {
      return res.status(404).json({ message: "No patient record found" });
    }

    const patient = patientResult.rows[0];

    const allergiesResult = await pool.query(
      "SELECT allergen_code FROM patient_allergies WHERE patient_id = $1",
      [id]
    );

    const labResults = await pool.query(
      "SELECT lab_code, value, taken_at FROM lab_results WHERE patient_id = $1",
      [id]
    );

    const orders = await pool.query(
      "SELECT order_type, order_code, ordered_at FROM orders WHERE patient_id = $1",
      [id]
    );

    res.status(200).json({
      success: true,
      data: {
        patient: {
          pid: patient.patient_id,
          pname: patient.patient_name,
          age: patient.age,
          gender: patient.gender,
        },
        allergies: allergiesResult.rows.map((item) => item.allergen_code),
        labs: labResults.rows.map((lab) => {
          return {
            labCode: lab.lab_code,
            value: Number(lab.value),
            takenAt: lab.taken_at,
          };
        }),
        recentOrders: orders.rows.map((order) => {
          return {
            type: order.order_type,
            code: order.order_code,
            orderedAt: order.ordered_at,
          };
        }),
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Internal Server Error: ${err}`,
    });
  }
};

module.exports = {
  getPatientCompleteData,
};
