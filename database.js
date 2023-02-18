const mysql = require('mysql');
const connection = mysql.createConnection({

    host: 'nodemysqldb.coni7vrobjzv.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'testing123',
    database: 'formdb'
});
connection.connect((err) => {

    if (err) throw err;

    console.log('Connected to the MySQL database');
});
module.exports = connection;