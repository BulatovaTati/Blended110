// 1. Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const list = document.createElement("ul");
const btnAdd = document.createElement("button");
btnAdd.textContent = "Add";
const btnRemove = document.createElement("button");
btnRemove.textContent = "Remove";
// const item = document.createElement("li");
const input = document.createElement("input");

document.body.prepend(input, btnAdd, btnRemove, list);

btnAdd.addEventListener("click", onBtnAddClick);
function onBtnAddClick() {
  let value = input.value.trim();
  if (!value) return;

  const item = document.createElement("li");
  item.textContent = value;
  list.append(item);
  input.value = "";
  btnRemove.disabled = false;

  item.style.backgroundColor =
    list.children.length % 2 === 0 ? "yellow" : "blue";
}

btnRemove.addEventListener("click", onBtnRemoveClick);
function onBtnRemoveClick() {
  if (list.lastChild) {
    list.lastChild.remove();
    return;
  }
  // ?????
  //   if (list.children.length === 1 ) {
  //     console.log("list.children.length: ", list.children.length);
  //     btnRemove.disabled = true;
  //   }
}
