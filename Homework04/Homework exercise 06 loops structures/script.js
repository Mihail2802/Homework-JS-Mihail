function nameAndSurrname(name, surrname) {
  let fullNames = [];
  for (let i = 0; i < name.length; i++) {
    fullNames[i] = `${i + 1}.${name[i]} ${surrname[i]}`;
  }
  return fullNames;
}

let name = ["Mihail", "Matea", "ivan"];
let surrname = ["Kuzmanovski", "Stojkovski", "Lazarevski"];
nameAndSurrname(name, surrname).forEach((i) => console.log(i));
