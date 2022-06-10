const templateCard = document.querySelector(".template__card");
const cardList = document.querySelector(".cardList");

const infintyScroll = new IntersectionObserver(
  ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      addNewCards();
    }
  },
  { threshold: 1 }
);

const addNewCards = () => {
  cardList.append(templateCard.content.cloneNode(true));
  const lastCard = document.querySelector(".card:last-child");
  infintyScroll.observe(lastCard);
};

export { infintyScroll, addNewCards };
