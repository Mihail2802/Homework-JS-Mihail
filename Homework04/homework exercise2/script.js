function fiveNumbers(numbers){
    let sum = 0;
    for(let num of numbers){
        sum = sum + num;
    }
    return sum ;
}
let numbers = [4, 5, 5 , 10 , 15,];
console.log(fiveNumbers(numbers))
