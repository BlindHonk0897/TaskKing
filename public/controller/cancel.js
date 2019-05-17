$(document).ready(function(){
    $Cancel = $('#cancel');
    $Cancel.click(function(){
        $.ajax({
            method:'POST',
            url:'/cancel',
            data:{},
            success:function(dat){
               console.log(dat);
               top.location.href = "/currentTasking";
             }
           })
    })
})