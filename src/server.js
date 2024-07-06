require("dotenv").config({ path: "variaveis.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes");

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, "..", "public")));

// Rota padrão para servir o index.html
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

server.use("/api", routes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
