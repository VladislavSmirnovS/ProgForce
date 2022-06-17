class Card extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <h3> Блок </h3>
      <p> При клике ухожу в сумрак </p>
    `;
    this.addEventListener("click", () => {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
      <style>
        p {
          font-weight: bold;
        }
      </style>
      <p>Привет из Shadow Dom!</p>
    `;
    });
  }
}

export { Card };
