function register(){
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const phno = document.getElementById('phonenumber').value
    const category = document.getElementById('domain').value
    const collegename = document.getElementById('college').value
    const email = document.getElementById('emailcreate').value
    const password = document.getElementById('passwordcreate').value
    const confirm_password = document.getElementById('confirm_password').value
    if(name=="" || age=="" ||phno=="" ||category=="" ||collegename=="" ||email=="" ||password=="" ||confirm_password==""){
        alert("Please Fill all the required fields")
        return false;
    }
    if (password!=confirm_password){
        alert("Passwords do not match")
        return false;
    }

    else{
        alert("Succesfully Registered!")
        document.location.href="/index.html";
        return true;
    }
}


function login(){
    const emaillogin = document.getElementById('emaillogin').value
    const passwordlogin = document.getElementById('passwordlogin').value
    
    if(passwordlogin==""||emaillogin==""){
        alert("Please enter both email and password")
        return false;
    }
    if(emaillogin=="m.tarun13122004@gmail.com" && passwordlogin=="tarun@1234"){
        alert("Succesfully logged In!")
        document.location.href="/index.html";
        return true;
    }
    else{
        if((emaillogin!="m.tarun13122004@gmail.com" && passwordlogin!="tarun@1234")||emaillogin!="m.tarun13122004@gmail.com"){
            alert("Please Enter the correct Credentials!")
            return false;
        }
        else if(passwordlogin!="tarun@1234"){
            alert("Please Enter the correct password")
            return false;
        }
    }


}

function regis(){
    $(function() {
        $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function(e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
    });
}

