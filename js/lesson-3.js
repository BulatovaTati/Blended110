const tweets = [
  { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
  {
    id: "001",
    name: "Kate",
    gender: "female",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
  {
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];

// 1. Створити функцію getNames(array), яка приймає масив об'єктів
// і повертає масив імен усіх користувачів (поле name).

// *зробити функцію універсальною getRandomValues(array, prop), щоб вона повертала
// масив значень будь-якої заданої властивості
// **з перевіркою наявності такої властивості:
// якщо властивості немає - повертати 'Sory, no such property in array!'

// function getNames(array) {
//   return array.map((elem) => elem.name);
// }

// console.log(getNames(tweets));

// function getRandomValues(array, prop) {
//   if (!array[0][prop]) {
//     return "Sory, no such property in array!";
//   }

//   return array.map((elem) => elem[prop]);
// }

// console.log(getRandomValues(tweets, "ff"));
// console.log(getRandomValues(tweets, "gender"));

// 2. Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)

// function getUsersWithJs(array) {
//   return array.filter(elem => elem.tags.includes("js"));
// }

// console.log(getUsersWithJs(tweets));

// 3. Написати функцію getUsersWithGender(array, gender), яка приймає масив і стать
// і повертає масив імен користувачів по цій статі (властивість gender)

// function getUsersWithGender(array, gender) {
// //   return array
// //   .filter(elem => elem.gender === gender)
// // .map(elem => elem.name)

// // return array.reduce((userNames, elem) => {
// //   if (elem.gender === gender) {
// //     userNames.push(elem.name)
// //   }
// //   return userNames
// //   },[])

// return array.reduce((userNames, elem) => elem.gender === gender? [...userNames, elem.name]: userNames,[])

// }

// console.log(getUsersWithGender(tweets, "male"));

// 4. Написати функцію getSortedUniqueTags(array), яка приймає масив
// і повертає масив всіх тегів усіх користувачів (поле tags), при цьому не повинно бути
// повторювань тегів і вони мають бути відсортовані в алфавітному порядку.
// Використай ланцюжок методів.

// function getSortedUniqueTags(array) {
//   return array
//     .flatMap((elem) => elem.tags)
//     .filter((elem, i, array) => array.indexOf(elem) === i)
//     .toSorted((a, b) => a.localeCompare(b));
// }

// console.log(getSortedUniqueTags(tweets));

// 5. Напишіть функцію getStatiscticsOfTags(array), яка приймає масив
// і повертає об'єкт статистики, який враховує скільки разів повторюється кожен тег
// в усіх користувачів разом (не для кожного окремо)
// має бути відповідь: {js: 5, nodejs: 5, html: 2, css: 2, react: 4}

// function getStatiscticsOfTags(array) {
// const stats = {};
// array.flatMap(elem => elem.tags)
//   .forEach(tag => {
//     if (stats[tag])
//     {
//       stats[tag] += 1
//     }
//     else
//     {
//       stats[tag] = 1;
//     }
//     console.log(stats);

//   })
//   return stats;
//   return array.flatMap(elem => elem.tags).reduce((stats, tag) =>({...stats, [tag]: stats[tag] ? stats[tag] + 1 : 1}),{})
// };
// console.log(getStatiscticsOfTags(tweets));

// 1. Створи клас User для створення користувача з такими властивостями:
// a. userName - ім'я, рядок
// b. age - вік, число
// c. numbersOfPost - кількість постів, число
// d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// Додай метод getInfo(), який повертає рядок:
// `Користувачеві <name> <age> років і в нього <posts> публікацій.`
// Додай метод updateNumberOfPosts(amount), який оновлює кількість постів юзера
// де amount - це число, кількість постів, що має додаватись до вже існуючих у властивості numbersOfPost

// class User {
//   constructor(params) {
//     this.userName = params.userName;
//     this.age = params.age;
//     this.numberOfPosts = params.numberOfPosts;
//   }
//   getInfo() {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPosts} публікацій.`
//   }
//   updateNumberOfPosts(amount) {
//     this.numberOfPosts += amount;
//   }
// };
// const user = new User({ userName: "Kiril", age: 40, numberOfPosts: 5 })
// console.log(user.getInfo());
// user.updateNumberOfPosts(3);
// console.log(user);

// 2. Напиши класс Client який створює об'єкт
// із властивостями login, email
// Об'яви приватні властивості #login і #email,
// доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//   #login;
//   #email;
//   constructor (login,email ) {
//   this.#login=login;
//   this.#email=email;
//   }

//   get getClientData() {
//     return {clientLogin:this.#login, clientEmail:this.#email, }
//   }

//   set changeEmail(newEmail) {
//   this.#email=newEmail
// }

// }

// const client = new Client(`admin`, `admin@mail.com`);
// console.log(client.getClientData);
// client.changeEmail = `123@mail.com`;
// console.log(client.getClientData.clientEmail);

// 3. Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority),

// class Notes {
//   static Priority = {
//     HIGHT: "hight",
//     MIDDLE:"middle",
//     LOW:"low"
//   }
//   constructor() {
//     this.items = [];
//   }

//   getNotes() {
//     return this.items;
//   }

//   addNote(note) {
//     this.items.push(note);
//    }

//   removeNote(noteText) {
//    this.items= this.items.filter(item => item.text !== noteText);
//   }

//   updatePriority(noteText, newPriority) {
//     const note = this.items.find(item => item.text === noteText);
//     if (note) note.priority = newPriority;
//  }
// }

// const note = new Notes()
// note.addNote({ text: "admin", priority: Notes.Priority.LOW });
// note.addNote({ text: "567", priority: Notes.Priority.MIDDLE });
// note.addNote({text: "NNN", priority: Notes.Priority.HIGHT})
// note.removeNote("admin");
// note.updatePriority("567", Notes.Priority.HIGHT);

// console.log(note.getNotes());
// console.table(note.getNotes());
// console.dir( note.getNotes());

////////////////////////////////////////////////////////////////////////
// 4. Створити клас Worker, у якого є властивості name і salary.
// У класу Worker є метод getSalary, який повертає повідомлення
// "Worker <name> has salary <salary> dollars"
// Створити клас WorkerPosition, у якого є властивість position
// і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

class Worker {
  constructor({ name, salary }) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return `Worker ${this.name} has salary ${this.salary} dollars`;
  }
}

class WorkerPosition extends Worker {
  constructor({ name, salary, position }) {
    super({ name, salary });
    this.position = position;
  }

  getPosition() {
    return `${this.name} works as ${this.position}`;
  }
}

const mango = new Worker({
  name: "Mango",
  salary: 500,
});

const editor = new WorkerPosition({
  name: "Poly",
  salary: 1000,
  position: "editor",
});

// console.log(mango.getSalary());
// console.log(editor.getSalary());
// console.log(editor.getPosition());

///////////////////////////////////////////////////////////////
// 5. Створити клас Contact для створення контакта з полями name, email і phone.
// Потім створиnb клас ContactBook, який буде зберігати список контактів
// і надавати методи для додавання, видалення та пошуку контактів.
class Contact {
  constructor({ name, email, phone }) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class ContactBook {
  constructor() {
    this.contacts = [];
  }

  get contactList() {
    return this.contacts;
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  deleteContact(name) {
    this.contacts = this.contacts.filter((contact) => contact.name !== name);
  }

  findContact(name) {
    return (
      this.contacts.find((contact) => contact.name === name) ||
      "Contact not found"
    );
  }
}

const contactBook = new ContactBook();

const contact1 = new Contact({
  name: "John Doe",
  email: "john@example.com",
  phone: "123-000-0000",
});

const contact2 = new Contact({
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "098-1111-1111",
});

contactBook.addContact(contact1);
contactBook.addContact(contact2);

// console.log(contactBook.contactList);

// console.log(contactBook.findContact("John Doe"));
// console.log(contactBook.findContact("Mike"));

// contactBook.deleteContact("Jane Smith");

// console.log(contactBook.contactList);
//////////////////////////////////////////////////////////////////

// 7. Є масив чисел, наприклад: arr = [1,2,3,4,5]
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Іншими словами, виклик getSums(arr) має повертати новий масив з такої ж
// кількості елементів, в якому на кожній позиції буде сума елементів масива
// до цієї позиції включно

// Наприклад: для arr = [1,2,3,4,5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція не має змінювати вхідний масив
// Використовуйте метод reduce

const arr = [1, 2, 3, 4, 5];

// function getSums(arr) {
//   let result = [];

//   arr.reduce((sum, current) => {
//     sum += current;
//     result.push(sum);
//     return sum;
//   }, 0);

//   return result;
// }

function getSums(arr) {
  return arr.reduce((acc, num) => {
    const lastAcc = acc.length > 0 ? acc[acc.length - 1] : 0;

    console.log("lastAcc : ", lastAcc, "-", "num: ", num);
    // lastAcc : 0 , num:  1
    // lastAcc :  1 , num:  2
    //  lastAcc :  3 , num:  3
    //  lastAcc :  6,  num:  4
    //  lastAcc :  10 , num:  5

    acc.push(lastAcc + num);
    // 0+1=1, стартове значення + наступне 1+2=3, 3+3=6, 6+4=10, 10+5=15
    return acc;
  }, []);
}

// console.log("getSums(arr): ", getSums(arr));

//////////////////////////////////
// 10. Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

const products = [
  { name: "Apple", category: "fruits", price: 1.2, stock: 50 },
  { name: "Banana", category: "fruits", price: 0.8, stock: 100 },
  { name: "Carrot", category: "vegetables", price: 0.5, stock: 200 },
  { name: "Broccoli", category: "vegetables", price: 1.0, stock: 150 },
  { name: "Milk", category: "dairy", price: 1.5, stock: 20 },
  { name: "Cheese", category: "dairy", price: 2.5, stock: 5 },
  { name: "Chicken", category: "meat", price: 5.0, stock: 30 },
  { name: "Beef", category: "meat", price: 7.0, stock: 25 },
];

const CATEGORY = "meat";

function getMostExpensiveMeatProduct(products) {
  return products
    .filter((product) => product.category === CATEGORY)
    .reduce((prev, current) => (prev.price > current.price ? prev : current));
}

// console.log(getMostExpensiveMeatProduct(products));
