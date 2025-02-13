

// exercise 1
 const myName = "Fer";
 console.log ("EX1 My name is", myName);

 // exercise 2

const myAge = "36";
console.log ("EX2 My age is: ", myAge);

// exercise 3

const juliaAge = 39;
let ageDriff = (juliaAge - myAge);
console.log ("Ex3 The Diference age Julia and Fer: ", ageDriff);


// exercise 4

if (myAge > 21){
    console.log("EX4 You are older than 21")
}
else {
    console.log("EX4 You are younger than 21")
}

// exercise 5

if (juliaAge > myAge){
    console.log("Ex5 You are younger than Julia")
}
else if(juliaAge == myAge) {
    console.log ("EX5 You and Julia are the same age ")
}
else {console.log ("You are older than Julia")}

// exercise 6

let classNames =[
    "Ali", "Max", "Raul", "Lucas", "Emely" 
];
console.log ("Ex6 first class name: ", classNames[0]);
console.log ("Ex6 last name: ", classNames[classNames.length -1]);


for (let i = 0; i < classNames.length; i++) {
  console.log ("Ex6 loop name: ", classNames[i]);
}


let sumNames = "";
for (let i=0; i<classNames.length; i++ ){
    let sumNamesLet = sumNames += classNames[i];
    let  = sumNames += " ";
}
console.log ("Ex6 Consolidation names: ", sumNames); 


// exercise 7



let ageStudents = [26,30,35,34,30,30,30,30];
let i = 0;

while (i < ageStudents.length){
    if (ageStudents[i] % 2 === 0){
        console.log ("Ex7 age While: ", ageStudents[i]);
    }
    i++;
}

for (let i = 0; i < ageStudents.length; i++){
    if (ageStudents[i] %2 ===0){
    console.log("Ex7 age for", ageStudents[i]);
    }
}

// exercise 8

let suma = 0;

for (let i = 0; i < ageStudents.length; i++){
        suma  += ageStudents[i]; 
}
console.log ("Ex8 Sum ages ", suma);


// exercise 9

let sumEvenNumbers = 0;

for (let i = 0; i < ageStudents.length; i++){
    if (ageStudents[i] %2 === 0){

    sumEvenNumbers += ageStudents[i];}
}
console.log ("Ex9 Sum even Number:", sumEvenNumbers);

// exercise 10

let sumIndexEven= 0;

for (let i=0; i < ageStudents.length; i++){
    if (i % 2 === 0){
        sumIndexEven += ageStudents[i];
    }
}

console.log ("Ex 10 Sum of even index: ", sumIndexEven);


// exercise 11

function sumarA(){
    const num1 = 5;
    const num2 = 8;
    console.log("Ex11 Sum 2 numbers: ", num1 * num2);
}
sumarA ();

// exercise 12

function multiply (){
     let resultMultiply = 2 * 7;
     console.log ("Ex12 multiply numbers: ", resultMultiply);
}
multiply ();

// exercise 13

function multiplyParameters (a, b){
    let resoultMultiplyParameters = (a * b);
    console.log ("Ex13 Resoult Multiply Parameters: ", resoultMultiplyParameters, "¿? Cómo usar Return");
    return (resoultMultiplyParameters);
}

multiplyParameters (5, 6);

multiplyParameters (45, 6);

multiplyParameters (5, 16);


// exercise 14

function sidesTriangle (sideA, sideB, sideC){
  if (sideA === sideB && sideA === sideC){
    console.log ("Ex14 equilateral triangle");
  } else if (sideA === sideB || sideA === sideC || sideB === sideC){
    console.log ("Ex14 Isoceles Trienagle");
  } else {
    console.log("Ex14 Scalene Triangle");
  }
}

sidesTriangle (5, 5, 5);
sidesTriangle (5, 5, 6);
sidesTriangle (5, 6, 7);

console.log ("¿? if (sideA === sideB && sideA === sideC) Dónde mas podemos usar condiciones de esta manera");

// exercise 15


const numbers = [10, 20, 50, 60, 30, 40];

let min = Math.min (...numbers);

function minNumber (...minNum){
    const numbers = [...minNum];
    let min = Math.min (...numbers);
    console.log ("Ex15 Minimun Number", min)
}
minNumber (20, 30, 10, 40, 50);


// excercise 16

function maxNumber (...maxnumbs){
    const numbers = [...maxnumbs];
    let max = Math.max (...numbers);
    console.log ("Ex16 Max Number: ", max);
}
maxNumber  (2, 3, 4, 1, 15, 16 , 7);
console.log ("¿? Còmo hacerlo sin method");


// excercise 17

function findIndex1 (array, index) { 
    const findIndex= array[index];
    console.log ("Ex 17 Find index 9 [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100] : ", findIndex);
}

findIndex1 ([3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100], 9);

const arrayFind = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
let findIndex2 = arrayFind[2];
console.log ("Ex 17 Find index 2: ", findIndex2);

console.log ("¿? es buena practica no usar funciones?, esta bien hecho el ejercicio?");

// excercise 18


const myColor = ["Red", "Green", "White", "Black"];
let sumColors= "";
    for (i=0; i < myColor.length; i++){
        let = sumColors += myColor[i]  ;
        let = sumColors += " "  ;
    }
    console.log ("Ex18 Sum Colors", sumColors);
    
// exercise 19
// let reverseNumx = 12345;
// let arrayConx = reverseNumx.toString().split("");
// let arrayReversex = arrayConx.reverse();


// function numberForReverse (numberz){
//     numComb = numberz.toString().split("");
//     let sumArrayNumber= "";
//     let arrayInverse = numComb.reverse();
//     for (i=0; i < numComb.length; i++){
//         let = sumArrayNumber += numComb[i];  
//     } 
//     console.log ("Ex19 Inverse Number:", sumArrayNumber);
// }

// numberForReverse (56789);




function numberForReverse (numberz){
    numComb = numberz.toString().split("").reverse().join("");

    console.log ("Ex19:", numComb);
    } 
numberForReverse (12345);



// exercise 20

// Write a JavaScript function that returns a string in alphabetical order. 
// For example, if const x = 'webmaster';, then the output should be 'abeemrstw'. 
// Punctuation and numbers aren't passed in the string.


function sortFunction (word){
    separateA = word.split("").sort().join("");
    console.log ("Ex20 reorder word: ", separateA);
}

sortFunction  ("webmaster");

// exercise 21

// Write a JavaScript function that finds the longest word in a phrase. 
// For example, if const x = "Web Development Tutorial";, then the output should be "Development".

function longerWord (words){
    wordSeparate = words.split(" ");
    let longerWordFin = "";
    for (let i = 0; i< wordSeparate.length; i++){
       let wordFinal = wordSeparate[i];
       let wordFinal2 = wordSeparate[i++];
       
    

       if(wordFinal.length <= wordFinal2.length ){
        longerWordFin =  (wordFinal);

       }
       console.log ("longerWordFin:",longerWordFin);
       console.log ("EX21 PR:", wordFinal.length, wordFinal, wordFinal2.length, wordFinal2,); 

    }
     
}

 

longerWord ("Web Development Tutorial");




// let frase = ["Hola mundo, cómo estás"];
// let palabras = frase[0].split(" "); // Separa por espacios

// console.log(palabras);

// exercise 26




// function checkN (...numzz){
//     for  (let i = 0 ; i < numzz.length; i++){

//         if (numzz.every(num => num == numzz[i])){
//             console.log ("Is a Duplicate number: ", numzz[i]);
//         }
//         else {
//             console.log("is not a duplicate number")
//         }

        
//         // let = consolNumbers += numbersForCheck[i];
        
//     }
// }


// --------------------------

// function checkN(...numzz) {
//     let count = new Map();
//     let duplicateNumbers = "";

//     for (let num of numzz) {
//         count.set(num, (count.get(num) || 0) + 1);
//     }

//     for (let [key, value] of count.entries()) {
//         if (value > 1) {
//             let = duplicateNumbers += (`${key} `);
//             console.log(`Is a Duplicate number: ${key}`);
//         }
//     }
//     console.log (duplicateNumbers);
// }


//  checkN  (3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100);






// --------------------
// let checkN = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

// for  (let i = 0 ; i < checkN.length; i++){
//     // let = consolNumbers += numbersForCheck[i];
//     console.log (checkN[i]);
// }
// --------------------


// let numeros = [5, 5, 5, 5, 5];
// let todosMayoresQueCinco = numeros.every(num => num == 5);
// console.log(todosMayoresQueCinco);




// // Create an Array
// const ages = [32, 33, 16, 40];
// // Create a Test Function
// function checkAge(age) {
//   return age > 18;
// }
// // Are all ages over 18?
// ages.every(checkAge);