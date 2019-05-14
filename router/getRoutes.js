module.exports = function(app){
    
    app.get('/',function(req,res){
        res.render('../views/login.ejs');
    })

    app.get('/login',function(req,res){
        res.render('../views/login.ejs');
    })

    app.get('/dashBoard',function(req,res){
        res.render('../views/currentTasking.ejs');
    })

    app.get('/normalShuffling',function(req,res){
        res.render('../views/normalShuffling.ejs');
    })

    app.get('/taskRecord',function(req,res){
        res.render('../views/taskRecord.ejs');
    })

    app.get('/withConsequence',function(req,res){
        res.render('../views/withConsequence.ejs');
    })

    app.get('/coordinator',function(req,res){
        res.render('../views/coordinator.ejs');
    })

    app.get('/centerTask',function(req,res){
        res.render('../views/centerTask.ejs');
    })

    app.get('/currentTasking',function(req,res){
        res.render('../views/currentTasking.ejs');
    })
}

