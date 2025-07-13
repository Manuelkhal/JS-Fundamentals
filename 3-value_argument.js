const args = process.argv.slice(2);
const ArgOne = args[0]

if (ArgOne === undefined) {
  console.log("No argument");
} else {
  console.log(ArgOne);
}