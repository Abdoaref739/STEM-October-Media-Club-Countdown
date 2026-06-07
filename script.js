var daysCountdown = document.getElementById("days-countdown");
var hoursCountdown = document.getElementById("hours-countdown");
var minutesCountdown = document.getElementById("minutes-countdown");
var secondsCountdown = document.getElementById("seconds-countdown");
var clockLine = document.getElementById("clock-line");
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
clockLine.style.rotate += `5deg`;
if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
    console.log("Ended!")
    clearInterval();
}
}, 1000);