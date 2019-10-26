var mysql = require("mysql");

const password = require('./secrets.js')


var connection;


// if (proccess.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
 connection = mysql.createConnection({
    host: "s54ham9zz83czkff.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "svqwzklz3gfg7q90",
    password: "degg28cldf8hcxaj",
    database: "dw3wfuulx3cjnlqq"
  });
// }


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
