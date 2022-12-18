function submit(){
    var Name=document.getElementsByClassName("name").value;
    var Email=document.getElementsByClassName("email").value;
    var Password=document.getElementsByClassName("password").value;
    var gender=document.getElementsByClassName("boy").value;
    var gender1=document.getElementsByClassName("girl").value;
    var language=document.getElementsById("lan").value;
    var amb=document.getElementsByClassName("goal").value;
    if(Name.value==""){
        alert("empty");
    }
}