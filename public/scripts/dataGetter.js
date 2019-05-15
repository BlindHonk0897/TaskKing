module.exports = function(mysql){
 var fs = require('fs');
  mysql.connect(function(err){
      // Kitchen
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Kitchen'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        console.log(result);
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Kitchen.json',data,finished);
      });
      // DishWasher
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'DishWashing'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/DishWasher.json',data,finished);
      });
      // Dining
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Dining'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Dining.json',data,finished);
      });
      // Front Garden
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Front Garden'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Front Garden.json',data,finished);
      });
      // Back Garden
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Back Garden'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Back Garden.json',data,finished);
      });
      // Window 1
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Window 1'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Window 1.json',data,finished);
      });
      // Window 2
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Window 2'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Window 2.json',data,finished);
      });
      // Courtyard & Stage
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Courtyard & Stage'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Courtyard & Stage.json',data,finished);
      });
       // Hallways & Stairs
       mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Hallways & Stairs'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Hallways & Stairs.json',data,finished);
      });
      // Office
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Office'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Office.json',data,finished);
      });
      // Laundry Area
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Laundry Area'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Laundry Area.json',data,finished);
      });
      // Comlab
      mysql.query(`SELECT LastName FROM tblCurrentTasking where TaskName = 'Comlab'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Comlab.json',data,finished);
      });
  })
  function finished(){
    console.log('finished.');
  }
}