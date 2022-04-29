"use strict";

///////////////////////////////////////////////////////////////////////
////////////////////////////////////INTIALIZE VARIABLES///////////////
//////////////////////////////////////////////////////////////////////

let Announcement_1 = document.querySelector("#Announcement-1");
let Announcement_2 = document.querySelector("#Announcement-2");
let Announcement_3 = document.querySelector("#Announcement-3");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////GET DATA FROM DATABASE AND PRINT ON THE P sections///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
QUERY THE DATA FROM THE PHP File hosted on boox-mart.com with url https://boox-mart.com/MobileAppFiles/getAnnouncements.php
This PHP File Queries all the data and returns the most recent first
This File returns the announcements from the it is MATH time DB as JSON in the format

  {
    "0": "91",
    "ANNOUNCEMENT_ID": "91",
    "1": "M\n",
    "ANNOUNCEMENT_TEXT": "M\n",
    "2": "29 April 2022",
    "ANNOUNCEMENT_DATE": "29 April 2022",
    "3": "09:31: AM",
    "ANNOUNCEMENT_TIME": "09:31: AM"
  },
  {
    "0": "79",
    "ANNOUNCEMENT_ID": "79",
    "1": "Hello, expect the next update next friday\n4 March with, fixed bugs and notifications features for both Chat Support and Announcements\n",
    "ANNOUNCEMENT_TEXT": "Hello, expect the next update next friday\n4 March with, fixed bugs and notifications features for both Chat Support and Announcements\n",
    "2": "22 February 2022",
    "ANNOUNCEMENT_DATE": "22 February 2022",
    "3": "04:51: AM",
    "ANNOUNCEMENT_TIME": "04:51: AM"
  }


  USE AJAX (ASYNCHRONOUS JAVASCRIPT TO GET DATA FROM SERVER AND PRINT ON THE P)

 */

/*Set up AJAX Connection
 DOCS (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)*/
let Connection = new XMLHttpRequest();
Connection.open("GET", "https://boox-mart.com/MobileAppFiles/getAnnouncements.php", true)
Connection.send();

Connection.onload = function (){

     let AnnouncementsArray = JSON.parse(Connection.responseText);
     
     /* get the first 3 results from the array which are also the most recent 3
     This is because the data in the JSON format is retrieved with the most recent announcements firs
     We want to have the 3 most recent announcements
      */
    
    //Loop through the array 3 times to get the 3 most recent
    
        

    Announcement_1.innerHTML = AnnouncementsArray[0]["ANNOUNCEMENT_TEXT"];
    Announcement_2.innerHTML = AnnouncementsArray[1]["ANNOUNCEMENT_TEXT"];
    Announcement_3.innerHTML = AnnouncementsArray[2]["ANNOUNCEMENT_TEXT"];
        
    
     
     


}


