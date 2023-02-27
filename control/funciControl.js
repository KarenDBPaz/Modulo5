/**
 * control/funciControl.js
 * Controller da tabela "funcis" do banco de dados.
 */

// Importa conector do banco de dados.
const conn = require('../model/index');

// Objeto "controller" para a entidade "funcis" do banco de dados.
const funciControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {

    console.log(req.method)

    try {

      const [rows] = await conn.query("SELECT * FROM funcis WHERE tstatus = 'on' ORDER BY tdate DESC");
      res.json({ data: rows});

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {

    try {

      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM funcis WHERE tid = ?", [id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  },

  // apaga um registro único pelo Id.
  delete: async (req, res) => {

    try {

      const { id } = req.params
      const sql = "UPDATE funcis SET tstatus = 'del' WHERE tid = ?"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  },

  // Insere um novo registro.
  post: async (req, res) => {

    try {

      const { user, name, photo, description, location, options } = req.body;
      const sql = "INSERT INTO funcis (tuser, tname, tphoto, tdescription, tlocation, toptions) VALUES (?, ?, ?, ?, ?, ?)";
      const [rows] = await conn.query(sql, [user, name, photo, description, location, options]);
      res.json({ data: rows });

    } catch (error) {
      res.json({ status: "error", message: error });
    }

  },

  // Edita o registro pelo Id.
  put: async (req, res) => {

    try {

      const { user, name, photo, description, location, options } = req.body;
      const { id } = req.params;
      const sql = "UPDATE funcis SET tuser = ?, tname = ?, tphoto = ?, tdescription = ?, tlocation = ?, toptions = ? WHERE tid = ?"
      const [rows] = await conn.query(sql, [user, name, photo, description, location, options, id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  }

};

// Exporta o módulo.
module.exports = funciControl;
