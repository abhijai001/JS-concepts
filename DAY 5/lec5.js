console.log("Function and Methods");
/*Function for 2 number sum*/
function sum(a,b){
    //local variables
    console.log(a+b);
}
sum(1,7);

/*used return*/
function sum1(a,b){
    sum1=a+b;
    return sum1;
}
let val=sum1(1,2);
console.log(val);

/*Arrow Functions*/
const multiply=(a,b,c)=>{
    console.log(a*b*c);
}
multiply(2,3,99);

/*Count vowel in string*/
function vowels(str){
    let count=0;
    for(let char of str){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
            count++;
        }
    }
    return count;
}
let count=vowels('a eeee i o u');
console.log("Total vowels are: ",count);

/*forEach*/
let arr=[1,2,3,4,5];
arr.forEach(function printval(val){
    console.log(val);
})
/*forEach with arrow function*/
arr.forEach((val)=>{
    console.log(val*val);
})

/*Filter*/
let evenArr = arr.filter((val)=>{
    return val%2 ==0;
});
console.log(evenArr);

/*Practice Problem*/
let n = prompt("Enter the number: ");
const sum2 = arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(`sum of first ${n} number is ${sum2}`);

const multiply1 = arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(`product of first ${n} number is ${multiply1 }`);
