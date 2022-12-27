function weightInChickens(userInput) {
  return userInput * 0.5;
}
userInput = prompt("please enter the kilograms : ");
document.querySelector("p").innerHTML = `result: ${weightInChickens(userInput)}`
console.log(weightInChickens(userInput))

