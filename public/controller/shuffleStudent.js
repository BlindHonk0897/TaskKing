$(document).ready(function(){
    $shuffle = $('#shuffle');
    $myModal = $('#myModal');
    $today = new Date();
    $shuffle.click(function(){
      if($today.getDay() != 6 || $today.getDay() != 0){
          alert("It is not yet time to shuffle Tasking!");
          //$('#myModal').modal();
      }else{
         
      }
    });
})