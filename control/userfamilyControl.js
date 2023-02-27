/**
 * control/userfamilyControl.js
 * Controller da tabela "userfamily" do banco de dados.
 */

// Importa conector do banco de dados.
const conn = require('../model/index');

// Objeto "controller" para a entidade "userfamily" do banco de dados.
const userfamiiaControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {

    try {

      const [rows] = await conn.query("SELECT * FROM users WHERE ustatus = 'on' ORDER BY uname");
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {

    try {

      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM users WHERE uid = ? AND ustatus = 'on'", [id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  },

  // apaga um registro único pelo Id.
  delete: async (req, res) => {

    try {

      const { id } = req.params
      const sql = "UPDATE users SET ustatus = 'del' WHERE uid = ?"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  },

  // Insere um novo registro.
  post: async (req, res) => {

    try {

      const { name, email, password, birth } = req.body;
      const sql = "INSERT INTO users (uname, uemail, upassword, ubirth) VALUES (?, ?, SHA1(?), ?, ?)";
      const [rows] = await conn.query(sql, [name, email, password, birth]);
      res.json({ data: rows });

    } catch (error) {
      res.json({ status: "error", message: error });
    }

  },

  // Edita o registro pelo Id.
  put: async (req, res) => {

    try {

      const { name, email, password, birth } = req.body;

      //Validação e sanitização dos dados..

      const { id } = req.params;
      const sql = "UPDATE users SET uname = ?, uemail = ?, upassword = SHA1(?), uavatar = ?, ubirth = ? WHERE uid = ?"
      const [rows] = await conn.query(sql, [name, email, password, birth, id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  }

};

// Exporta o módulo.
module.exports = userfamilyControl;
