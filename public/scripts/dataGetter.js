module.exports = function(mysql){
 var fs = require('fs');
  mysql.connect(function(err){
      // Kitchen
      mysql.query(`SELECT * FROM tblCurrentTasking where TaskName = 'Kitchen'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        console.log(result);
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Kitchen.json',data,finished);
      });
      // DishWasher
      mysql.query(`SELECT * FROM tblCurrentTasking where TaskName = 'DishWasher'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/DishWasher.json',data,finished);
      });
      // Dining
      mysql.query(`SELECT * FROM tblCurrentTasking where TaskName = 'Dining'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Dining.json',data,finished);
      });
      // Front Garden
      mysql.query(`SELECT * FROM tblCurrentTasking where TaskName = 'Front Garden'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Front Garden.json',data,finished);
      });
      // Back Garden
      mysql.query(`SELECT * FROM tblCurrentTasking where TaskName = 'Back Garden'`, function (err, result) {
        if (err) {
            console.log("Error neh")
        }
        var data = JSON.stringify(result);
        fs.writeFile('./public/scripts/records/Back Garden.json',data,finished);
      });
  })
  function finished(){
    console.log('finished.');
  }
}