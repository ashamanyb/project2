let task1 = document.getElementById("age-table");
console.log(task1);

let task2 = document.querySelectorAll("#age-table label");
console.log(task2);

let task3 = document.querySelector("#age-table td");
console.log(task3);

let task4 = document.querySelectorAll("form")[0];
console.log(task4);

let task5 = document.querySelectorAll("input")[0];
console.log(task5);

let task6 = document.querySelectorAll("input");
const lastItem = task6[task6.length - 1];
console.log(lastItem);

// task7

// let body = document.body;   декларировал body и записал туда document body

// body.innerHTML = "<!--" + body.tagName + "-->";              ( поменял все на комментарий BODY  )

// alert(body.firstChild.data);  // вывел на экран BODY
