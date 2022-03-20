/*JS to display the amount of time in days (rounded to a whole number) between user 
visits to this page by the user's agent (browser). */

localStorage.setItem('lastVisit', Date.now());

const lastVisit = localStorage.getItem("lastVisit");

const visit = document.querySelector(".visits");

const FACTOR = 1000 * 60 * 60 * 24;

const daysBetween = Date.now() - lastVisit;

const numberOfDays = daysBetween/FACTOR;

roundedNumber = Math.round(numberOfDays)

visit.textContent = roundedNumber;
