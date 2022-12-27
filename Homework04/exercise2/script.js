function findNumber(array, type){
let result = [];
if(type === "even"){
    for(let num of array){
        if(num % 2 === 0){
            result.push(num);
        }
    }
    return result;
}else if(type === "odd"){
    for(let num of array){
        if(num % 2 !== 0){
            result.push(num);
        }
    }
    return result;
} else{
    console.log("the type was not correct.Please enter odd or even");
    return null;
}
}
let arrayNumbers = [3 , 2 , 1 , 5 ,6 , 7 ,8 , 10];
console.log(findNumber(arrayNumbers,"odd"));