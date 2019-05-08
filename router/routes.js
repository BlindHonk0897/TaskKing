module.exports = function(app){
    console.log(__dirname);
    var path = require('path');
    app.get('/',function(req,res){
        res.render('../views/login.ejs');
    })

    app.get('/dashBoard',function(req,res){
        res.render('../views/dashBoard.ejs');
    })
}

