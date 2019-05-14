$(document).ready(function(){
    $login = $('#sendlogin');
    $username = $('#username');
    $password = $('#password');
    $login.click(function(){
        var credentials  = {
            username:$username.val(),
            password:$password.val()
        }
        $.ajax({
            method:'POST',
            url:'/login',
            data:credentials,
            success:function(dat){
               caller(dat);
            }
        })
    })
    function caller(message){
        if(message === 'Success'){
            top.location.href = '/currentTasking';
        }else{
            alert("Invalid Credentials! Try Again.")
            location.reload();
        }
    }
})