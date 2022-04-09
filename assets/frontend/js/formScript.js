"use strict";

//INITIALIZE VARIABLES
let send_btn = document.getElementById("send");

let name_input = document.getElementById("name");
let email_input = document.getElementById("email");
let message_input = document.getElementById("message");

let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let message_error = document.getElementById("message_error");

/////////////////FORM results elements
let loader = document.getElementById("loader_img");
let success = document.getElementById("success");
let failed = document.getElementById("failed");


send_btn.addEventListener("click", function (e){
    e.preventDefault();

    //Extract text values from the the input boxes
    let name = name_input.value;
    let email = email_input.value;
    let message = message_input.value;

    //trim the variables to remove excess space
    name = name.trim();
    email = email.trim();
    message = message.trim();

    if (name === ""){
        //log message into console
        console.log("name is empty");
        //Show the error message
        name_error.classList.remove("hidden");

        return;
    }else{
        name_error.classList.add("hidden");
    }

    if (email === ""){
        //log message into console
        console.log("email is empty");
        //Show the error message
        email_error.classList.remove("hidden");

        return;
    }else{
        email_error.classList.add("hidden");
    }

    if (message === ""){
        //log message into console
        console.log("message is empty");
        //Show the error message
        message_error.classList.remove("hidden");

        return;
    }else{
        message_error.classList.add("hidden");
    }



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////SEND MESSAGE TO ADMIN///////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let message_request = new XMLHttpRequest();
     message_request.open("GET", "../../assets/frontend/sendEmail.php?NAME="+name+"&EMAIL="+email+"&MESSAGE="+message, true);
     message_request.send();

    //hide send button and show loader
    send_btn.classList.add("hidden");
    loader.classList.remove("hidden");

     message_request.onload = function (){
         loader.classList.add("hidden");

         //if the response text is sent hide everything and show success message
         if (message_request.responseText === "sent"){

             //hide everything and show success message (send button is still hidden)
             failed.classList.add("hidden");
             send_btn.classList.add("hidden");

             success.classList.remove("hidden");

         }else {
             //////////////////Hide everything
             success.classList.add("hidden");

             //show button and hide everything but show failed icon
             send_btn.classList.remove("hidden");
             failed.classList.remove("hidden");

         }

         console.log(message_request.responseText);

     }





})
