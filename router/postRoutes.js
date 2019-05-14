
module.exports = function(app){
    const mysql = require('../public/scripts/mysql');
    app.post('/login',function(req,res){
        mysql.connect(function(err){
            if(err){
                console.log("error");
            }
            mysql.query(`SELECT * FROM tblEducator where Username = '${req.body.username}' and Password = '${req.body.password}'`, function (err, result) {
                if (err) throw err;
                if(result.length > 0){
                    res.send("Success")
                }else{
                    res.send("Failed")
                }
            });
        })
    })
}

