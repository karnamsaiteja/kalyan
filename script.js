"use strict";

const containerEl = document.querySelector(`.container`);

const h1El = document.querySelector(`.color`);
const arr = [
  `0`,
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
];

const randomColorGenerator = function () {
  const randomDecimalGenerator = function () {
    let randomDecimal = arr[Math.trunc(Math.random() * 16)];
    return randomDecimal;
  };
  const randomColor = `#${randomDecimalGenerator()}${randomDecimalGenerator()}${randomDecimalGenerator()}${randomDecimalGenerator()}${randomDecimalGenerator()}${randomDecimalGenerator()}`;

  return randomColor;
};

document.addEventListener(`keydown`, function (e) {
  if (e.key === ` `) {
    const random = randomColorGenerator();
    containerEl.style.backgroundColor = random;
    h1El.textContent = `${randomColorGenerator()}`.toUpperCase();
  }
});
