function check(){
    var mail=document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!mail.match(mailformat)){
        document.getElementById('errorMail').innerHTML="Please provide valid email address";
    }
}
