const template = document.querySelector(".template")

class Card extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <h3> Блок </h3>
      <p> При клике ухожу в сумрак </p>
    `;
    this.addEventListener("click", () => {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(template.content.cloneNode(true)); 
      this.shadowRoot.getElementById("message").innerHTML =
        "Привет из Shadow Dom!";
    });
    
  }
}

export { Card };
