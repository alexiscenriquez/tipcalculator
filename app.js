let amount = document.querySelector("#amount");
let custom = document.querySelector("#custom");
let people = document.querySelector("#people");
let percentages = document.querySelectorAll(".percent");
let label = document.querySelectorAll("label");
let err = document.querySelector("#error");
let ta=document.querySelector("#ta")
let total=document.querySelector("#tot")
let tAmount;
let perc;
let numPeople;
let tAmountpp;
let bill;

document.addEventListener("click", (e) => {
  if (e.target == custom) {
    custom.type = "text";
    custom.value = " ";
  } else {
    custom.type = "button";
    custom.value = "Custom";
  }
});

amount.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    bill = parseInt(amount.value) * 0.01;
  }
  return bill;
});

for (let i = 0; i < percentages.length; i++) {
  percentages[i].addEventListener("click", () => {
    perc = parseInt(percentages[i].value);
    return perc;
  });
}

people.addEventListener("keypress", function (e) {
  if ((e.key === "Enter")) {
    checkPeople();
    numPeople=parseInt(people.value)
    calculateTip();
  }
});

function checkPeople() {
  if (people.value == "" || people.value == "0") {
    people.style.border = "solid 1pt red";
    err.style.visibility = "visible";
    return false;
  } else {
    people.style.border = "none";
    err.style.visibility = "hidden";
    return true;
  }
}

function calculateTip() {
  tAmount = bill * perc;
  if(checkPeople()==true){
    tAmountpp=tAmount/numPeople
    ta.textContent=tAmountpp
    return tAmountpp
  }
  else console.log("false")
}
