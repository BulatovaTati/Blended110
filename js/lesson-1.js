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


const answer = prompt("Яка офіційна назва JavaScript?");
if (answer.toLowerCase() === "ecmascript") {
  alert("Вірно!");
} else { 
    alert("Не знаєте? ECMAScript!");
    }