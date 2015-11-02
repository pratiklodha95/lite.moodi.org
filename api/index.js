var api=require('./api');
var mysql=require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '', /* username */
  password : '', /* passord */
  database : 'mi_2015'
});

connection.connect();

connection.query('SELECT * from < table name >', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();

