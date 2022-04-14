// Make timer beat at whatever integers user inputs.
// E.g. node timer1.js 10 3 5 15 9
// Computer will beep at 3, 5, 9, 10, 15 seconds
// process.stdout.write("\x07");

// Store user's input into a variable and sort it.
// Store sorted input (ascending order) into a variable
let userInput = process.argv.slice(2);
sortedInput = userInput.sort(function(a, b) {
  return a-b;
});
console.log(sortedInput);

const timer = function() {
  let delayInSeconds = 1000;
  for (let i = 0; i < sortedInput.length; i++) {
    // if(typeof sortedInput[i] !== "Number") {
    //   continue;
    // }
    delay = delayInSeconds * sortedInput[i];
      setTimeout(() => {
        process.stdout.write("\x07");
      }, delay);
    }
};
timer();

// Make the computer beep three times, with one second apart:
// setTimeout(() => {
//   process.stdout.write("\x07");
// }, 1000);

// setTimeout(() => {
//   process.stdout.write("\x07");
// }, 2000);

// setTimeout(() => {
//   process.stdout.write("\x07");
// }, 3000);

// process.stdout.write("\x07");

