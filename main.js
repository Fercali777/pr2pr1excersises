
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

let ageStudents = [26,30,35];
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