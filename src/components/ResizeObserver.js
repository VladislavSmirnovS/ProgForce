const info = document.querySelector(".cardList__infoWidth");
const cardList = document.querySelector(".cardList");
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    info.textContent = `Ширина блока: ${entry.contentRect.width}px`;
    let width = entry.contentRect.width;

    if (width > 1600) {
      cardList.style.background = "red";
    } else if (width > 1300) {
      cardList.style.background = "orange";
    } else if (width > 1000) {
      debugger;
      cardList.style.background = "yellow";
    } else if (width > 800) {
      cardList.style.background = "green";
    } else if (width > 600) {
      cardList.style.background = "blue";
    } else {
      cardList.style.background = "indigo";
    }
  }
});

export { resizeObserver };
