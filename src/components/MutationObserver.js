const header = document.querySelector(".header");

const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    header.style.background =
      header.style.background === "yellow" ? "orange" : "yellow";
  }
};

const mutationHeader = new MutationObserver(callback);

export { mutationHeader };