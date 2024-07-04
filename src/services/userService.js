const {
  listarUsuarios,
  listarUmUsuario,
  alterarUsuario,
} = require("../controllers/userController");
const db = require("../db");

module.exports = {
  listarUsuarios: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM users", (error, results) => {
        if (error) {
          rejeitado(error);
        } else {
          aceito(results);
        }
      });
    });
  },

  listarUmUsuario: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM users WHERE id = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else {
            aceito(false);
          }
        }
      );
    });
  },
  inserirUsuario: (email, password) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, password],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertId);
        }
      );
    });
  },
  alterarUsuario: (id, email, password) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE users SET email = ?, password = ? WHERE id = ?",
        [email, password, id],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },
  excluirUsuario: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query("DELETE FROM users WHERE id = ?", [codigo], (error, results) => {
        if (error) {
          rejeitado(error);
        }
        aceito(results);
      });
    });
  },
};
