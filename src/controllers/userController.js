const UserService = require("../services/userService");

module.exports = {
  verifyUser: async (req, res) => {
    let json = { error: "", result: {} };

    const { email, password } = req.body;

    let user = await UserService.verifyUser(email, password);

    if (user) {
      json.result = {
        email: user.email,
        id: user.id,
      };
    } else {
      json.error = "Usuário ou senha inválidos";
    }

    res.json(json);
  },

  verifyUser: async (req, res) => {},

  verifyUser: async (req, res) => {},
};
