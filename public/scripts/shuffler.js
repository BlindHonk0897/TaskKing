const fs = require('fs');
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
