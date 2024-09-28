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
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(str) {
//     const array = str.split(" ");
//     let longestWord = array[0];
//     for (const word of array) {
//         if (longestWord.length < word.length) {
//             longestWord = word;

//         }
//          console.log(longestWord);
//     }
//     return longestWord;
// }

// 7. Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
  // Mango: 100,
  // Poly: 160,
  // Ajax: 1470,
};

let total = 0;

const values = Object.values(salaries);
for (const value of values) {
  total += value;
}
// console.log(total);

// 7. Напиши скрипт, який для об'єкту user,
// послідовно:
// 1 - додасть поле mood зі значенням 'happy'
// 2 - замінить hobby на 'skydiving'
// 3 - замінить значення premium на false
// 4 - виводить зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

//   user.mood = "happy";
//   user.hobby = "skydiving";
//   user.premium = false;

//   const keys = Object.keys(user);
//   for (const key of keys) {
//     console.log(`${key}:${user[key]}`);

//   }

// 4. Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.
// function calculateAverage() {
//   let total = 0;
//   let count = 0;
//   for (const arg of arguments) {

//     if (typeof arg === "number") {
//       total += arg;
//       count += 1;
//     }
//   }
//   return total / count;
// }
// console.log(calculateAverage(1, 2, 3, 4, 5, -10, "hello"));

// 9. Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх
// як властивості об'єкта
// sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() возводить першу властивсть в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку на наявність властивостей в об'єкті в окремий метод exist ()

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    // if (this.a && this.b) {
    //   return this.a + this.b;
    // }
    // return `values not found`;
    return this.exist() ? this.a + this.b : `values not found`;
  },
  mult() {
    //  if (this.a && this.b) {
    //     return this.a * this.b;
    //   }
    //   return `values not found`;
    return this.exist() ? this.a * this.b : `values not found`;
  },
  raise() {
    // if (this.a && this.b) {
    //   return this.a ** this.b;
    // }
    // return `values not found`;
    return this.exist() ? this.a ** this.b : `values not found`;
  },
  exist() {
    return this.a && this.b;
  },
};
// console.log(calculator.read(2, 7))
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.raise());

// 10. Створіть телефонну книгу - об'єкт phonebook,

// у якого є властивість contacts (список контактів)

// та методи управління книгою:

// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());

// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо

// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - змінює ім'я контакта;

const phonebook = {
  // є властивість contacts(список контактів)
  contacts: [],
  // методи управління книгою:
  // -- додає контакт
  add(data) {
    const { name, email, category = "default" } = data;

    // *не забудь додати перевірку
    const existingContact = this.contacts.find(
      (contact) => contact.name === name || contact.email === email
    );

    if (existingContact) {
      console.log("Контакт з таким ім'ям або email вже існує.");
      return;
    }

    const newContact = {
      id: this.generateId(),
      name,
      email,
      category,
      createdAt: this.getDate(),
    };

    this.contacts.push(newContact);
  },
  // виводить список контактів у вигляді таблиці
  list() {
    console.table(this.contacts);
  },
  // фільтрує контактів по обраній категорії
  filtered(category) {
    const filteredContacts = this.contacts.filter(
      (contact) => contact.category === category
    );
    console.table(filteredContacts);
  },
  // видаляє контакт з заданим ім'ям
  delete(name) {
    // indexOf(): повертає індекс першого знайденого елемента в масиві.
    // Ідеальний вибір, якщо потрібно знати, де знаходиться конкретний елемент.
    // find(): використовується для пошуку першого елемента, який відповідає заданій умові в переданій функції зворотного виклику.
    // findIndex(): аналогічний методу find(), але повертає індекс знайденого елемента, а не сам елемент.
    // includes(): простий метод, який повертає true, якщо масив містить зазначений елемент, і false – в іншому випадку.

    const index = this.contacts.findIndex(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!~index) {
      console.log("Контакт з таким ім'ям не знайдено.");
      return;
    }

    this.contacts.splice(index, 1);
  },
  // змінює ім'я контакта
  updateName(oldName, newName) {
    const contact = this.contacts.find((contact) => contact.name === oldName);

    if (!contact) {
      console.log("Контакт з таким старим ім'ям не знайдено.");
      return;
    }

    contact.name = newName;
  },

  generateId() {
    return "#" + Math.random().toString(36).substr(2, 9);
  },

  getDate() {
    return Date.now();
  },
};

// phonebook.add({
//   name: "Doe",
//   email: "Doe@example.com",
//   category: "friends",
// });

// phonebook.add({
//   name: "Jane",
//   email: "Jane@example.com",
//   category: "friends",
// });

// phonebook.add({
//   name: "Lala",
//   email: "Lala@example.com",
// });

// phonebook.list();
// phonebook.filtered("friends");
// phonebook.delete("Doe");
// phonebook.list();
// phonebook.updateName("Doe", "John");
// phonebook.list();
