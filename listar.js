const mysql = require('mysql2/promise');

module.exports = async (req, res) => {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT
    });

    const [rows] = await conn.execute("SELECT * FROM agentes");

    res.status(200).json(rows);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};