/*JS to display the amount of time in days (rounded to a whole number) between user 
visits to this page by the user's agent (browser). */

const visit = document.querySelector(".visits");

const lastVisit = localStorage.getItem("lastVisit");

const factor = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;

let numberOfDays = daysBetween/factor;

roundedNumber = Math.round(numberOfDays)

localStorage.setItem('lastVisit', Date.now());

visit.textContent = roundedNumber;
