const cardInfo = (obj, index) => {
  return `<div>
  ${index % 2 === 0 ? `<img src="${obj.img}"/> ` : null}
  <div class="categories">${obj.category}</div>
  <div class="card-title">${obj.title}</div>
  <p class="card-desc">${obj.desc}</p>
  ${index % 2 !== 0 ? `<img src="${obj.img}"/> ` : null}
  </div>`;
};

const cardNews = [
  { img: "...", category: "...", title: "...", desc: "...", newsSpecial: true },
  { img: "...", category: "...", title: "...", desc: "..." },
  { img: "...", category: "...", title: "...", desc: "..." },
  { img: "...", category: "...", title: "...", desc: "..." },
  { img: "...", category: "...", title: "...", desc: "..." },
  { img: "...", category: "...", title: "...", desc: "...", newsSpecial: true },
];

const specialCardInfo = (obj) => {
  return `<div>
    <img src="${obj.img}"/>
    <div class="card-content">
      <div class="categories">${obj.category}</div>
      <div class="card-title">${obj.title}</div>
      <p class="card-desc">${obj.desc}</p>
    </div>
  </div>`;
};
