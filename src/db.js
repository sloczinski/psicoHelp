const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  })
  .promise();

connection.connect((error) => {
  if (error) throw error;
  console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`);
});

module.exports = connection;
