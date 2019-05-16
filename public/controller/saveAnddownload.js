$(document).ready(function(){
    $SaveAndDownload = $('#savedownload');
    $SaveAndDownload.click(function(){
          $.ajax({
            method:'POST',
            url:'/saveAndDownload',
            data:{},
            success:function(dat){
               console.log(dat);
               top.location.href = "/currentTasking";
             }
           })
      });
})