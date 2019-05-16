const fs = require('fs');
const mysql = require('./mysql');

var studA = JSON.parse(fs.readFileSync('./public/scripts/records/Student A.json'));
var studB= JSON.parse(fs.readFileSync('./public/scripts/records/Student B.json'));

var Kitch = JSON.parse(fs.readFileSync('./public/scripts/records/Kitchen.json'));
var BG = JSON.parse(fs.readFileSync('./public/scripts/records/Back Garden.json'));
var Comp = JSON.parse(fs.readFileSync('./public/scripts/records/Comlab.json'));
var CY = JSON.parse(fs.readFileSync('./public/scripts/records/Courtyard & Stage.json'));
var Din = JSON.parse(fs.readFileSync('./public/scripts/records/Dining.json'));
var Dish = JSON.parse(fs.readFileSync('./public/scripts/records/DishWasher.json'));
var FG = JSON.parse(fs.readFileSync('./public/scripts/records/Front Garden.json'));
var Hall = JSON.parse(fs.readFileSync('./public/scripts/records/Hallways & Stairs.json'));
var Laun = JSON.parse(fs.readFileSync('./public/scripts/records/Laundry Area.json'));
var off = JSON.parse(fs.readFileSync('./public/scripts/records/Office.json'));
var win1 = JSON.parse(fs.readFileSync('./public/scripts/records/Window 1.json'));
var win2 = JSON.parse(fs.readFileSync('./public/scripts/records/Window 2.json'));


// Big task kitch,dinn,dish

// var filtered = items.filter(function(item) {
//     return item.id !== 123; 
//  });

var newKitch = [] , newdin = [] ,newdish = [], newBG = [] , newcomp =[] , newCourt = [];
var newOff = [] , newLaun = [] ,newHall = [], newFG= [] , newWin1 =[] , newWin2 = [];

// 10 kitch
for(var i = 0;i<10;i++){
   if(i%2==0){
     while(true){
     var ln = getRandomFromB();
     var ifExist = (checkKitch(ln) || checkDish(ln) || checkDin(ln));
     if(!ifExist){
       newKitch.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
        break;
     }
   }
   }else{
       while(true){
       var ln = getRandomFromA();
       var ifExist = (checkKitch(ln) || checkDish(ln) || checkDin(ln));
       if(!ifExist){
           var studA = studA.filter(function(item) {
               return item.StudentLastname !== ln; 
            });
         newKitch.push(ln);
         break;
       }
   }
   }
}
console.log("Kitchen")
console.log(newKitch);
console.log(studA.length);
console.log(studB.length);
// dining 10
for(var i = 0;i<8;i++){
   if(i%2==0){
     while(true){
     var ln = getRandomFromA();
     var ifExist = (checkKitch(ln) || checkDish(ln) || checkDin(ln));
     if(!ifExist){
       newdin.push(ln);
       var studA = studA.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
        break;
     }
   }
   }else{
       while(true){
       var ln = getRandomFromB();
       var ifExist = (checkKitch(ln) || checkDish(ln) || checkDin(ln));
       if(!ifExist){
           var studB = studB.filter(function(item) {
               return item.StudentLastname !== ln; 
            });
         newdin.push(ln);
         break;
       }
    }
   }
}
console.log("Dining")
console.log(newdin);
console.log(studA.length);
console.log(studB.length);

// Dishwasher
for(var i = 0;i<10;i++){
   if(i%2==0){
     while(true){
     var ln = getRandomFromB();
     var ifExist = (checkKitch(ln) || checkDish(ln) || checkDin(ln));
     if(!ifExist){
       newdish.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
        break;
     }
   }
   }else{
       while(true){
       var ln = getRandomFromA();
       var ifExist = (checkKitch(ln) || checkDish(ln) || checkDin(ln));
       if(!ifExist){
           var studA = studA.filter(function(item) {
               return item.StudentLastname !== ln; 
            });
         newdish.push(ln);
         break;
       }
    }
   }
}
console.log("Dishwasher")
console.log(newdish);
console.log(studA.length);
console.log(studB.length);

// Back Garden 4
for(var i = 0;i<4;i++){
   if(i%2==0){
       var ln = getRandomFromA();
       newBG.push(ln);
       var studA = studA.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }else{
       var ln = getRandomFromB();
       newBG.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }
}
console.log("Back Garden")
console.log(newBG);
console.log(studA.length);
console.log(studB.length);

// complab
for(var i = 0;i<3;i++){
   if(i%2==0){
       var ln = getRandomFromB();
       newcomp.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }else{
       var ln = getRandomFromA();
       newcomp.push(ln);
       var studA = studA.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }
}
console.log("Complab")
console.log(newcomp);
console.log(studA.length);
console.log(studB.length);

// office
var ln = getRandomFromA();
newOff.push(ln);
var studA = studA.filter(function(item) {
   return item.StudentLastname !== ln; 
});
console.log("Office")
console.log(newOff);
console.log(studA.length);
console.log(studB.length);

// courtyard
for(var i = 0;i<6;i++){
   if(i%2==0){
       var ln = getRandomFromB();
       newCourt.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }else{
       var ln = getRandomFromA();
       newCourt.push(ln);
       var studA = studA.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }
}
console.log("Courtyard")
console.log(newCourt);
console.log(studA.length);
console.log(studB.length);

// front Garden
for(var i = 0;i<4;i++){
   if(i%2==0){
       var ln = getRandomFromA();
       newFG.push(ln);
       var studA = studA.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }else{
       var ln = getRandomFromB();
       newFG.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }
}
console.log("Front Garden")
console.log(newFG);
console.log(studA.length);
console.log(studB.length);

// Hallway
for(var i = 0;i<6;i++){
   if(i%2==0){
       var ln = getRandomFromB();
       newHall.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }else{
       var ln = getRandomFromA();
       newHall.push(ln);
       var studA = studA.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }
}
console.log("HAllway")
console.log(newHall);
console.log(studA.length);
console.log(studB.length);

//Laundry
for(var i = 0;i<2;i++){
   if(i%2==0){
       var ln = getRandomFromA();
       newLaun.push(ln);
       var studA = studA.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }else{
       var ln = getRandomFromB();
       newLaun.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }
}
console.log("Laundry")
console.log(newLaun);
console.log(studA.length);
console.log(studB.length);
// Window 1
for(var i = 0;i<2;i++){
   if(i%2==0){
       var ln = getRandomFromB();
       newWin1.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }else{
       var ln = getRandomFromA();
       newWin1.push(ln);
       var studA = studA.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }
}
console.log("Window 1")
console.log(newWin1);
console.log(studA.length);
console.log(studB.length);

// Window 2
for(var i = 0;i<2;i++){
   if(i%2==0){
       var ln = getRandomFromA();
       newWin2.push(ln);
       var studA = studA.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }else{
       var ln = getRandomFromB();
       newWin2.push(ln);
       var studB = studB.filter(function(item) {
           return item.StudentLastname !== ln; 
        });
   }
}
console.log("Window 2")
console.log(newWin2);
console.log(studA.length);
console.log(studB.length);

var Coordinator = getRandomCoordinator(newKitch);
newKitch.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("Kitchen with Coordinator")
console.log(newKitch);

Coordinator = getRandomCoordinator(newdin);
newdin.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newDining with Coordinator")
console.log(newdin);

Coordinator = getRandomCoordinator(newdish);
newdish.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newDish with Coordinator")
console.log(newdish);

Coordinator = getRandomCoordinator(newBG);
newBG.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newBG with Coordinator")
console.log(newBG);

Coordinator = getRandomCoordinator(newCourt);
newCourt.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newCourt with Coordinator")
console.log(newCourt);

Coordinator = getRandomCoordinator(newFG);
newFG.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newFG with Coordinator")
console.log(newFG);

Coordinator = getRandomCoordinator(newHall);
newHall.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("NewHall with Coordinator")
console.log(newHall);

Coordinator = getRandomCoordinator(newLaun);
newLaun.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newLAun with Coordinator")
console.log(newLaun);

Coordinator = getRandomCoordinator(newOff);
newOff.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newOff with Coordinator")
console.log(newOff);

Coordinator = getRandomCoordinator(newWin1);
newWin1.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newWin1 with Coordinator")
console.log(newWin1);

Coordinator = getRandomCoordinator(newWin2);
newWin2.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newWin2 with Coordinator")
console.log(newWin2);

Coordinator = getRandomCoordinator(newcomp);
newcomp.sort(function(x,y){ return x == Coordinator ? -1 : y == Coordinator ? 1 : 0; });
console.log("newComp with Coordinator")
console.log(newcomp);

// mysql.connect(function(err){
  
//    // mysql.query(`SELECT * FROM tblEducator where Username = '${req.body.username}' and Password = '${req.body.password}'`, function (err, result) {
//    //     if (err) throw err;
//    //     if(result.length > 0){
//    //         res.send("Success")
//    //     }else{
//    //         res.send("Failed")
//    //     }
//    // });
// })

// moving to front
//var first = "role";
//data.sort(function(x,y){ return x == first ? -1 : y == first ? 1 : 0; });

function getRandomCoordinator(Task){
    return Task[Math.floor(Math.random()*Task.length)];
}

function getRandomFromA(){
   return studA[Math.floor(Math.random()*studA.length)].StudentLastname;
}

function getRandomFromB(){
   return studB[Math.floor(Math.random()*studB.length)].StudentLastname;
}

// Kicthen
function checkKitch(Lastname){
   if (Kitch.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Back Garden
function checkBG(Lastname){
   if (BG.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Comlab
function checkComp(Lastname){
   if (Comp.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Courtyard
function checkCY(Lastname){
   if (CY.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Dining
function checkDin(Lastname){
   if (Din.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Dishwasher
function checkDish(Lastname){
   if (Dish.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Front Garden
function checkFG(Lastname){
   if (FG.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Hallway
function checkHall(Lastname){
   if (Hall.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Laundry
function checkLaun(Lastname){
   if (Laun.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Office
function checkOff(Lastname){
   if (off.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Window 1
function checkWin1(Lastname){
   if (win1.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}
// Window 2
function checkWin2(Lastname){
   if (win2.some(e => e.LastName === `${Lastname}`)) {
       return true;
   }else{
      return false;
   }
}


