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

function getUsersWithGender(array, gender) {
//   return array
//   .filter(elem => elem.gender === gender)
// .map(elem => elem.name)

// return array.reduce((userNames, elem) => {
//   if (elem.gender === gender) {
//     userNames.push(elem.name)
//   } 
//   return userNames
//   },[])


return array.reduce((userNames, elem) => elem.gender === gender? [...userNames, elem.name]: userNames,[])

}

console.log(getUsersWithGender(tweets, "male"));

