module.exports = function(callback){
    console.log("nelosod");
    const uri = "mongodb://172.16.32.40:27017/:";
    var mongodbClient = require('mongodb').MongoClient;
    var client = null;
    mongodbClient.connect(uri,{useNewUrlParser:true},callback);
    
    //     ){
    //     if(err){
    //         console.log("error");
    //     }
    //     console.log("connected");
    //     //return res.db("TaskKing").collection("tblUser");
    //     // client = res.db("TaskKing").collection("tblUser");
    //     // //client.insertOne({"Username":"PN","Password":"P@ssw0rd"});
    //     // client.find({}).toArray((err,result)=>{
    //     //     console.log(result);
    //     //  });
    //     // return callback;
    // }
    
    //client.insertOne({"Username":"PN","Password":"P@ssw0rd"});
    
}

