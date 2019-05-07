const mysql = require('mysql');
module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "taskking"
  });

//   con.connect(function(err){
//       if(err){
//           console.log("error");
//       }
// //    var file = con.query('Select * from tblEducator');
// //           console.log(file[0].Username);
// //      for(i = 0;i<file.length;i++){
// //          console.log(file[i].Username);
// //      }
//   })


  