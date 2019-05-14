const express = require('express');
const app = express();
const server = require('http').createServer(app); 

const bodyParser = require('body-parser');


const mysql = require('./public/scripts/mysql');
const getRoutes = require('./router/getRoutes.js');
const postRoutes = require('./router/postRoutes.js');

const port = process.env.PORT||3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//app.use('/public', routes);
//app.set('view',__dirname+'/pulic/views');
app.set("view engine", "ejs");
getRoutes(app);
postRoutes(app);

//Connecting to database before running the server
mysql.connect(function(err){
    if(err){console.log('error')}
    console.log('connected to Datadase')
    app.listen(port,()=>{console.log(`SERVER RUNNING AT PORT ${port}........`)});
})

