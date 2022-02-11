document.getElementById('login-button').addEventListener('click',function(){
    //console.log('button clicked');

    const emailField = document.getElementById('user-email');
   // console.log(emailField.value);

    const passwordField = document.getElementById('user-password');
    //console.log(passwordField.value);

    if( emailField.value == 'fardilshifat199@gmail.com' && passwordField.value == 'abbuabbu')
    {
        window.location.href = 'banking.html' //new 
    }

});


//handle deposit button event;

