//1. Do the below programs in anonymous function & IIFE

// a.Print odd numbers in an array
//Anonymous
let oddArray=function(arr){
    let odd=[];
    for(let i in arr){
        if(arr[i]%2===0){
            continue;
        }
        else{
            odd.push(arr[i]);
        }
    }
    return odd;
}
console.log(oddArray([1,2,3,4,5,3,9]));
//Output 
//[ 1, 3, 5, 3, 9 ]
//IIFE 
(function(arr){
    let odd=[];
    for(let i in arr){
        if(arr[i]%2===0){
            continue;
        }
        else{
            odd.push(arr[i]);
        }
    }
    console.log(odd);
})([1,2,3,4,5,3,9]);
//Output 
//[ 1, 3, 5, 3, 9 ]

//b.Convert all the strings to title caps in a string array
//Anonymous
let name=function(str){
    return str.toUpperCase();
}
console.log(name("Mayuri GUrav"));
//Output 
//MAYURI GURAV

//IIFE 
(function(str){
    let name=str.toUpperCase();
    console.log(name); 
})("Mayuri Gurav");
//Output 
//MAYURI GURAV

//c. Sum of all numbers in an array
//Anonymous
let output=function(arr){
    let sum=0;
    for(num of arr){
        sum=sum+num;
    }
    return sum; 
}
console.log(output([2,4,6,7]));
//Output 
//19

//IIFE
(function(arr){
    let sum=0;
    for(num of arr){
        sum=sum+num;
    }
    console.log(sum);
})([1,2,3,4]);
//Output 
//19

// d.Return all the prime numbers in an array
//Anonymous
let isPrime=function (Num){
    let count=2;
    while(count<(Num/2)+1){
        if(Num%count!==0){
        count++;
        continue;
        }
        return false;
    } 
    return true;
}
var filterPrime = function(arr){
    let prime=[];
    for(N of arr){
        if(isPrime(N)){
            prime.push(N);
        }
    }
    return prime;
}
console.log(filterPrime([2,3,4,5,9,11,13,15]));
//Output 
//[ 2, 3, 5, 11, 13 ]

//IIFE 
let isPrimeI=function (Num){
    let count=2;
    while(count<(Num/2)+1){
        if(Num%count!==0){
        count++;
        continue;
        }
        return false;
    } 
    return true;
};
(function(arr){
    let prime=[];
    for(N of arr){
        if(isPrimeI(N)){
            prime.push(N);
        }
    }
    console.log(prime);
})([2,3,4,5,9,11,13,15]);
//Output 
//[ 2, 3, 5, 11, 13 ]

// e.Return all the palindromes in an array
//Anonymous
let isPalindrome=function(str){
    if(str===str.split('').reverse().join("")){
        return true;
    }
    return false;
}
let filterPalindrome=function(arr){
    let palindrome=[];
    for(string of arr){
        if(isPalindrome(string.toLowerCase())===true){
            palindrome.push(string);
        }
    }
    return palindrome;
}
console.log(filterPalindrome(["Mayuri","ana","Kayak","Lily","Radar"]));
//Output 
//[ 'ana', 'Kayak', 'Radar' ]

//IIFE 
let isPalindrome1=function(str){
    if(str===str.split('').reverse().join("")){
        return true;
    }
    else{
        return false;
    }
};
(function(arr){
    let palindrome=[];
    for(string of arr){
        if(isPalindrome1(string.toLowerCase())===true){
            palindrome.push(string);
        }
    }
    console.log(palindrome);
})(["Mayuri","ana","Kayak","Lily","Radar"]);
//Output 
//[ 'ana', 'Kayak', 'Radar' ]

//f.Return median of two sorted arrays of the same size
//Anonymous
let median=function(arr1,arr2){
    let n1=arr1.length;
    let n2=arr2.length;
    let arr3=[...arr1,...arr2];
    let sortarr = arr3.sort(function(a, b){return b - a});
    let median=(sortarr[n1]+sortarr[n1-1])/2;
    return median;
}
console.log(median([4,2,5],[6,7,8]));
//Output 
//5.5

//IIFE
(function(arr1,arr2){
    let n1=arr1.length;
    let n2=arr2.length;
    let arr3=[...arr1,...arr2];
    let sortarr = arr3.sort(function(a, b){return b - a});
    let median=(sortarr[n1]+sortarr[n1-1])/2;
    console.log(median);
})([1,2,3,4],[6,7,8,9]);
//Output
//5

// g.Remove duplicates from an array
//Anonymous
let uniqueChar=function(arr){
    let char=[];
    arr.forEach((c)=>{
        if(!char.includes(c)){
            char.push(c);
        }
    });
    return char;
}
console.log(uniqueChar(["Mayuri","Cat","Mayu","Cat"]));
//Output
//[ 'Mayuri', 'Cat', 'Mayu' ]

//IIFE
(function(arr){
    let char=[];
    arr.forEach((c)=>{
        if(!char.includes(c)){
            char.push(c);
        }
    });
    console.log(char);
})(["A","B","C","A","C","D"]);
//Output 
//[ 'A', 'B', 'C', 'D' ]

//h. Rotate an array by k times
let rotatearray=function(arr,n){
    for(let i=0;i<n;i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotatearray([1,2,3,4,5],2));
//Output 
//[ 4, 5, 1, 2, 3 ]

//IIFE to
(function(arr,n){
    for(let i=0;i<n;i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
})([1,2,3,4,5],3);
//Output Array
//[ 3, 4, 5, 1, 2 ]

//3.Do the below programs in arrow functions
//1.Print odd numbers in an array
//Anonynous with arrow
let isOdd= (arr) => {
    let odd=[];
    for(N of arr){
        if(N%2!==0){
            odd.push(N);
        }
    }
    return odd;
};
console.log(isOdd([1,2,3,4,5,6,7]));
//Output Array
//[ 1, 3, 5, 7 ]
//IIFE with arrow
((arr) => {
    let odd=[];
    for(N of arr){
        if(N%2!==0){
            odd.push(N);
        }
    }
    console.log(odd);
})([1,2,3,4,5,6,7]);
//Output 
//[ 1, 3, 5, 7 ]

// b.Convert all the strings to title caps in a string array
//Anonymous with arrow
let Capital = (arr) =>{
    let arr1=[];
    for(str of arr){
        arr1.push(str.toUpperCase());
    }
    return arr1;
}
console.log(Capital(["Mayuri","Gurav","Patil"]));
//Output 
//[ 'MAYURI', 'GURAV', 'PATIL' ]
//IIFE with arrow 
((arr) => {
    let arr1=[];
    for(str of arr){
        arr1.push(str.toUpperCase());
    }
    console.log(arr1);
})(["Mayuri","Gurav","Patil"]);
//Output 
//[ 'MAYURI', 'GURAV', 'PATIL' ]

//c. Sum of all numbers in an array
//Anonmous with arrow 
let Sum = (arr) =>{
    let sum=0;
    for(Num of arr){
        sum=sum+Num;
    }
    return sum;
};
console.log(Sum([1,2,3,4,5]));
//Output
//15

//IIFE with arrow 
((arr) => {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
        }
    console.log(sum);
})([1,2,3,4,5]);
//output
//15

// d.Return all the prime numbers in an array
//Anonymous with arrow 
let isPrime2 = function(N){
    let Count = 2;
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
let Prime= (arr) => {
    let prime=[];
    for(N of arr){
        if(isPrime2(N)===true){
            prime.push(N);
        }
    }
    return prime;
};
console.log(Prime([2,3,4,5,6,7,8,9,10,11]));
//Output 
//[ 2, 3, 5, 7, 11 ]

//IIFE with arrow 
let isPrime4= function(N){
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
};
((arr) => {
    let prime=[];
    for(Num of arr){
        if(isPrime(Num)===true){
            prime.push(Num);
        }
    }
    console.log(prime);
})([2,3,4,5,6,7,8,9,10,11]);
//Output 
// [ 2, 3, 5, 7, 11 ]

// e.Return all the palindromes in an array
//Anonymous with arrow functions
let isPalindrome2=function(str){
    if(str===str.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
}
let Palindrome = (arr) => {
    let pal=[];
    for(str of arr){
        if(isPalindrome2(str.toLowerCase())===true){
            pal.push(str);
        }
    }
    return pal;
}
console.log(Palindrome(["Mayu","Kanak","ana","Radar","Queen"]));
//Output 
//[ 'Kanak', 'ana', 'Radar' ]

//IIFE with arrow
let isPalindrome3=function(str){
    if(str===str.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
};
 ((arr) => {
    let pal=[];
    for(str of arr){
        if(isPalindrome3(str.toLowerCase())===true){
            pal.push(str);
        }
    }
    console.log(pal);
})(["Mayu","Kanak","ana","Radar","Queen"]);
//Output
//[ 'Kanak', 'ana', 'Radar' ]

