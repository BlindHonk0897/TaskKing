$(document).ready(function(){
   $(".preloader").hide();
   $("#download").hide();
    $shuffle = $('#shuffle');
    $myModal = $('#myModal');
    $today = new Date();
    $shuffle.click(function(){
      if($today.getDay() == 6 || $today.getDay() == 0){
          alert("It is not yet time to shuffle Tasking!");
          //$('#myModal').modal();
      }else{
        $(".preloader").show();
        $(".preloader").delay(2000);
        $(".preloader").fadeOut(function(){
            //$("#teybol").show();
            //$("#download").show();
            //$("#shuffle").disable();
            $.ajax({
              method:'POST',
              url:'/shuffle',
              data:{},
              success:function(dat){
                 console.log(dat);
                 top.location.href = "/shuffledTask";
               }
             })
        });
        
      }
    });
    // $(".preloader").hide();
    //         $("#download").hide();
    //          //$("#teybol").hide();
    //          $("#shuffle").click(function(){
    //              $(".preloader").show();
    //              $(".preloader").delay(2000);
    //              $(".preloader").fadeOut(function(){
    //                  //$("#teybol").show();
    //                  //$("#download").show();
    //                  //$("#shuffle").disable();
    //              });
                 
    //            //   $("#download").show();
    //          });
    $("#download").click(function(){
      window.print();
    });       
})