$(document).ready(function(){
  $shuffle = $('#shuffle');
  $studentsKitch = $('#studentsKitch');
  $studentsDish = $('#studentsDish');
  $studentsDin = $('#studentsDin');

  $shuffle.click(function(){
      alert($studentsKitch.val());
      if($today.getDay() != 6 || $today.getDay() != 0){
        alert("It is not yet time to shuffle Tasking!");
        //$('#myModal').modal();
    }else{
      $.ajax({
        method:'POST',
        url:'/shuffleWithConsequence',
        data:{},
        success:function(dat){
           console.log(dat);
           //top.location.href = "/shuffledTask";
         }
       })
    }
  })
});