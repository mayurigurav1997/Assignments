// function getData(){
//     console.log(age);
//     var name="Mohan";
//     let age=25;
// }
// getData();
//Cant access before initializtion called as temporal deadzone.
// //ReferenceError: Cannot access 'age' before initialization

// function getData(){
//     console.log(name);
//     var name="Mohan";
//     let age=25;
// }
// getData();
// //undefined

// for(i=0;i<10;i+=2){
//     console.log(i);
//     i++;
// }
// 0
// 3
// 6
// 9

// const shape={
//     radius:10,
//     diameter(){
//         return this.radius*2;
//     },
//     perimeter: ()=>2*Math.PI*this.radius,
// }
// console.log(shape.diameter());  //20
// console.log(shape.perimeter());  //NaN

// let c={greet:"Hello"};
// let d;
// d=c;
// c.greet="Hi";
// console.log(d.greet);
// //Hi
// //c and d are hoding the same object 
// //when you change one of them , then other also changes

// let a = 3;
// let b= new Number(3);
// let c=3;
// console.log(a==b);   //true
// console.log(a===b);    //false
// console.log(b===c);     //false

// function sum(num1,num2){
//     return num1+num2;
// }
// console.log(sum(2,"3"));
// //"23"
// //coersion

// let num = 0;
// console.log(num++);
// console.log(++num);
// console.log(num--);
// console.log(--num);
// console.log(num);
// // 0
// // 2
// // 2
// // 0
// // 0

// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(45);
//objects
//type of array is object 

// var num=81;
// let num=100;
// console.log(num);
// //SyntaxError: Identifier 'num' has already been declared

// let obj={a:"one",b:"two",a:"three"};
// console.log(obj);
// //incase if we have 2 keys with same name, key will be replaced 
// //{ a: 'three', b: 'two' }

// for(let i=1;i<5;i++){
//     if(i==3)
//     continue;
//     console.log(i);
// }
// // 1
// // 2
// // 4
//continue =>It is to skip the current iteration 
//if condition is true 

// for(let i=1;i<5;i++){
//     if(i==3)
//     break;
//     console.log(i);
// }
// //1
// // 2

// const numbers=[10,20,30];
// numbers[10]=100;
// console.log(numbers);
// //[ 10, 20, 30, <7 empty items>, 100 ]
// //it will crate holes in an array

// numbers[0]=200;
// console.log(numbers);
// // 200, 20, 30, <7 empty items>, 100 ]


// const person={
//     name:"Mayuri",
//     Profession:"Developer",
// }
// for(const item in person){
//     console.log(item);
//     console.log(person[item]);
// }
// // name
// // Mayuri
// // Profession
// // Developer

// const numbers=[1,2,3,4,5];
// const[x,y]=numbers;
// console.log(x);
// console.log(y);
// // 1
// // 2

// const user={
//     name:"Mohan",
//     age:35,
//     city:"Kolhapur",
// }
// const {name,age,city}=user;
// console.log(`
//             // Name:${name}
//             // Age:${age}
//             // City:${city}`);

//             // Name:Mohan
//             // Age:35
//             // City:Kolhapur

// class person{
//     constructor(name){
//         this.name=name;
//     }
// }
// const obj= new person("Mayuri");
// console.log(typeof obj);
// //obj
// let newList=[1,2,3].push(4);
// console.log(newList);  //4
// console.log(typeof newList);  //number
// cnsole.log(newList.push(5)); //type error cant do push operation on numbers

// function getItems(fruitItems,...FruitsArray){
//     return [fruitItems,...FruitsArray];

// }
// console.log(getItems(["banana","apple"],"orange","Mangoes"));
// //[ [ 'banana', 'apple' ], 'orange', 'Mangoes' ]

// let a=10;
// a++;
// a--;
// a++;
// --a;
// console.log(a);
// //10

let count =0;
const nums=[0,1,2,3];
nums.forEach(num=>{
    if(num)
    count+=1
})
console.log(count);