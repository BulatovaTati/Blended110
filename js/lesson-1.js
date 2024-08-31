//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// // користував ввів число за допомогою prompt
// let userTime = Number(prompt("Введіть число"));
// const sec = 60;

// if (!isNaN(userTime)) {
//   // const hours = Number.parseInt(userTime / sec); or
//   let hours = Math.floor(userTime / sec);
//   hours = String(hours).padStart(2, "0");

//   let minuts = userTime % sec;
//   minuts = String(minuts).padStart(2, "0");

//   console.log("time", `${hours}:${minuts}`);
// } else {
//   alert("Ви ввели не число");
// }

//Використовуя if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const answer = prompt("Яка офіційна назва JavaScript?");
// if (answer.toLowerCase() === "ecmascript") {
//   alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }

// Написати цикл що виводить в консоль числа від меньшого до більшого в діапазоні від min до max
// але лише ті що кратні 5-ти

// ```js
// const max = 10;
// const min = 0;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log("total: ", total);

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// Переверни рядок у зворотньому порядку
const string = "hello";
console.log("string: ", string);

let newStr = "";

for (let i = string.length - 1; i >= 0; i--) {
  newStr += string[i];

  console.log("newStr: ", newStr);
  // newStr: olleh;
}

//  or ->
//for(let i = 0; i > string.length; i++)
// { newStr = string[i] + newStr; }
//
