alert("Lecture 2");//one time pop up 
let name = prompt("hii"); // alert + input
console.log(name);
//ARITHMETIC OPERATORS
let a= 5;
let b= 10;
console.log("a:", a, "& b:", b);
console.log("a+b:", a+b);
console.log("a-b:", a-b);
console.log("a*b:", a*b);
console.log("a/b:", a/b);
console.log("a%b:", a%b);

//ASSIGNMENT OPERATORS
let c= 15;
console.log("c:", c);
c+=5;
console.log("c:", c);

//comparison operators
let d= 20;
let e= 25;
console.log("d:", d, "& e:", e);
console.log("d==e:", d==e);
console.log("d!=e:", d!=e);
console.log("d>e:", d>e);
console.log("d<e:", d<e);
console.log("d>=e:", d>=e);
console.log("d<=e:", d<=e);

//logical operators
let f= true;
let g= false;
console.log("f:", f, "& g:", g);
console.log("f&&g:", f&&g);
console.log("f||g:", f||g);
console.log("!f:", !f);

//CONDITIONAL STATEMENTS
let mode = "pink";
let color;
if(mode == "dark"){
    console.log("black");
}else if(mode === "pink"){
    console.log("pink");
}
else{
    console.log("white");
}
