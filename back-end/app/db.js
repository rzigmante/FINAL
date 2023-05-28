const mysql = require("mysql2");

const mysqlDataBaseConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
};

const dbConnection = mysql.createConnection({
  ...mysqlDataBaseConfig,
  database: "",
});

dbConnection.query(
  "CREATE DATABASE IF NOT EXISTS participants",
  function (err) {
    if (err) throw err;
    console.log("Database participants created");

    dbConnection.query("USE participants", (err) => {
      if (err) throw err;

      const participantsTableQuery = `
            CREATE TABLE IF NOT EXISTS
            participants (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                surname VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                phone BIGINT(20) NOT NULL,
                primary key (id),
                user_ID int,
                FOREIGN KEY (user_ID) REFERENCES user(id)
            )
        `;

      dbConnection.query(participantsTableQuery, function (err) {
        if (err) throw err;
        console.log("Participants table created");
      });

      const usersTableQuery = `
            CREATE TABLE IF NOT EXISTS
            user (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                surname VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL,
                primary key (id)
            )
        `;

      dbConnection.query(usersTableQuery, function (err) {
        if (err) throw err;
        console.log("Users Table created");
      });
    });
  }
);

module.exports = {
  dbConnection,
};
