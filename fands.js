let f = 0;
let factorial = 1;

for (let i = 1; i <= 5; i++) {
  factorial = factorial * i;
  f = factorial + f;
}

console.log(f);
