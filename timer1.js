/* Challenge: Make your computer beep at whatever number intervals provided
by user on the Terminal. E.g. node timer1.js 10 3 5 15 9
Computer will beep at 3, 5, 9, 10, 15 seconds.
Take care of edge cases -- if input is not a number or it's a negative number.
Use process.stdout.write("\x07"); to make computer beep. */


let userInput = process.argv.slice(2);
sortedInput = userInput.sort(function(a, b) {
  return a-b;
});

const timer = function() {
  let delayInSeconds = 1000;
  for (let i = 0; i < sortedInput.length; i++) {
    if (sortedInput[i] !== NaN && sortedInput[i] > 0) {
      delay = delayInSeconds * sortedInput[i];
      setTimeout(() => {
        process.stdout.write("\x07");
      }, delay);
    }
  }
};
timer();
