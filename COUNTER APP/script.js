
const decrementBtn = document.getElementById("decButton");
const incrementBtn = document.getElementById("incButton");
const valueDis = document.getElementById("value");
const resetBtn =document.getElementById('resetButton');
// for decrement button click
decButton.addEventListener("click", () => {
  const value = Number(valueDis.innerText);
  if (value > 0) {
    valueDis.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// for increment button click
incButton.addEventListener("click", () => {
  const value = Number(valueDis.innerText);
  valueDis.innerText = value +1;

});

resetBtn.addEventListener('click', () => {
  valueDis.innerText =0;
})