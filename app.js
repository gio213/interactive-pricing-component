const slide = document.querySelector('input[type="range"]');
let money = document.querySelector(".moneyMonth h3");
const pageViews = document.querySelector(".middleDiv p");
const toggle = document.querySelector('input[type="checkbox"]');

let values = [0, 8, 12, 16, 24, 36];
let pageViewers = [0, 10, 50, 100, 500, 1000, 1];
let amount = Number(16);
let earlyBilling;

const rangeChange = slide.addEventListener("input", function () {
  const slideValue = parseInt(slide.value);
  amount = `${values[slideValue]}`;
  money.textContent = `$${amount}`;
  if (amount === "36") {
    pageViewers[5] = "1M";
    pageViews.textContent = `${pageViewers[5]} pageviews`;
  } else {
    pageViews.textContent = `${pageViewers[slideValue]}K pageviews`;
  }
  if (amount === "0") {
    toggle.disabled = true;
  } else {
    toggle.disabled = false;
  }

  if (toggle.checked) {
    earlyBilling = amount * 12 - 0.25 * amount * 12;
    money.textContent = `$${earlyBilling}`;
  } else {
    money.textContent = `$${amount}`;
  }
});

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    earlyBilling = amount * 12 - 0.25 * amount * 12;
    money.textContent = `$${earlyBilling}`;
  } else {
    money.textContent = `$${amount}`;
  }
});

const slideColorChange = (slide.oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #A4F3EB 0%, #ECF0FB " +
    value +
    "%, #fff " +
    value +
    "%, white 100%)";
});
