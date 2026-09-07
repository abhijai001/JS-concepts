/*ARRAYS*/
/*problem 1: find the average marks of students in a class*/

let marks=[85,97,44,37,76,60];
let sum=0;
for (let i=0;i<marks.length;i++){
    sum+=marks[i];
}
console.log("Average marks",sum/marks.length);



/* Problem 2*/

let price = [250, 645, 300, 900, 50];

for (let i = 0; i < price.length; i++) {
    let offer = price[i] / 10;
    price[i] = price[i] - offer;
}

console.log(price);



/*array methods*/
let arr=[1,2,3,4,5,6];
arr.push(1 ,2);
console.log(arr);
arr.pop();
console.log(arr);
arr.splice(2,3,5,6);
console.log(arr);
arr.slice(1,3);
console.log(arr);
