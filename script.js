var Time = new Date(2022, 07, 31, 23, 59, 59).getTime();
var alertbutton = document.getElementById('alert')

var x = setInterval(function(){
    var currentTime = new Date().getTime()
    var distance = Time - currentTime

    var days = String(Math.floor(distance%(1000 * 60 * 60 * 24 * 31) / (1000 * 60 * 60 * 24)));
    var hours = String(Math.floor(distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))).padStart(2, '0');
    var minutes = String(Math.floor(distance % (1000 * 60 * 60)/(1000 * 60))).padStart(2, '0');
    var seconds = String(Math.floor(distance % (1000 * 60)/1000)).padStart(2, '0');

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);
