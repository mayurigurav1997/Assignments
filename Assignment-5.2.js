//2,16



// Problem:1
// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
// Input:
// addFive(5);
// addFive(0);
// addFive(-5);
// Output:
// 10
// 5
// 0
let addFive=function(Num){
    return Num+5;
};
console.log(addFive(-5));

// Problem:2
// Write a function called “getOpposite”.
// Given a number, return its opposite
// Input:
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a”);
// getOpposite(5.5);
// Output:
// -5
// 0
// 5
// -1
// -1
(function(Num){
    if(isNaN(Num)){
        console.log("-1");
    }
    else{
        console.log(~Num+1);
    }
})(-5);

// Problem:3
// Fill in your code that takes an number minutes and converts it to seconds.
// Examples
// toSeconds(5) ➞ 300
// toSeconds(3) ➞ 180
// toSeconds(2) ➞ 120
// var min = 5;
let ConvertSeconds = function(min){
    return min*60;
};
console.log(ConvertSeconds(5));

// Problem:4
// Create a function that takes a string and returns it as an integer.
// Examples
// toInteger(“6”) ➞ 6
// toInteger(“1000”) ➞ 1000
// toInteger(“12”) ➞ 12
// var mystr = "5";
(function(Num){
    console.log(parseInt(Num));
})("342");

// Problem:5
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2
let nextNumber=function(Num){
    return Num+1;
};
console.log(nextNumber(-3));

// Problem:6
// Create a function that takes an array and returns the first element.
// Examples
// getFirstElement([1, 2, 3]) ➞ 1
// getFirstElement([80, 5, 100]) ➞ 80
// getFirstElement([-500, 0, 50]) ➞ -500
(function(arr){
    console.log(arr[0]);
})([-500,0,50]);

// Problem:7
// Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400
// var arr = [1, 2, 3];
let HourstoSeconds=function(Num){
    return Num*60*60;
};
console.log(HourstoSeconds(24));

// Problem:8
// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
// Examples
// findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22
(function(l,b){
    let perimeter=2*(l+b);
    console.log(perimeter);
})(2,9);

// Problem:9
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
let Lessthan100=function(a,b){
    if(a+b<=100){
        return true;
    }
    else{
        return false;
    }
};
console.log(Lessthan100(83, 34));

// Problem:10
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
(function(Num1,Num2){
    console.log(Num1%Num2);
})(-9,45);

// Problem:11
// Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
// Examples
// CountAnimals(2, 3, 5) ➞ 36
// CountAnimals(1, 2, 3) ➞ 22
// CountAnimals(5, 2, 8) ➞ 50
let CountAnimals=function(a,b,c){
    return 2*a+4*b+c*4;
};
console.log(CountAnimals(5, 2, 8));

// Problem:12
// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000
(function(f,m){
    console.log(f*10*(m*60));
})(10,25);

// Problem:13
// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false
let divisibleByFive=function(Num){
    if(Num%5===0){
        return true;
    }
    return false;
};
console.log(divisibleByFive(34));

// Problem:14
// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.
// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h”);
// Output:
// true
// true
// false
// -1
(function(Num){
    if(isNaN(Num)){
        console.log("-1");
    }
    else if(Num%2===0){
        console.log("true");
    }
    else{
        console.log("false");
    }
})("11h");

// Problem:15
// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);
// Output:
// true
// flase
// flase
// flase
let areBothOdd=function(Num1,Num2){
    if(Num1%2!==0 && Num2%2!==0){
        return true;
    }
    else{
        return false;
    }
};
console.log(areBothOdd(1,3));

// Problem:16
// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
// Input:
// getFullName(“GUVI”, “GEEK”);
// getFullName(“GUVI”, );
// getFullName(, “GEEK”);
// getFullName(“”, “”);
// Output:
// “GUVI GEEK”
// “GUVI”
// “GEEK”
// “”
let getFullName = function(str1="", str2=""){
    return str1  + str2;
};
console.log(getFullName("GUVI",));

// Problem:17
// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
// Input:
// getLengthOfWord(“GUVI”);
// getLengthOfWord(“”);
// getLengthOfWord();
// getLengthOfWord(9);
// Output:
// 4
// 0
// -1
// -1
(function(str){
    if(typeof str === 'string'){
        console.log(str.length);
    }
    else{
        console.log("-1");
    }
})(9);

// Problem:18
// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
// Input:
// isSameLength(“GUVI”, “GEEK”);
// Output:
// true
let isSameLength=function(str1,str2){
    if(str1.length===str2.length){
        return true;
    }
    else{
        return false;
    }
}
console.log(isSameLength("Mayu","Varsha"));

// Problem:19
// Create a function to calculate the distance between two points defined by their x, y coordinates
// console.log(getDistance(100, 100, 400, 300));
// function getDistance(x1, y1, x2, y2)
let Distance=function(x1, y1, x2, y2){
    let A=Math.pow(x2-x1,2);
    let B=Math.pow(y2-y1,2);
    let C=Math.sqrt(A+B);
    return C.toFixed(2);
};
console.log(Distance(100, 100, 400, 300));

// Problem:20
// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
// Input:
// getNthElement([1, 3, 5], 1);
// Output:
// 3
(function(arr,k){
    console.log(arr[1]);
})([1, 3, 5], 1);

// Problem:21
// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
// Input:
// getLastElement([1, 2, 3, 4]);
// Output:
// 4
let getLastElement=function(arr){
    return arr[arr.length - 1];
};
console.log(getLastElement([1, 2, 3, 4]));

// Problem:22
// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
// var obj = {
// mykey: “value”
// };
// Input:
// getProperty(obj,’mykey’);
// getProperty(obj,’dummykey’);
// Output:
// value
// NA
var obj = {
    mykey: "value"
};
let getProperty=function(obj,mykey){
    for (var i in obj) {
        if(i === mykey){
            return obj[i];
        }
        
    }
};
console.log(getProperty(obj,'mykey'));

// Problem:23
// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
// var obj = {
// }
// Input:
// addProperty(obj, “mykey”);
// Output:
// {
// mykey: true
// }
var obj = {
 mykey: "value"
};
let addProperty=function(obj,key){
    for(i in obj){
        if(i===key){
            obj[key]=true;
        }
    }
    return obj;
};
console.log(addProperty(obj,'mykey'));

// Problem:24
// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
// Input:
// removeProperty(obj, “name”);
// Output:
// undefined
var obj = {
    mykey: "value1",
    mykey1:"value2"
   };
let removeProperty = function(obj, key) {
            delete obj[key];
            return obj;
}
console.log(removeProperty(obj,'mykey1'));

// Problem:25
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 = function countPositivesSumNegatives(arr) {
(function(arr){
    let pos=[];
    let neg=[];
    for(Num of arr){
        if(Num<0){
            neg.push(Num);
        }
        else{
            pos.push(Num);
        }
    }
    console.log(pos.length,neg.length);
})([-5, 10, -3, 12, -9, 5, 90, 0, 1]);

// Problem:26
// Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function getPositives(ar)
// {
//  // your code here
// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let getPositive = function(arr){
    let positive=[];
    for(N of arr){
        if(N>=0){
            positive.push(N);
        }
    }
    return positive;
}
console.log(getPositive([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

// Problem:27
// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// n = 0 -> 2⁰ -> [1]
// n = 1 -> 2⁰, 2¹ -> [1,2]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
// Input:
// powersOfTwo(0)
// powersOfTwo(1)
// powersOfTwo(2)
// Output:
// 1
// 1,2
// 1,2,4
(function(N){
    let result=Math.pow(2,N);
    console.log(result);
})(3);

// Problem:28
// Find the maximum number in an array of numbers
// function findMax(ar)
// {
// // your code here
// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var max = findMax(ar);
// console.log(“Max: “, max);
let findmax=function(arr){
    let Max=Math.max(...arr);
    return Max;
}
console.log(findmax([-5, 10, -3, 12, -9, 5, 90, 0, 1]))

// Problem:29
// Print the first 100 prime numbers
// printPrimes(100);
// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes)
let isPrime = function(N){
    let Count=2;
    while(Count<(N/2)+1){
        if(N%Count!==0){
            Count++;
            continue;
        }
        else{
            return false;
        }
    }
    return true;
}
let Prime=function(N){
    let prime=[];
    let j=1;
    while(prime.length!==N){
        j++;
        if(isPrime(j)===true){
            prime.push(j);
        }
    }
    return prime;
}
console.log(Prime(10));

// Problem:30
// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
// console.log(getPrimes(10, 100));
let isPrime1 = function(N){
    let Count=2;
    while(Count<(N/2)+1){
        if(N%Count!==0){
            Count++;
            continue;
        }
        else{
            return false;
        }
    }
    return true;
}
let Prime1=function(start_at,end_at){
    let prime1=[];
    for(let i=start_at;i<end_at;i++){
        if(isPrime1(i)===true){
            prime1.push(i);
        }
    } 
    return prime1;
}
console.log(Prime1(10,50));

// Problem:31
// Reverse a string
// var s = reverseString("JavaScript");
(function(str){
    console.log(str.split("").reverse().join(""));
})("Javascript React");

// Problem:32
// Create a function that will merge two arrays and return the result as a new array
// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];
(function(arr1,arr2){
    let arr3=[...arr1,...arr2];
    console.log(arr3);
})([1, 2, 3],[4, 5, 6]);

// Problem:33
// Calculate the sum of numbers received in a comma delimited string
// console.log(sumCSV(“1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9”));
let sumCSV=function(str){
    let dummy=str.split(",").map(Number);
    let sum=0;
    for(N of dummy){
        sum=sum+N;
    }
    return sum;
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));