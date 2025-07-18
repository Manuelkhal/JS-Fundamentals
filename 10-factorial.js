function factorial(n) {
  if (isNaN(n)) return 1;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const args = process.argv.slice(2);
const number = Number(args[0]);

console.log(factorial(number));
