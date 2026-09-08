/*---> DOM : Part 2

let div= document.querySelector("div");
console.log(div);

---> yaha id selector use hua with get attribute

let id=div.getAttribute("id");
console.log(id);


---> attribute ka name aa gya 

let para= document.querySelector("h1");
console.log(para.getAttribute("class"));

*/
/*Practice problem: 1*/
let button = document.createElement("button");
button.innerText="Click me!";
document.querySelector("body").prepend(button);
button.style.color="white";
button.style.backgroundColor="red";
