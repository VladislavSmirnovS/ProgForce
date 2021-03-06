import "./index.css";
import { Card } from "./components/CustomElement.js";
import {
  infintyScroll,
  addNewCards,
} from "./components/IntersactionObserver.js";
import { mutationHeader } from "./components/MutationObserver.js";
import { EventObserver } from "./components/OberverWithProxy.js";
import { resizeObserver } from "./components/ResizeObserver.js";

const cardList = document.querySelector(".cardList");
const checkboxInfinity = document.querySelector(".config__checkInfinity");
const mutation_plus = document.querySelector(".mutation_plus");
const mutation_minus = document.querySelector(".mutation_minus");
const proxyValue = document.querySelector(".config__proxyValue");
const slider = document.querySelector(".config__resizeValue");
const checkboxResize = document.querySelector(".config__checkResize");
const proxyForm = document.querySelector(".proxy__form");
const counter = document.querySelector(".config__counterValue ");
const value = document.querySelector(".proxy__value");

customElements.define("card-custom", Card);

// Infinity Scroll
addNewCards();

checkboxInfinity.addEventListener("change", () => {
  if (checkboxInfinity.checked) {
    const lastCard = document.querySelector(".card:last-child");
    infintyScroll.observe(lastCard);
  } else {
    const lastCard = document.querySelector(".card:last-child");
    infintyScroll.unobserve(lastCard);
  }
});

// Mutation Observer
let count = 0;

function countPlus(e) {
  e.preventDefault();
  counter.textContent = ++count;
}

mutation_plus.addEventListener("click", countPlus);

function countMinus(e) {
  e.preventDefault();
  counter.textContent = --count;
}

mutation_minus.addEventListener("click", countMinus);

mutationHeader.observe(counter, {
  childList: true,
});

// Observer with Proxy
let store = {
  counter: 0,
};

const observer = new EventObserver(store);
observer.subscribe((store) => (value.innerHTML = store));

proxyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  observer.proxyCount.counter = proxyValue.value;
  observer.broadcast(observer.proxyCount.counter);
});

// Resize Observer
slider.addEventListener("input", () => {
  cardList.style.width = slider.value + "px";
});

resizeObserver.observe(cardList);

checkboxResize.addEventListener("change", () => {
  if (checkboxResize.checked) {
    resizeObserver.observe(cardList);
  } else {
    resizeObserver.unobserve(cardList);
  }
});
