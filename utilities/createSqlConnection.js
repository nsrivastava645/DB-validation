(function(){

  var aFunction = function(){
    var vars = this.variables;
    var mysql = require('mysql');
    
    const connection = mysql.createConnection({
      host     : 'remotemysql.com',
      user     : 'WwJqzF0rI5',
      password : 'Pjcx30UKGq',
      database : 'WwJqzF0rI5'
    });
      console.log(connection);
      connection.query("create table tutorials_tbl(tutorial_id INT NOT NULL AUTO_INCREMENT, tutorial_title VARCHAR(100) NOT NULL,tutorial_author VARCHAR(40) NOT NULL,submission_date DATE,PRIMARY KEY ( tutorial_id ));",(err, result)=>{
        if(err) throw err
        console.log(result);
      });
      connection.query('SELECT NOW()', function(error, result){ 
    if(error) throw error 
    console.log(result) 
});
      return connection;
  };

  

  return aFunction;
})();