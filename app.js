let amount = document.querySelector("#amount");
let custom = document.querySelector("#custom");
let people = document.querySelector("#people");
let percentages = document.querySelectorAll(".percent");
let label = document.querySelectorAll("label");
let err = document.querySelector("#error");
let ta = document.querySelector("#ta");
let total = document.querySelector("#tot");
let reset = document.querySelector("#reset");
let tAmount;
let perc;
let numPeople;
let tAmountpp;
let bill;
let billpp;

document.addEventListener("click", (e) => {
  if (e.target == custom) {
    custom.type = "text";
    custom.value = " ";
  } else {
    custom.type = "button";
    custom.value = "Custom";
  }
});
//use key press to concatenate the values the user entered then parseInt
amount.addEventListener("keypress", function () {
  //  if (e.key === "Enter") {
  bill = parseInt(amount.value) * 0.01;
  // }
  return bill;
});

for (let i = 0; i < percentages.length; i++) {
  percentages[i].addEventListener("click", () => {
    perc = parseInt(percentages[i].value);
    if (percentages[i].click) {
      percentages[i].id = "percent2";
    }

    if (percentages[i].id == "percent2") percentages[i].id = "percent";
    return perc;
  });
}

people.addEventListener("keypress", function () {
  // if ((e.key === "Enter")) {
  checkPeople();
  numPeople = parseInt(people.value);
  if (numPeople !== 0) {
    calculateTip();
    calculateTotal();
  }
  //}
});
reset.addEventListener("click", () => {
  clear();
});
/*So we'll use keypress to track if the user entered a zero
rather than using the enter key bc the user may not press 
enter and expect to get a result */
function checkPeople() {
  if (people.value == "0") {
    people.style.border = "solid 1pt red";
    err.style.visibility = "visible";
    ta.textContent="Error"
    total.textContent="Error"
    return false;
  } else {
    people.style.border = "none";
    err.style.visibility = "hidden";
    return true;
  }
}

function calculateTip() {
  tAmount = bill * perc;
  if (checkPeople() == true) {
    tAmountpp = tAmount / numPeople;
    tAmountpp = Math.round(parseFloat(tAmountpp) * 100) / 100;

    ta.textContent = `$${tAmountpp}`;
    return tAmountpp;
  } else console.log("false");
}

function calculateTotal() {
  billpp = bill / numPeople + tAmount;
  billpp = Math.round(parseFloat(billpp) * 100) / 100;
  if(people.value==""){
    ta.textContent="$0.00"
    total.textContent="0.00"
  }
  total.textContent = `$${billpp}`;
  return billpp;
}

function clear() {
  amount.value = "";
  people.value = "";
  perc=""
  ta.textContent = "$0.00";
  total.textContent = "$0.00";
}
