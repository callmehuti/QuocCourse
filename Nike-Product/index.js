const color1Ele = document.querySelector(".color-1");
const color2Ele = document.querySelector(".color-2");
const shoe1Ele = document.querySelector(".shoe-1");
const shoe2Ele = document.querySelector(".shoe-2");
const sizesSpan = document.querySelectorAll(".sizes span");
const cardTopEle = document.querySelector(".card-top");
const priceTagEle = document.querySelector(".price");

const colors = {
  blue: {
    cardTopColor: "#f1ae04",
    priceTagColor: "#1c477a",
  },
  red: {
    cardTopColor: "#c02244",
    priceTagColor: "#c02244",
  },
};

const chooseSize = (self) => {
  sizesSpan.forEach((span) => {
    span.classList.remove("choose-size");
  });
  self.classList.add("choose-size");
};

const changeColor = (color) => {
  console.log(color);
  const { cardTopColor, priceTagColor } = colors[color];
  console.log(cardTopColor, priceTagColor);
  cardTopEle.style.background = cardTopColor;
  priceTagEle.style.background = priceTagColor;

  // or can use "toggle", set flag to check current color state
  if (color === "red") {
    shoe1Ele.classList.add("color-change1");
    shoe2Ele.classList.add("color-change2");
    return;
  }
  shoe1Ele.classList.remove("color-change1");
  shoe2Ele.classList.remove("color-change2");
};
