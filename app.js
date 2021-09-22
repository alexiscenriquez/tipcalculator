let amount = document.querySelector("#amount");
let custom = document.querySelector("#custom");
let people = document.querySelector("#people");
let percentages = document.querySelectorAll(".percent");
let label = document.querySelectorAll("label");
let err = document.querySelector("#error");
let ta = document.querySelector("#ta");
let total = document.querySelector("#tot");
let reset = document.querySelector("#reset");
let kids = document.getElementById("percentages").children;
let tAmount;
let perc;
let numPeople;
let tAmountpp;
let bill;
let billpp;
let customp;

document.addEventListener("click", (e) => {
  if (e.target == custom||custom.type=="text"&&custom.value.length>1) {
    custom.type = "text";
    custom.style.border = "solid 1pt var(--sCyan)"
    
    custom.value = " ";
  }
 else {
    custom.type = "button";
    custom.value = "Custom";
    custom.style.border = "none"
  }

  if (e.target == amount) {
    amount.style.border = "solid 1pt var(--sCyan)"
    
  }
  else {
    amount.style.border = "none"
  }
   if (e.target == people) {
    people.style.border = "solid 1pt var(--sCyan)"
  }
  else {
    people.style.border = "none"
  }

});

amount.addEventListener("keyup", function () {
  bill = parseInt(amount.value);

  return bill;
});

for (let i = 0; i < percentages.length; i++) {
  percentages[i].addEventListener("click", () => {
    perc = parseInt(percentages[i].value);
    if (people.value !== "") {
      calculateTip();
      calculateTotal();
    }


    return perc;
  });
}

people.addEventListener("keyup", function () {
  checkPeople();
  numPeople = parseInt(people.value);
  if (numPeople !== "0") {
    calculateTip();
    calculateTotal();
  }

  if (numPeople === "0") {
    ta.textContent = "$0.00";
    total.textContent = "$0.00";
  }
});
reset.addEventListener("click", clear);

custom.addEventListener("keyup", getCustomPercentage);

function getCustomPercentage() {
  perc = custom.value;
  if (perc.includes("%")) {
    perc = perc.slice(0, -1)
  }
  return perc;
}
function checkPeople() {
  if (people.value === "0") {
    people.style.border = "solid 1pt red";
    err.style.visibility = "visible";
    ta.textContent = "$0.00";
    total.textContent = "$0.00";
    return false;
  }
  else if (people.value === "") {
    ta.textContent = "$0.00";
    total.textContent = "$0.00";
  } else {
    people.style.border = "none";
    err.style.visibility = "hidden";
    return true;
  }
}

function calculateTip() {
  tAmount = bill * (perc / 100);

  if (perc == "") {
    ta.textContent = "$0.00";
    total.textContent = "$0.00";
    return false
  }
  if (checkPeople() == true) {
    tAmountpp = tAmount / numPeople;
    tAmountpp = Math.round(parseFloat(tAmountpp) * 100) / 100;

    ta.textContent = `$${tAmountpp}`;
    return tAmountpp;
  } else return false;
}

function calculateTotal() {
  if (checkPeople() == true) {
    billpp = (bill + tAmount) / numPeople;
    billpp = Math.round(parseFloat(billpp) * 100) / 100;

    total.textContent = `$${billpp}`;
    return billpp;
  }
}
function clear() {
  amount.value = "";
  people.value = "";
  perc = "";
  ta.textContent = "$0.00";
  total.textContent = "$0.00";

  for (let i = 0; i < kids.length; i++) {
    kids[i].className = "percent";
  }
}
function toggleClass(el) {

  for (let i = 0; i < kids.length; i++) {
    kids[i].className = "percent";
  }
  el.className = "percent2";
}
