// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");
// styles[index] = "classic";
// // styles.splice(index, 1, "classic");
// function logItems(array) {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         console.log(`${index+1} - ${element}`);
//     }
// };
// logItems(styles);

// 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// чи є ім'я введене в prompt у цьому масиві і у разі,
// якщо є - виводить повідомлення в alert "Welcome, <name>!"
// в іншому випадку - "User not found"

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//     const login = prompt("Enter your login");
//     // for (const element of array) {
//     //     if (login === element) {
//     //         alert(`Welcome, ${login}!`);
//     //         return;
//     //     };
//     // };
//     // alert("User not found");
//     alert(array.includes(login) ? `Welcome, ${login}!` : "User not found");
// }
// checkLogin(logins);



// 3. Напишіть функцію, яка складатиме сусідні числа і пушитиме їх в новий масив
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];


// function sum(array) {
//     const sumArray = [];
//     for (let i = 0; i < array.length-1; i++){
//         let current = array[i];
//         let next = array[i + 1];
//         sumArray.push(current + next);
//     }
//     return sumArray;
// }

// console.log(sum(someArr));


// 5. Напишіть функцію, яка шукатиме найдовше слово у реченні
console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


function findLongestWord(str) {
    const array = str.split(" ");
    let longestWord = array[0];
    for (const word of array) {
        if (longestWord.length < word.length) {
            longestWord = word;
           
        }
         console.log(longestWord);
    }
    return longestWord;
}