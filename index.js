

//PolyMorphism =>Poly + Morphism
//same method which can used on different objects
//It provide an ability to call the same method on different javascript objects

// class Car{
//     drive(){
//         console.log("This is slow running method");
//     }
// }
// class MotorCycle extends Car{
//     drive(){
//         console.log("This is fast running method");
//     }
// }
// let car1=new Car();
// car1.drive();

// let motorbike=new MotorCycle();
// motorbike.drive();

//Encapsulation 
//Hiding the data from the user
//the wrapping or binding the data into a single unit 
//getter => to get or read the values from the objects
//setter=> to set or write the values 

// class Car{
//     setAttribute(model,year){
//         this.model=model;
//         this.year=year;
//     }
//     getAttribute(model,year){
//         return this.model + " " +this.year;
//     }
// }
// let car1=new Car();
// car1.setAttribute("Nexon",2018);
// console.log(car1.getAttribute());

//MRF
// Map Reduce Function (ES6)
//It will map all the item of an array or object based on index

// Callback=>
// It takes 2 parameters 
// 1.callback =>callback runs for each value in an array and it returns a new value

let employees=[
    {
        id:101,
        name:"Mayuri",
        Designation:"Full stack developer"
    },
    {
        id:102,
        name:"Divya",
        Designation:"Full stack developer"
    },
    {
        id:103,
        name:"Meghana",
        Designation:"Full stack developer"
    },
    {
        id:104,
        name:"Gagan",
        Designation:"Full stack developer"
    }
];
let employeeid=[];
employees.forEach(function(employee){
    employeeid.push(employee.id);
})

let employeeid1=employees.map(function(data){
    return data.id;
});

let employeeid2=employees.map((x) =>{
    return x.id;
})

console.log(employeeid);
console.log(employeeid1);
console.log(employeeid2);

//Reduce => reduce your elemnt of an array into a single unit
//It runs 
let TotalExp = employees.reduce((acc,curr) => {
    return acc+curr.id;
},0);                        //acc value is 0 at beginning and everytime result will be store in acc
console.log(TotalExp);

// let HighestId=employees.reduce((old,employee)=>{
//     return (old.id>employees.id)
// })

// Filetr=> Using filter we can filter out the required data ased on given logic or condition
let data=employees.filter(function(employee){
    return employee.id>103;
})
console.log(data);