const express = require("express");
const router = express.Router();

const UserController = require("./controllers/userController");

//rotas Get
router.get("/users", UserController.listarUsuarios);
router.get("/users/:codigo", UserController.listarUmUsuario);

//Rotas Post
router.post("/users", UserController.inserirUsuario);

//Rotas Put
router.put("/users", UserController.alterarUsuario);

//Rotas Delete
router.delete("/users/:codigo", UserController.excluirUsuario);

module.exports = router;
