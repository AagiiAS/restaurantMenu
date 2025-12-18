all = document.querySelector("#all");
breakfast = document.querySelector("#breakfast");
lunch = document.querySelector("#lunch");
shakes = document.querySelector("#shakes");
dinner = document.querySelector("#dinner");
foodElement = document.querySelector("#food-card-box");

const foods = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/pancake.jpeg",
    desc: `I'm baby woke mlkshka wolf bitetr live-edge blue bottle`,
  },
  {
    id: 2,
    title: "Diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/diner.jpeg",
    desc: `vaporware Iphone mumbled selvage raw denim slow-card leggings`,
  },
  {
    id: 3,
    title: "Egg attack",
    category: "dinner",
    price: 22.99,
    img: "./images/egg.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table`,
  },
  {
    id: 4,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/milkshake.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,
  },
];

const createMenuCard = (food) => {
  return `<div class="food-card flex">
          <div class="menu-img">
            <img class="photo"
              src=${food.img}
              width="120px"
              height="100px"
              alt=${food.title}
            />
          </div>
          <div class="menu-desc flex flex-column">
            <div class="food-name-price flex align-center">
              <div class="food-name">
                <p class="food-title">${food.title}</p>
              </div>
                 <div class="food-price">
                <p>${food.price}</p>
              </div>
            
           
            </div>
              <div class="line-through"></div>
            <div class="long-desc">
              <p >
              ${food.desc}
              </p>
            </div>
          </div>
        </div>`;
};

const render = (foods) => {
  let menu = "";
  foods.forEach((food) => {
    const menuItem = createMenuCard(food);
    menu += menuItem;
  });

  foodElement.innerHTML = menu;
  //   console.log(menu);
};
render(foods);

const menuFilter = (currentCategory) => {
  let categoryList = [];
  console.log(categoryList);
  console.log(currentCategory);
  if (currentCategory === "all") {
    categoryList = foods;
    console.log(categoryList);
  } else if (currentCategory === "breakfast") {
    categoryList = foods.filter((food) => food.category === "breakfast");
    console.log(categoryList);
  } else if (currentCategory === "lunch") {
    categoryList = foods.filter((food) => food.category === "lunch");
    console.log(categoryList);
  } else if (currentCategory === "dinner") {
    categoryList = foods.filter((food) => food.category === "dinner");
    console.log(categoryList);
  } else if (currentCategory === "shakes") {
    categoryList = foods.filter((food) => food.category === "shakes");
    console.log(categoryList);
  }

  render(categoryList);
};

all.onclick = () => menuFilter("all");
breakfast.onclick = () => menuFilter("breakfast");
