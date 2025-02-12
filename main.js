
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

// function multiply (){
//      let resultMultiply = 2 * 5;
//      console.log (resultMultiply);

// }

// multiply ();