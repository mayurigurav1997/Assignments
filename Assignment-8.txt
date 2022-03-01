// 1)The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie{
    constructor(myTitle,myStudio,myRating="PG"){
        this.title=myTitle;
        this.studio=myStudio;
        this.rating=myRating;
    };

     static getPG(arr){
        let result=[];
        arr.filter((movie) => {
            if(movie.rating=="PG"){
                result.push(movie);
            }
        });
        return result;
    }
};
let movie1=new Movie("Mission Impossible","France","PG-09");
let movie2=new Movie("Titanic","Fox Baja");
let movie3=new Movie("Casino Royale","Eon Productions","PG");
console.log(`Movie title is ${movie1.title}`);
//Movie title is Mission Impossible
console.log(`Default Movie rating is ${movie2.rating}`);
//Default Movie rating is PG
console.log(Movie.getPG([movie1,movie2,movie3]));
//[   Movie { title: 'Titanic', studio: 'Fox Baja', rating: 'PG' },
    // Movie {
    //     title: 'Casino Royale',
    //     studio: 'Eon Productions',
    //     rating: 'PG'
    //   }
    // ]

//2.Convert the UML diagram to Typescript class. - use number for double
class Circle{
    setRadius(oldRadius){
        this.radius = oldRadius;
        
    };
    setColor(oldColor){
        this.color = oldColor;
    };
    getRadius(oldRadius){
        let newRadius= this.radius * 100;
        return `This is a  new radius ${newRadius}`;
    };
    getColor(oldColor){
        let newColor;
        if(this.color==="Black"){
            console.log("This color need to change");
            newColor="Violet";
        }
        else{
           newColor=this.color;
        }
        return `This is a color ${newColor}`;
    };
    getArea(){
        let Area = 3.14 * this.radius * this.radius;
        return `This is a Area of circle ${Area.toFixed(2)}`;
    }
    getCircumference(){
        let circumference= 2* 3.14 * this.radius;
        return `This is a cicumference of cicle ${circumference.toFixed(2)}`;
    }
}

let circle1 = new Circle();
circle1.setRadius(1.2);
console.log(circle1.getRadius());
circle1.setColor("Black");
console.log(circle1.getColor());
console.log(circle1.getArea());
console.log(circle1.getCircumference());
//This is a  new radius 120
// This color need to change
// This is a color Violet
// This is a Area of circle 4.52
// This is a cicumference of cicle 7.54

// 3.Write a “person” class to hold all the details.
class Person{
    static Nationality="Indian";
    constructor(Name,Experiance){
        this.name=Name;
        this.exp=Experiance;
    }
    getDetails(){
        return `This is a ${this.name} with a experiance of  ${this.exp} years`;
    }
    static getNationality(){
        return `Nationality is ${this.Nationality}`;
    }
}
class Employee extends Person{
    constructor(Name,Experiance,Gender,Salary){
        super(Name,Experiance);
        this.gender=Gender;
        this.salary=Salary;
    }
    getPersonalDetails(){
        return `${this.name} is ${this.gender} having a salary ${this.salary}`;
    }
    
    

}

let per1=new Person("Mayuri",2);
console.log(per1.getDetails());
console.log(Person.getNationality());
//This is a Mayuri with a experiance of  2 years
// Nationality is Indian

let emp1 = new Employee("Rushikesh",1,"Male","25K");
console.log(emp1.getDetails());
console.log(emp1.getPersonalDetails());
// This is a Rushikesh with a experiance of  1 years
// Rushikesh is Male having a salary 25K

//4.write a class to calculate uber price.
class Information{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    };
    getDetails(){
        return `${this.name} is a ${this.gender} of ${this.age} age`;
    };
};
class Price extends Information{
    constructor(name,age,gender,distance,rate){
        super(name,age,gender);
        this.distance=distance;
        this.rate=rate;
    };
    ridePrice(){
        let price = this.distance * this.rate;
        return `The total price is ${price}`;
    };
};
let emp2 = new Price("Mayuri",24,"Female",7,6.5);
console.log(emp2.getDetails());
console.log(emp2.ridePrice());