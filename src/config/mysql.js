const mysql = require("mysql");
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
})

connection.connect((error) => {
    if (error) {
      throw error;
    }
    console.log("You are now connected ...");
  });

module.exports = connection;