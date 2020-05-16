const fname=document.getElementById("first_name");
const lname=document.getElementById("last_name");
const mail=document.getElementById("mail");
const password=document.getElementById("password");



function check(){
    if(fname.value.length<1){    
        document.getElementById("first_name").style.border="2px solid hsl(0, 100%, 74%)";
        document.getElementById('error_fname').innerHTML="First Name cannot be empty";
    } 
    if( lname.value.length<1){
        document.getElementById("last_name").style.border="2px solid hsl(0, 100%, 74%)";
        document.getElementById('error_lname').innerHTML="Last Name cannot be empty";}
    if(mail.value.length<1){
        var reg= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(mail.value)){

            document.getElementById("mail").style.border="2px solid hsl(0, 100%, 74%)";
            document.getElementById("mail").style.color="hsl(0, 100%, 74%)";
            mail.value+="email@example/com";
            document.getElementById('error_mail').innerHTML="Look Like this is not an email";
        }
    }
    if(password.value.length<1){
        document.getElementById("password").style.border="2px solid hsl(0, 100%, 74%)";
        document.getElementById('error_pass').innerHTML="Password cannot be empty";
    }
    
}