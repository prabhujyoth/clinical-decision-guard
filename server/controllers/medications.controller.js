const pool = require("../config/db");

const getMedications = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM medications");
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "No medications found.",
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

module.exports = { getMedications };
