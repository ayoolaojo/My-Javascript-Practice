let age = prompt("please, enter your age")

let secPerMin = 60;
let minutePerHour = 60;
let hourPerDay = 24;
let dayPerWeek = 7;
let weekPerYear= 52;

let secondsLived = secPerMin * minutePerHour * hourPerDay * dayPerWeek * weekPerYear * age;

let minutesLived = secondsLived / 60;

let hoursLived = minutesLived / 60;





alert("You have lived " +  secondsLived + " seconds")

alert("You have lived " +  minutesLived + " minutes")

alert("You have lived " +  hoursLived + " hours")



