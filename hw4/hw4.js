// 1) задание со знаком ?
// const age = prompt("Age?");
// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }
// checkAge(age);

// 1) задание со знаком ||
// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили ? ");
// }
// checkAge(age);

// задание 2
// let result = 0;
// function power(x, n) {
//   result = x ** n;
//   return result;
// }
// let x = prompt("Введите число х");
// let n = prompt("Введите число n");
// if (n < 1) {
//   alert("недопустимая цифра");
// } else {
//   power(x, n);
// }
// console.log(result);

// задание 3
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// задание 4

// const arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a); // ... ваш код для сортировки по убыванию

// console.log(arr);

// задание 5

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((users) => users.name);

// alert(names);

// Задание 6

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((users) => {
//   return {
//     fullName: `${users.name} ${users.surname}`,
//     id: users.id,
//   };
// });

// alert(usersMapped[1].id); // 1
// alert(usersMapped[1].fullName); // Вася Пупкин
// console.log(usersMapped);

// Задание 7
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr)); // 28
