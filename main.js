import { today } from "./helper.js";
import { createTable } from "./helper.js";
console.log(today);
let obiectsArray = ["ორთაჭალა", "პარკინგი", "არქის კორპუსი"];
let employeesArray = ["რუბენი სარალიძე", "დათო სარალიძე", "ფირუზი ჩიგოგიძე"];
let timeBox = document.querySelector(".time-box");
let formSelect = document.querySelector(".form-select");
let button = document.querySelector(".btn");
let leaderSelect = document.querySelector(".leader-select");
let leaderArray = ["მიშა ფხალაძე", "ზურა კენკიშვილი", "დავით კუნჭულია"];
let dateInput = document.querySelector(".form-control");
let employeeSelect = document.querySelector(".employee-select");
timeBox.innerHTML = new Date().toDateString();

for (let i = 0; i < obiectsArray.length; i++) {
  let option = document.createElement("option");
  option.innerHTML = obiectsArray[i];
  formSelect.appendChild(option);
}
for (let i = 0; i < employeesArray.length; i++) {
  let option = document.createElement("option");
  option.innerHTML = employeesArray[i];
  employeeSelect.appendChild(option);
}
for (let i = 0; i < leaderArray.length; i++) {
  let option = document.createElement("option");
  option.innerHTML = leaderArray[i];
  leaderSelect.appendChild(option);
}

button.addEventListener("click", createTable);

dateInput.setAttribute("min", today);
