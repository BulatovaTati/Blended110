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
//     return;
//   }
//   // ?????
//   //   if (list.children.length === 1 ) {
//   //     console.log("list.children.length: ", list.children.length);
//   //     btnRemove.disabled = true;
//   //   }
// }

// 2. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

const forms = [
  "width: 100px; height: 100px; border-width: 1px;",
  "width: 100px; height: 100px; border-radius: 50%;",
  "width: 150px; height: 100px; border-width: 1px;",
  "width: 200px; height: 100px; border-radius: 100px / 50px; ",
  "width: 150px; height: 100px; transform: skew(20deg)",
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomither(max) {
  return Math.floor(Math.random() * max);
}

const box = document.createElement('div')
changeBox()
document.body.append(box)
box.addEventListener("click", changeBox)
function changeBox() {

  box.style.cssText = forms[randomither(forms.length - 1)];
  box.style.backgroundColor = getRandomHexColor()
  box.style.position = "absolute";
  box.style.top = `${randomither(100)}%`;
  box.style.left = `${randomither(100)}%`;
}