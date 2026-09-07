//loops in JS 
//For Loop
let sum=0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log("Sum with FOR Loop: ",sum);


//While Loop
let sum1=0;
let j=1;
while(j<=5){
    sum1+=j;
    j++;
}
console.log("Sum with WHILE loop: ",sum1);

//Do While Loop 
let sum2=0;
let i=1;
do{
    sum2+=i;
    i++;
}while(i<=5);
console.log("sum with DO WHILE loop :",sum2);

//For of loop 
let str="Abhijeet";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("Size of string: ",size);
console.log(str.length);
console.log(str[0]);



//Template Literals
let obj={
    item:"pen",
    price:10,
}
let str2=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(str2);

// printing username
let name=prompt("Enter name: ");
let username="@"+name+name.length;
console.log("username: ",username);