const express = require('express');
const app = express();
const server = require('http').createServer(app); 

const mysql = require('./public/scripts/mysql');
const routes = require('./public/router/routes.js');

const port = process.env.PORT||3000;
app.use(express.static("public"));
//app.use('/public', routes);
//app.set('view',__dirname+'/pulic/views');
//app.set("view engine", "ejs");
//routes(app);

app.get('/', function(req, res){
    res.sendFile(__dirname +"/public/views/login.html");
});
app.get('/dashboard', function(req, res){
    res.sendFile(__dirname +"/public/views/dashboard.html");
});

//Connecting to database before running the server
mysql.connect(function(err){
    if(err){console.log('error')}
    console.log('connected to Datadase')
    app.listen(port,()=>{console.log(`SERVER RUNNING AT PORT ${port}........`)});
})

