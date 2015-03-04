document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault()
    var firstName =document.getElementsByName("firstName")[0].value;
    var lastName =document.getElementsByName("lastName")[0].value;
    var email=document.getElementsByName("email")[0].value;
    var message =document.getElementsByName("message")[0].value;


    console.log("The firstName is: ", firstName);
    console.log("The lastName is: ", lastName);
    console.log("The email is: ", email);
    console.log("The message is: ", message);

    console.log("But it wasn't a dream. It was a place. And you and you and you...and you were there. But you couldn't have been could you?");


});
