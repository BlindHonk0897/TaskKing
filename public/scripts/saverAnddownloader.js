const mysql = require('./mysql');
mysql.connect(function(err){
    mysql.query("DELETE FROM `tblSample`",function(err,result){
        if(err)throw err;
     });
    var query = "INSERT INTO `tblSample` (SELECT * FROM tblShuffledTask)"
    mysql.query(query,function(err,result){
        if(err)throw err;
    });
})