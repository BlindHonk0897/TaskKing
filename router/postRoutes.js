
module.exports = function(app){
    const mysql = require('../public/scripts/mysql');
    app.post('/login',function(req,res){
        mysql.connect(function(err){
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
    app.post('/shuffle',function(req,res){
     require('../public/scripts/shuffler');
       res.send('success');
    })
    app.post('/saveAndDownload',function(req,res){
        require('../public/scripts/saverAndDownloader');
        res.send('success');
    })
    app.post('/cancel',function(req,res){
        res.send('Cancel Transaction');
    })
    app.post('/shuffleWithConsequence',function(req,res){
    console.log(req.body);
      var shuffle =  require('../public/scripts/shufflerWithConsequence');
      shuffle(req.body.Kitchen,req.body.Dishwasher,req.body.Dining);
        res.send('Success');
    })
}

