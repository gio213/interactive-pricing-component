const slide = document.querySelector('input[type="range"]');
let money = document.querySelector(".moneyMonth h3");
console.log(typeof money.textContent);
const pageViews = document.querySelector(".middleDiv p");
console.log(pageViews.textContent);
const toggle = document.querySelector('input[type="checkbox"]');

let values = [0, 8, 12, 16, 24, 36];
let pageViewers = [0, 10, 50, 100, 500, 1000, 1];
let amount = Number(0);
let earlyBilling;

const rangeChange = slide.addEventListener("input", function () {
  const slideValue = parseInt(slide.value);
  console.log(slideValue);
  amount = `${values[slideValue]}`;
  console.log(amount);
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
});

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    console.log(amount * 12 - 0.25 * amount * 12);
    earlyBilling = amount * 12 - 0.25 * amount * 12;
    money.textContent = `$${earlyBilling}`;
  } else {
    money.textContent = `$${amount}`;
    console.log("off");
  }
});
