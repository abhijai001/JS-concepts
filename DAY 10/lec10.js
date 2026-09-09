/*Callbacks , Promises & Async Awaits*/
/*
---> Asyncronous EG 

const hello =()=>{
    console.log("hello");
}
setTimeout(hello,1000); // yaha ye hello is a Callback function

---> Callback Hell eg:- 

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data",dataId);
        resolve("this is success of funciton 1.")
        if(getNextData){
            getNextData();
        }
    },2000);
    });
}

---> This is Nested callbacks which is difficult to understand; 

getData(1,()=>{
    console.log("loading data 2...");
    getData(2,()=>{
        console.log("loading data 3...");
        getData(3,()=>{
            console.log("loading data 4...");
            getData(4);
        })
    })
});

---> Doing the above with Promise Channing :) 

getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
    })
});

---> Actual Promise Channning :) 

getData(1)
    .then((res)=>{
        return getData(2);
    })
    .then((res)=>{
        return getData(3);
    }).then((res)=>{
        console.log(res);
    })



---> To solve this we have Promises :) 

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a Promise.");
        //resolve("success");
        reject("network error");
    });
};
let promise = getPromise();
promise.then(()=>{
    console.log("Promise Fullfilled");
});
promise.catch((err)=>{
    console.log("rejected",err);
})

---> Promise Chaining

function asyn1(){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            console.log("data 1");
            resolve("success");
        },4000);
    });
};
function asyn2(){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            console.log("data 2");
            resolve("success");
        },4000);
    });
};
console.log("fetching data 1....");
asyn1().then((res)=>{
    console.log(res);
    console.log("Fetching data 2....");
    asyn2().then((res)=>{
        console.log(res);
    })
})

*/

/* --->  Async Await :) */
/*Example of it--->>>> 
async function hello(){
    console.log("hello");
}
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        },2000)
    })
}
async function getWeather() {
    await api();//1st
    await api();//2nd
}
*/
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data",dataId);
        resolve("this is success of funciton 1.")
        if(getNextData){
            getNextData();
        }
    },2000);
    });
}
async function getAllData(){
    console.log("Getting Data 1....");
    await getData(1);
    console.log("Getting Data 2....");
    await getData(2);
    console.log("Getting Data 3....");
    await getData(3);
    console.log("Getting Data 4....");
    await getData(4);
    console.log("Getting Data 5....");
    await getData(5);
    console.log("Getting Data 6....");
    await getData(6);
    console.log("Success :)");
}
getAllData();

//IIFE :) IMMEDIATELY INVOKED FUNCTION EXPRESSIONS :) 