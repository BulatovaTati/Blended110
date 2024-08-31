//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// let userTime = Number(prompt("Введіть число"));
// const sec = 60;
// let hours = Math.floor(userTime / sec);
// hours = String(hours).padStart(2, "0");

// let minuts = userTime % sec;
// minuts = String(minuts).padStart(2, "0");

// console.log("time", '${hourse}:${minuts}')

//Використовуя if...else,
//напишіть код, який буде питати:
//"
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

function getNumbers(max, min) {
    let total = 0;
    for (let i = max; i >= min; i--) {
        if (i % 2 === 0) {
            total += i;
        }
        console.log(i)
    }
    return total;

}
console.log(getNumbers(10, 0));