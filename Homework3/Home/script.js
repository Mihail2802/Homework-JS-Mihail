// // this is celsius conversion
// let userInput = prompt("Enter temperature in Celsius");
// userInput2 = Number(userInput);

// function conversion(temperature) {
//   if ( Number.isNaN(temperature))
//    {
//     return "Invalid input";
//   }
//  return(temperature * 1.8 + 32);
// }
// console.log(conversion(userInput2));

// let userInput3 = prompt("Enter temperature in Fahrenheit")
// userInput4 = Number(userInput3);
// function conversion2(temperature){
// if (Number.isNaN(temperature)) {
//     return "Invalid input";
// }

// return ( (5/9) * (temperature-32));
// }
// console.log(conversion2(userInput4));

// this is age calculator

// function calculateAge() {
//   currentYear = new Date().getFullYear();
//   userYear = Number(prompt ("enter your bithday"));
//   return (currentYear-userYear);
// }

// console.log ('you are ' +  (calculateAge() + ' years old'));
// console.log ('you are ' +  (calculateAge() + ' years old'));
// console.log ('you are ' +  (calculateAge() + ' years old'));

// Dog Conversion years
// function yearConvertion(species){
//   if(species === 'human')
//   {
//       humanYear = Number(prompt("Enter your human years"));
//       console.log('You have ' +  Math.trunc(humanYear / 7) + ' dog years') 
//   }
//   else if(species === 'dog')
//   {
//       dogYear = Number(prompt("Enter your dog years"));
//       console.log('Your dog has ' +  (dogYear * 7) + ' human years') 
//   }
//   else
//   console.log("You have chosen an invalid species");
// }

// let species = prompt("Please enter the word Human or Dog for convertion").toLowerCase()

// yearConvertion(species)


// ATM cash app
const money = prompt("please enter the sum you want")
function Atm(money){
 const bankAcount = 3000;
 if (money > bankAcount){
    return "you dont have enough money"
 }
 let withDrawal = bankAcount - money;
 return `you have withdraw $${money} and you have $${withDrawal} left`;
}
console.log(Atm(money))

//  Type of parameters


// function vidNaParametar(parametar) 
// {
//   console.log(typeof parametar);
//   }
  
//   vidNaParametar('text');
//   vidNaParametar(24);
//   vidNaParametar(true);
//   vidNaParametar(undefined);
//   vidNaParametar({});