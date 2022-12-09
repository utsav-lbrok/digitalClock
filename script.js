/*
we have 4 things in htms as id=""
hour, minute, seconds , ampm
we can return an element with an id get element by id method 

*/
const hoursE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

// function to get the data from the computer 

function updateClock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    // simple logic for ampm 
    let ampm = "AM";
    if (hour > 12) {
        hour = hour - 12;
        // 13 = 13-12 -> 1
        ampm = "PM";
    }
    // to have double digits 
    
    if(hour<10){
        hour ="0"+hour; 
    }
    if(minute<10){
        minute ="0"+minute; 
    }
    if(second<10){
        second ="0"+second;  
    }

    // innner text method to set the text in ids 
    hoursE1.innerText = hour;
    minutesE1.innerText = minute;
    secondsE1.innerText = second;
    ampmE1, (innerText = ampm);

    //setime out method to change the function 
    // first paramter is function to change the time 
    // second parameter is for  time in mili second 
    setTimeout(() => {
        updateClock();
    }, 1000)

}

updateClock();


console.log("aali aali aaio hai ta ");
