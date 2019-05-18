$(document).ready(function(){
  $('.preloader').hide();
  $shuffle = $('#shuffle');
  $studentsKitch = $('#studentsKitch');
  $studentsDish = $('#studentsDish');
  $studentsDin = $('#studentsDin');

  $shuffle.click(function(){
      // alert($studentsKitch.val());
      $today = new Date();
    if($today.getDay() != 6 && $today.getDay() != 0){
        alert("It is not yet time to shuffle Tasking!");
        //$('#myModal').modal();
    }else{
      if($studentsKitch.val() !="EX" && $studentsDish.val() != "EX" && $studentsDin.val()!= "EX"){
          var myArray = [];
          myArray.push($studentsKitch.val());
          myArray.push($studentsDish.val());
          myArray.push($studentsDin.val());
          if(checkIfArrayIsUnique(myArray)){
            $(".preloader").show();
            $("#teybol").hide();
            $shuffle.hide();
            $(".preloader").delay(2000);
            $(".preloader").fadeOut(function(){
              var coordinators = {
                  Kitchen:$studentsKitch.val(),
                  Dishwasher:$studentsDish.val(),
                  Dining:$studentsDin.val()
              }
              $.ajax({
                method:'POST',
                url:'/shuffleWithConsequence',
                data:coordinators,
                success:function(dat){
                  console.log(dat);
                  top.location.href = "/shuffledTask";
                }
              })
          });
            
          }else{
            alert("Please don't choose the same student!");
          }
      }else{
        alert("Please provide Coordinator for the ff. Task:\n  Kitchen\n  Dishwasher\n  Dining");
      }
    }
  })

  function checkIfArrayIsUnique(myArray) {
    return myArray.length === new Set(myArray).size;
  }
});