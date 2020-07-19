const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();



let hrPosition;
let minPosition;
let secPosition;

hrPosition = hr * 360/12 + (min * 360/60)/12;
minPosition = min * 360/60 + (sec * 360/60)/60;
secPosition = sec * 360/60;

function runTime() {

    hrPosition = hrPosition + (360/12)/60/60;
    minPosition = minPosition + (360/60)/60;
    secPosition = secPosition + (360/60);
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    console.log( 'Hour : ' + hr + ', Mintues : ' + min + ", Second :" + sec);
}
setInterval(runTime, 1000);
