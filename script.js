var daysCountdown = document.getElementById("days-countdown");
var hoursCountdown = document.getElementById("hours-countdown");
var minutesCountdown = document.getElementById("minutes-countdown");
var secondsCountdown = document.getElementById("seconds-countdown");
var clockLine = document.getElementById("clock-line");
let rotation = 0;
setInterval(() => {
countDownTime = new Date("Jun 11, 2026 23:59:59").getTime();
currentDate = new Date().getTime();
dateDiff = countDownTime - currentDate;
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
daysCountdown.innerHTML = days;
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
hoursCountdown.innerHTML = hours;
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
minutesCountdown.innerHTML = minutes;
let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));
secondsCountdown.innerHTML = seconds;
rotation += 6;
clockLine.style.rotate = rotation + "deg";
if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
    console.log("Ended!")
    clearInterval();
}
}, 1000);
let RSVPbtn = document.getElementById("rsvp-btn");
RSVPbtn.onclick = function(){
    window.location.href = "https://forms.gle/8pmF5mu5XPDpx7KX7";
}