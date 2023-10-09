export var today = new Date();

var dd = today.getDate() - 1;
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;

let leaderSelect = document.querySelector(".leader-select");
let formSelect = document.querySelector(".form-select");
let employeeSelect = document.querySelector(".employee-select");
let result = [];

export function createTable() {
  let resultBox = document.querySelector(".result-box");
  let leaderSelectValue = leaderSelect.value;
  let formSelectValue = formSelect.value;
  let employeeSelectValue = employeeSelect.value;
  let input = document.querySelector(".form-control");
  let inputValue = input.value;
  let numbinput = document.querySelector(".numbinput");
  let numbinputValue = numbinput.value;
  let resultValue = `${leaderSelectValue} ${formSelectValue} ${employeeSelectValue} ${inputValue} ${numbinputValue}`;
  result.push(resultValue);
  console.log(result);
  let table = document.createElement("table");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "შევსების თარიღი";
  let th2 = document.createElement("th");
  th2.innerHTML = "სამუშაო ადგილი";
  let th3 = document.createElement("th");
  th3.innerHTML = "მენეჯერი";
  let th4 = document.createElement("th");
  th4.innerHTML = "თანამშრომელი";
  let th5 = document.createElement("th");
  th5.innerHTML = "თარიღი";
  let th6 = document.createElement("th");
  th6.innerHTML = "ზედ. საათი";
  tr.appendChild(th);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
  tr.appendChild(th6);
  table.appendChild(tr);

  for (let i = 0; i < 1; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = today;
    let td2 = document.createElement("td");
    td2.innerHTML = formSelectValue;
    let td3 = document.createElement("td");
    td3.innerHTML = leaderSelectValue;
    let td4 = document.createElement("td");
    td4.innerHTML = employeeSelectValue;
    let td5 = document.createElement("td");
    td5.innerHTML = inputValue;
    let td6 = document.createElement("td");
    td6.innerHTML = numbinputValue;
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    table.appendChild(tr);
  }

  resultBox.appendChild(table);
}
