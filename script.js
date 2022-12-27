// printing values of the object

let userMihail = {
  name: "Mihail",
  prezime: "Kuzmanovski",
  godina: 24,
  profesija: "tehnicar na teren",
};

console.log(
  `Full info za Mihail: ${userMihail.name}, ${userMihail.prezime},${userMihail.godina},${userMihail.profesija}`
);


//deleting property

let userMihail1 = {
    name: "Mihail",
    prezime: "Kuzmanovski",
    godina: 24,
    profesija: "tehnicar na teren",
  };
  
  delete userMihail1.prezime;

  console.log(userMihail1);

  // this is checking property with funtion

  let userMihail2 = {
    name: "Mihail",
    prezime: "Kuzmanovski",
    godina: 24,
    profesija: "tehnicar na teren",
  };
  console.log(userMihail2.hasOwnProperty("prezime"));// with a correct property
  console.log(userMihail2.hasOwnProperty("Kuzmanovski")); // with an incorect property

// fuel consumption

let car1 = {
    model : "mazda",
    color : "red",
    year : 2010,
    FuelConsumption: 5,
    fuelPerDistance : function(kilometri){
      return  (kilometri / 100) * this.FuelConsumption;
    }
};
let userInput = prompt("please enter the kilometers : ")
console.log(`You will need ${car1.fuelPerDistance(userInput)} litres to pass ${userInput} kilometers`)
