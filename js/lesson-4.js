// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const list = document.createElement("ul");
// const btnAdd = document.createElement("button");
// btnAdd.textContent = "Add";
// const btnRemove = document.createElement("button");
// btnRemove.textContent = "Remove";
// // const item = document.createElement("li");
// const input = document.createElement("input");

// document.body.prepend(input, btnAdd, btnRemove, list);

// btnAdd.addEventListener("click", onBtnAddClick);
// function onBtnAddClick() {
//   let value = input.value.trim();
//   if (!value) return;

//   const item = document.createElement("li");
//   item.textContent = value;
//   list.append(item);
//   input.value = "";
//   btnRemove.disabled = false;

//   item.style.backgroundColor =
//     list.children.length % 2 === 0 ? "yellow" : "blue";
// }

// btnRemove.addEventListener("click", onBtnRemoveClick);
// function onBtnRemoveClick() {
//   if (list.lastChild) {
//     list.lastChild.remove();
//     if (list.children.length === 0) {
//       console.log("list.children.length: ", list.children.length);
//       btnRemove.disabled = true;
//     }
//     return;
//   }
// }

// 2. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const box = document.createElement('div')
// changeBox()
// document.body.append(box)
// box.addEventListener("click", changeBox)
// function changeBox() {

//   box.style.cssText = forms[randomither(forms.length - 1)];
//   box.style.backgroundColor = getRandomHexColor()
//   box.style.position = "absolute";
//   box.style.top = `${randomither(100)}%`;
//   box.style.left = `${randomither(100)}%`;
// }

// / 3. Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в index.html додайте список ul.stats, в який буде рендеритись цей список
// *властивість gender використай для додавання відповідного класу елементу списка

// const tweets = [
//   { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
//   {
//     id: "001",
//     name: "Kate",
//     gender: "female",
//     likes: 2,
//     tags: ["html", "css"],
//   },
// {
//     id: "002",
//     name: "Maria",
//     gender: "female",
//     likes: 17,
//     tags: ["html", "js", "nodejs"],
//   },
//   {
//     id: "003",
//     name: "Borys",
//     gender: "male",
//     likes: 8,
//     tags: ["css", "react"],
//   },
//   {
//     id: "004",
//     name: "Jhon",
//     gender: "male",
//     likes: 10,
//     tags: ["js", "nodejs", "react"],
//   },
// {
//     id: "005",
//     name: "Anna",
//     gender: "female",
//     likes: 3,
//     tags: ["js", "nodejs", "react"],
//   },
//   {
//     id: "006",
//     name: "Jhon",
//     gender: "male",
//     likes: 0,
//     tags: ["js", "nodejs", "react"],
//   },
// ];

// const list = document.querySelector('.stats');

// const markup = tweets.map(({name, gender, likes, tags}) =>
// ` <li class="stats-item ${gender === 'male'? 'boy' : 'girl'}">
// <p class="stats-name">Name: ${name}</p>
// <p class="stats-likes">Likes: ${likes}</p>
// <p class="stats-tags">Tags: ${tags.join(", ")}</p>
//       </li>`
// )
// .join("")

// list.innerHTML = markup;

// 4. Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

const input = document.querySelector("#passwordInput");
const btn = document.querySelector("#passwordButton");

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  if (btn.textContent === "Розкрити") {
    btn.textContent = "Приховати";
    input.style.color = "inherit";
  } else {
    btn.textContent = "Розкрити";
    input.style.color = "transparent";
  }
}
