 console.log("Hello Javascript");

// single threaded, non-blocking , logic language

//! Variables : var, let, const

//? Numbers
let ferFavNumber = 7;
//? strings

var myName = "Raúl";
var myOtherName = "Max";
let name3 = "Fer";
let Name3 = "Fer";
//? booleans

let isDaylight = true;

//? Null
// null is a value that indicates the absence of value, but assigned by us. We can declare variables with that value
let email = null;

//? undefined
// undefined is a value that indicates the absence of value, but we get it as a result of another operation. We don't declare a variable with that value

//! other variable type: NaN

//! Arrays

// let aliFavColors = "berlin black, white"
let aliFavColors = ["berlin blac", "white"];
// let favFood = ["döner", "lasagna", "sushi", "croquetas"];

let favNumbers = [1, 5, 7, 9];

let mixedArray = [true, 67, "hi there"];

// console.log("myName", myName);
// console.log("myOtherName -->", myOtherName);
// console.log("favFood :>> ", favFood);
// console.log("favFood :>> ", favFood[3].length);
//* Square brackets NOTATION

// console.log("favFoodRaul :>> ", favFoodRaul.length);

// let something = "asdasd";
let something = 1;

// console.log(something.length);
// console.log(favFood.indexOf("lasagna"));
// console.log(favFood.toString());

// favFood.pop();
// console.log("favFood :>> ", favFood);
// favFood.push("paella");
// console.log("favFood :>> ", favFood);

//! Object

let car = {
  brand: "Mini",
  year: 2010,
  engine: {
    fuel: "benzine",
    powerhorses: 116,
  },
  extras: [
    "leathers seats",
    "solar roof",
    "heated seats",
    { type: "stereo", brand: "Pioneer" },
  ],
};

// console.log("car :>> ", car);

// dot notation
// console.log("brand", car.brand);
// console.log("engine :>> ", car.engine.fuel);
// console.log("extra nr2 :>> ", car.extras[3].brand);

//! Comparisson Operators

// let num1 = "20";
let num1 = 10;
let num2 = 20;
// console.log(num1 > num2);
// console.log(num1 != num2);
// console.log(num1 == num2);
// console.log(num1 === num2);

//! If else

if (num1 > num2) {
  console.log("it is bigger");
} else if (num1 < num2) {
  console.log("it is smaller");
  if (num1 === 10) {
    console.log("num1 is 10");
  }
} else {
  console.log("nope, it is not bigger");
}

// ! LOOPS
let favFood = ["döner", "lasagna", "sushi", "croquetas"];
// console.log(favFood[0]);
// console.log(favFood[1]);
// console.log(favFood[2]);
// let favFoodRaul = favFood[3];

// FOR LOOP

// for (let counter = 0; 2 > counter; counter = counter + 1){
//     console.log("i am looooooping!!")
// }

for (let i = 0; i <= favFood.length; i++) {
  console.log("i :", i);
  console.log(favFood[i]);
  //   if (favFood[i] === undefined) {
  //     console.log("no food value ");
  //   }
  if (!favFood[i]) {
    console.log("no food value ");
  }
}
let a = 0;

if (!a) {
  console.log("a contains a falsy value");
}

// While
let num4 = 1;
let num5 = 3;
while (num5 > num4) {
  console.log("hi there");
  num4++;
}

// while (condition) {}


