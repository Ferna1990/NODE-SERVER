const mysql = require('mysql')

module.exports = function conectar (){
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "appmotos"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });

  return con

}