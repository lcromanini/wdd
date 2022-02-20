const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

/*** Programming Notes **************************************
     Arrow Functions - es6 syntactically compact alternative to a regular function expression
     see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
     or https://www.w3schools.com/js/js_arrow_function.asp
   
     classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
     */

const datefieldUK = document.getElementById("date-time"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

var date = new Date();
var year = date.getUTCFullYear();
document.querySelector("#copyrightyear").innerHTML = year;



document.querySelector(
  "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
