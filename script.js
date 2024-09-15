const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

const allCards = document.querySelector(".all-cards");
let card;
let img;
let btns;
let btn1;
let btn2;
let pTag;
let pName;
let price;
function cards(product) {
  card = document.createElement("div");
  btns = document.createElement("div");
  btn1 = document.createElement("div");
  btn2 = document.createElement("div");
  pTag = document.createElement("h6");
  pName = document.createElement("h2");
  price = document.createElement("h3");
  img = document.createElement("img");
  btn1.setAttribute("class", "btn btn1");
  btn2.setAttribute("class", "btn btn2");
  btn1.innerText = "add to cart";
  btn2.innerHTML = `
  <span>( - )</span><span> 0 </span><span>( + )</span>
  `;
  btns.setAttribute("class", "btns");
  card.setAttribute("class", "card");
  img.setAttribute("src", `${product.image.desktop}`);
  btns.appendChild(btn1);
  btns.appendChild(btn2);
  card.appendChild(img);
  card.appendChild(btns);
  card.appendChild(pTag);
  pTag.innerText = product.category;
  card.appendChild(pName);
  pName.innerText = product.name;
  card.appendChild(price);
  price.innerText = `$ ${product.price}`;
  allCards.appendChild(card);
}

data.forEach((product) => {
  cards(product);
});
// let secBtns = document.querySelectorAll(".btn2");
// let fstBtns = document.querySelectorAll(".btn1");
// // initial set none
// for (const secBtn of secBtns) {
//   secBtn.style.display = "none";
// }

// for (const fstBtn of fstBtns) {
//   fstBtn.addEventListener("mouseover", () => {
//     // secBtns.style.display = "block";
//     fstBtn.style.display = "none";
//   });
// }
// for (const secBtn of secBtns) {
//   secBtn.addEventListener("mouseleave", () => {
//     // secBtns.style.display = "block";
//     secBtn.style.display = "block";
//   });
// }
