let obiectsArray = ["ორთაჭალა", "პარკინგი", "არქის კორპუსი"];
let employeesArray = ["რუბენი სარალიძე", "დათო სარალიძე", "ფირუზი ჩიგოგიძე"];
let timeBox = document.querySelector(".time-box");
let formSelect = document.querySelector(".form-select");
let result = [];
let button = document.querySelector(".btn");

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

button.addEventListener("click", function () {
  let formSelectValue = formSelect.value;
  let employeeSelectValue = employeeSelect.value;
  let input = document.querySelector(".form-control");
  let inputValue = input.value;

  let resultValue = `${formSelectValue} ${employeeSelectValue} ${inputValue}`;
  result.push(resultValue);
  console.log(result);
});
