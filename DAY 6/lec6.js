/*DOM - Document object Model*/

let divs=document.querySelectorAll("div.box");
console.dir(divs);
divs[0].innerText = "new value 1";
divs[1].innerText = "new value 2";
divs[2].innerText = "new value 3";
/* We can change the code and html dynamically */


/*Appending text using JS*/
let h2=document.querySelector("h2");
console.dir(h2.innerText);
console.dir(h2.innerText+" from Abhijeet Jaiswal.") //concatination