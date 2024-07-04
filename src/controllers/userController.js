const UserService = require("../services/userService");

module.exports = {
  listarUsuarios: async (req, res) => {
    let json = { error: "", result: [] };

    let users = await UserService.listarUsuarios();

    for (let i in users) {
      json.result.push({
        email: users[i].email,
        id: users[i].id,
      });
    }
    res.json(json);
  },

  listarUmUsuario: async (req, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;
    let user = await UserService.listarUmUsuario(codigo);

    if (user) {
      json.result = user;
    }
    res.json(json);
  },

  inserirUsuario: async (req, res) => {
    let json = { error: "", result: {} };

    let email = req.body.email;
    let password = req.body.password;

    if (email && password) {
      let userId = await UserService.inserirUsuario(email, password);
      json.result = {
        id: userId,
        email,
        password,
      };
    } else {
      json.error = "Campos não enviados";
    }
    res.json(json);
  },
  alterarUsuario: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.body.id;
    let email = req.body.email;
    let password = req.body.password;

    if (id && email && password) {
      await UserService.alterarUsuario(id, email, password);
      json.result = {
        id,
        email,
        password,
      };
    } else {
      json.error = "Campos não enviados";
    }
    res.json(json);
  },
  excluirUsuario: async (req, res) => {
    let json = { error: "", result: {} };

    await UserService.excluirUsuario(req.params.codigo);

    res.json(json);
  },
};
