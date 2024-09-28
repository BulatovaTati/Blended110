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

