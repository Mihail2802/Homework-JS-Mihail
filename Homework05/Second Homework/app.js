let numbers = [2, 1, 4, 6, 7];
let myList = document.getElementById("unordered-list");
let myDiv = document.getElementById("div_main");
let mainParagraph = document.getElementById("p");
function printNumbers(numbers) {
  for (const num of numbers) {
    myList.innerHTML += `<li>${num}</li>`;
  }
}
function sumOfNumbers(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  myDiv.innerHTML = sum;
  mainParagraph.innerHTML = `${numbers[0]}+${numbers[1]}+${numbers[2]}+${numbers[3]}+${numbers[4]}=${sum}`;
}

printNumbers(numbers);
sumOfNumbers(numbers);
