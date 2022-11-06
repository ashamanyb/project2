let sum = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log(sum);

//Переписать на while
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
