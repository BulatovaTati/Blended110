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

// const answer = prompt("Яка має бути офіційна назва JavaScript?");
// if (answer.toLowerCase() === "ecmascript") {
//     alert("Вірно");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 10;
// const min = 0;
// let total = 0;
// for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//         total += i;
//     }
//     console.log(i)

// }
// console.log(total)

// function getNumbers(max, min) {
//   let total = 0;
//   for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//     console.log(i);
//   }
//   return total;
// }
// console.log(getNumbers(10, 0));

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

// const login = prompt("enter login");
// console.log(login);
// if (login === "Admin") {
//   const password = prompt("enter password");
//   //   if (password === "Я головний") {
//   //     alert("Вітаю!");
//   //   } else {
//   //     alert("Невірний пароль!");
//   //   }

//   alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");
// } else if (login === "" || login === null) {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = Number(prompt("введіть число від 1 до 4"));
// let result = "";
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//     result = "весна";
//     break;
//   case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";
//     break;
//   default:
//     result = "введіть число від 1 до 4";
// }
// console.log(`${num}-${result}`);

// Переверни рядок у зворотньому порядку
// const string = "hello";
// console.log("string: ", string);

// let newStr = "";

// for (let i = string.length - 1; i >= 0; i--) {
//   newStr += string[i];

//   console.log("newStr: ", newStr);
//   // newStr: olleh;
// }

//  or ->
//for(let i = 0; i < string.length; i++)
// { newStr = string[i] + newStr; }
//

