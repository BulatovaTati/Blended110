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

const logins = ["Peter", "John", "Igor", "Sasha"];
function checkLogin(array) {
    const login = prompt("Enter your login");
    // for (const element of array) {
    //     if (login === element) {
    //         alert(`Welcome, ${login}!`);
    //         return;
    //     }; 
    // };
    // alert("User not found");
    alert(array.includes(login) ? `Welcome, ${login}!` : "User not found");
}
checkLogin(logins);