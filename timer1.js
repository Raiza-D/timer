// Make timer beep at whatever numbers the user inputs
// E.g. node timer1.js 10 3 5 15 9
// Computer will beep at 3, 5, 9, 10, 15 seconds
// process.stdout.write("\x07");

// Store user's input into a variable so it can be sorted
// Sort user's input (ascending order) and store it into another variable
let userInput = process.argv.slice(2);
sortedInput = userInput.sort(function(a, b) {
  return a-b;
});
console.log(sortedInput); // To check that elements sorted correctly

const timer = function() {
  let delayInSeconds = 1000;
  for (let i = 0; i < sortedInput.length; i++) {
    // First check if input is a number and greater than zero
    if (sortedInput[i] !== NaN && sortedInput[i] > 0) {
      delay = delayInSeconds * sortedInput[i]; // Convert input value into milliseconds
      setTimeout(() => {
        process.stdout.write("\x07");
      }, delay);
    }
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


