
console.log ('Hello JavaScript World');
let myName ="Cali";
let myAge = 36;
let juliaName ="Julia";
let juliaAge = 15;
let ageDriff = (myAge - juliaAge);

console.log ("age diference=", ageDriff);

// exercise 4

if (myAge > 21){
    console.log("You are older than 21")
}
else {
    console.log("You are younger than 21")
}

// exercise 5

if (juliaAge > myAge){
    console.log("You are younger than Julia")
}
else if(juliaAge == myAge) {
    console.log ("You and Julia are the same age ")
}
else {console.log ("You are older than Julia")}

// exercise 6
console.log ("exercise 6")

let classNames =[
    "Ali", "Max", "Raul", "Lucas", "Emely" 
];
console.log (classNames[0]);
console.log (classNames[classNames.length -1]);

for (let i=0; i<classNames.length; i++ ){
    console.log ("name", classNames[i]);
}

let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (let i = 0; i < cars.length; i++) {
  console.log (cars[i]);
}


// exercise 7



console.log ("exercise 7");

let ageStudents = [26,30,35,34,30,30,30,30];
let i = 0;

while (i < ageStudents.length){
    if (ageStudents[i] % 2 === 0){
        console.log ("age", ageStudents[i]);
    }
    i++;
    
}

for (let i = 0; i < ageStudents.length; i++){
    if (ageStudents[i] %2 ===0){
    console.log(ageStudents[i]);
    }
}

// exercise 8

let suma = 0;

for (let i = 0; i < ageStudents.length; i++){
    
        suma  += ageStudents[i]; 
}
console.log ("Sume ages ", suma);


// exercise 9
// Use a loop to add the even numbers of an array. For example, const array = [1, 2, 8, 3, 2]; would result in the sum of 2 + 8 + 2, since they are even numbers. Print the result to the console.

let sumEvenNumbers = 0;

for (let i = 0; i < ageStudents.length; i++){
    if (ageStudents[i] %2 === 0){

    sumEvenNumbers += ageStudents[i];}
}
console.log ("Sum even Numbers:", sumEvenNumbers);

// exercise 10

let sumIndexEven= 0;

for (let i=0; i < ageStudents.length; i++){
    if (i % 2 === 0){
        sumIndexEven += ageStudents[i];
    }
}

console.log ("Sum of even positions: ", sumIndexEven);


// exercise 11

function sumarA(){
    const num1 = 5;
    const num2 = 8;
    console.log("Sum 2 numbers: ", num1 * num2);
}
sumarA ();

// exercise 12

function multiply (){
     let resultMultiply = 2 * 7;
     console.log (resultMultiply);
}
multiply ();

// exercise 13

function multiplyParameters (a, b){
    let resoultMultiplyParameters = (a * b);
    console.log ("Resoult Multiply Parameters: ", resoultMultiplyParameters);
    return (resoultMultiplyParameters);
}

multiplyParameters (5, 6);

multiplyParameters (45, 6);

multiplyParameters (5, 16);


// exercise 14

function sidesTriangle (sideA, sideB, sideC){
  if (sideA === sideB && sideA === sideC){
    console.log ("equilateral triangle");
  } else if (sideA === sideB || sideA === sideC || sideB === sideC){
    console.log ("Isoceles Trienagle");
  } else {
    console.log("Scalene Triangle");
  }
 
}

sidesTriangle (5, 5, 5);
sidesTriangle (5, 5, 6);
sidesTriangle (5, 6, 7);

// excercise 15


const numbers = [10, 20, 50, 60, 30, 40];


let min = Math.min (...numbers);
console.log (min);


function minNumber (na, nb, nc, nd, ne){
    const numbers = [na, nb, nc, nd, ne];
    let min = Math.min (...numbers);
    console.log ("Minimun Number", min)
}
minNumber (20, 30, 10, 40, 50);

// excercise 16

function maxNumber (...maxnumbs){
    const numbers = [...maxnumbs];
    let max = Math.max (...numbers);
    console.log ("Max Number: ", max);
}

maxNumber  (2, 3, 4, 1, 15, 16 , 7);


// excercise 17



function findIndex1 (array, index) {
    
    const findIndex= array[index];
    console.log ("Find index 1: ", findIndex);
}

findIndex1 ([3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100], 9);


const arrayFind = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
let findIndex2 = arrayFind[2];
console.log ("Find index 2: ", findIndex2);

// excercise 18


const myColor = ["Red", "Green", "White", "Black"];
let sumColors= "";
    for (i=0; i < myColor.length; i++){
        let = sumColors += myColor[i]  ;
        let = sumColors += " "  ;
    }

    console.log (sumColors);


    
// exercise 19



let reverseNumx = 12345;
let arrayConx = reverseNumx.toString().split("");
let arrayReversex = arrayConx.reverse();
console.log (arrayConx);


function numberForReverse (numberz){
    let numComb = numberz.toString().split("");
    let sumArrayNumber= "";
    let arrayInverse = numComb.reverse();
    for (i=0; i < numComb.length; i++){
        let = sumArrayNumber += numComb[i];  
    } 
    console.log ("Sum array:", sumArrayNumber);
}

numberForReverse (56789);

// exercise 20



