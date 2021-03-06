
//1.How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let Result="Equal";
let count=0;
for(let key1 in obj1){
    if(obj2.hasOwnProperty(key1) && obj2[key1]===obj1[key1]){
        count++;
    }
}
console.log(Object.keys(obj1).length===count?"Equal":"Not Equal")
 //or
 let _ = require('lodash');
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(_.isEqual(obj1, obj2));

//2. display all the country flags in console
var xhr=new XMLHttpRequest();      //Create  XMLHttpRequest  object
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");    //open(method,url)
xhr.send();
//Set up a listner where server listen to our request 
xhr.onload=function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            for(var i=0; i<data.length; i++){
                console.log(data[i].name);
                console.log(data[i].flag);
            }
    }else{
        //you should print the error 
        console.log("Data is not available");
    }
}

//3. Use the same rest countries and print all countries name, region, sub region and population

//set up http request 
var xhr=new XMLHttpRequest();      //Create  XMLHttpRequest  object
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");    //open(method,url)
xhr.send();

//Set up a listner where server listen to our request 
xhr.onload=function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            for(var i=0; i<data.length; i++){
                console.log(data[i].name);
                console.log(data[i].region);
                console.log(data[i].subregion);
                console.log(data[i].population);
            }
    }else{
        //you should print the error 
        console.log("Data is not available");
    }
}

