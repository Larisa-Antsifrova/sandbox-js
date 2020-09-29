//Taking values from DOM inputs

const baseInputRef = document.querySelector(".base");
const exponentInputRef = document.querySelector(".exponent");

const buttonRef = document.querySelector(".button");

buttonRef.addEventListener("click", () => {
  const base = Number(baseInputRef.value);
  const exponent = Number(exponentInputRef.value);

  console.log(base);
  console.log(exponent);

  const result = Math.pow(base, exponent);

  console.log(result);
});

// Incorporating previous experiment into homework

const amountInputRef = document.querySelector(".amount");
const orderButtonRef = document.querySelector(".order-button");

orderButtonRef.addEventListener("click", () => {
  const total = 100;
  let amount = amountInputRef.value;

  const messageDenied = "На складе недостаточно твоаров!";
  const messageSuccess = "Заказ оформлен, с вами свяжется менеджер";

  if (amount > total) {
    console.log(messageDenied);
  } else {
    console.log(messageSuccess);
  }
});
