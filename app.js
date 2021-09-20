let amount = document.querySelector("#amount");
let custom = document.querySelector("#custom");
let people = document.querySelector("#people");
let percentages = document.querySelectorAll(".percent");
let tAmount;
let perc;
let numPeople
let tAmountpp
document.addEventListener("click", (e) => {
  if (e.target == custom) {
    custom.type = "text";
    custom.value = " ";
  } else {
    custom.type = "button";
    custom.value = "Custom";
  }
});

//percentages.addEventListener("click",calculateTip)
function calculateTip(){
for (let i = 0; i < percentages.length; i++) {
  percentages[i].addEventListener("click", () => {
    perc = percentages[i];
    tAmount = parseInt(perc.value) * 0.01 * parseInt(amount.value);
  });
}

tAmountpp = eval(tAmount / people.value);
return tAmount}
calculateTip()
if(people.value=""){
  people.style.borderColor="red"

}

