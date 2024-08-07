const mysql = require('mysql2');

const enviroment = {
    DB_HOST: "localhost",
    DB_PORT: "3306",
    DB_USER: "root",
    DB_PASS: "081433",
    DB_NAME: "hogwarts_dados"
}

const connection= mysql.createConnection({
    host: enviroment.DB_HOST,
    port: enviroment.DB_PORT,
    user: enviroment.DB_USER,
    password: enviroment.DB_PASS,
    database: enviroment.DB_NAME
  
});

connection.connect(function(err){
    if(err) throw err;
    console.log('connected!');
});

module.exports = connection




