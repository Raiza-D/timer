// Make timer beat at: whatever integers user inputs.
// E.g. node timer1.js 10 3 5 15 9
// Computer will beep at 3, 5, 9, 10, 15 seconds

let userInput = process.argv.slice(2);

const timer = function() {
  sortedArr = userInput.sort()
    console.log(sortedArr);
  };

  // for (let i = 2; i < sortedArr.length; i++) {
  //   setTimeout(() => {
  //    process.stdout.write("\x07");
  //   }, sortedArr[i]);
  // }




