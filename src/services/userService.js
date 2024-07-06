const { verifyUser } = require("../controllers/userController");
const db = require("../db");

module.exports = {
  verifyUser: async (email, password) => {
    // Lógica para verificar o usuário no banco de dados
    let user = await db.query(
      "SELECT * FROM credenciais WHERE email= ? and senha_hash = ?",
      [email, password]
    );

    if (user.length > 0) {
      return user[0];
    } else {
      return null;
    }
  },
};
