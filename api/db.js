import mysql from 'mysql'


export const db = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root",
    database:"myblog"
})

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
//https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
