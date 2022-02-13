let temp = parseFloat(document.querySelector(".temperature").innerHTML);
let speed = parseFloat(document.querySelector(".wind_speed").innerHTML);
let chillFactor = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * temp * Math.pow(speed,0.16));
if (temp <= 50.0 && speed > 3.0) {
    document.querySelector(".wind_chill").innerHTML = Math.ceil(chillFactor);
}
else {
    document.querySelector(".wind_chill").innerHTML = "N/A";
}
