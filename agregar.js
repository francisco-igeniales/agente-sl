const mysql = require('mysql2/promise');

module.exports = async (req, res) => {
  try {
    const { nombre } = req.body;

    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT
    });

    await conn.execute("INSERT INTO AGENTE (AG_CODAGE, AG_NOMAGE, AG_RUTA, AG_FOTO) VALUES ('00008','FRANCISCO PANTOJA','SALAMANCA','No Aplica')");

    res.status(200).json({ mensaje: "Insertado correctamente" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};