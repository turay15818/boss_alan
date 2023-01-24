import mysql from 'mysql';
const connection = mysql.createConnection({
  host: 'localhost',
  // host: "172.25.164.15",
  user: 'root',
  // port: 3306,
  password: 'Orange;sl;',
  // password: '!Love2code',
  database: 'complain'
});

connection.connect(function (error) {
  if (error) {
    console.log('not connected');
  } else {
    console.log('Connected!:)');
  }
});

export default connection;