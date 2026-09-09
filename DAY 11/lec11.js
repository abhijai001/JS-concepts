const Url = "https://jsonplaceholder.typicode.com/posts/1";
/*
let promise = fetch(Url);
console.log(promise);
*/
const getFacts = async()=>{
    console.log("Getting data ...");
    let response = await fetch(Url);
    console.log(response);
}
getFacts();