//! Var , let, const

// var myName = "Raúl"; // declaring a variable : keyword(var, let, const)+ variable_name. Initiliasing a variable is add = "some value" and the time of declaration
// console.log(myName);
// myName = "Fer";
// console.log(myName);
// var myName = "Max";
// console.log(myName);

// Let

// let myNumber = 34;
// myNumber = "ten";
// let myNumber = 23   // cannot redeclare a let variable

// const

// const myColor = "red";
// myColor = "asdasd"; // we cannot reassign (give a different value) a CONST variable
// const myColor = 123123  // cannot redeclare a const variable

// SCOPE

// const myShoes = "Vans";
// if (2 > 1) {
//   console.log("whatever ");
//   const myCar = "mini";
//   let myJacket = "nike";
//   console.log(myCar);
//   console.log(myShoes);
// }
// const myCar = "BMW";
// console.log(myJacket);
// console.log(myCar);

// ! FUNCTIONS

function sayHi() {
    console.log("Hi there");
  }
  
  // sayHi();
  // sayHi();
  // sayHi();
  // sayHi();
  // sayHi();
  
  function reusableGreet(dayTime, personName) {
    console.log(dayTime + " ," + personName + " !");
    alert(dayTime + " ," + personName + " !");
  }
  
  const name1 = "Raul";
  const name2 = "Fer";
  const name3 = { name: "Fer", course: "webdev" };
  const name4 = ["Carlos", "Antonio", "Juan"];
  const greet1 = "Good night";
  const greet2 = "Servus";
  const dayTime = "Good afternoon";
  // reusableGreet("Good morning", "Max");
  // reusableGreet("Good evening", "Ali");
  // reusableGreet(greet2, name2);
  // reusableGreet(name1, dayTime);
  // reusableGreet(name1);
  // reusableGreet(dayTime, name3);
  // reusableGreet(greet1, name4[0]);
  
  //! Return
  
  function sum(a, b) {
    const result = a + b;
    console.log("result :>> ", result);
    // return "hi there";
    return result;
    let myName = "asdasd";
  }
  sum(3, 5);
  
  const myResult = sum(6, 7);
  
  console.log("myResult :>> ", myResult);
  
  function totalBill(drinks, meal) {
    //   console.log("running");
    console.log("typeof meal", typeof meal);
    if (typeof meal !== "number") {
      alert("sorry, wrong value for meal");
      //   return;
      console.log("inside if block :>> ");
    }
    const totalAmount = drinks + meal;
    console.log("totalAmount :>> ", totalAmount);
    return totalAmount;
    console.log("totalAmount :>> ", totalAmount);
  }
  
  const wine = 30;
  const pasta = 20;
  // totalBill(30, 20);
  totalBill(wine, pasta);
  
  function calculateChange(totalBill, totalMoney) {
    console.log("totalBill :>> ", totalBill);
    console.log("totalMoney :>> ", totalMoney);
    const change = totalMoney - totalBill;
  
    console.log("change :>> ", change);
  }
  const tea = 5;
  const pulpo = 25;
  const aliMoney = 50;
  const paella = "black rice paella";
  const totalAmount = totalBill(tea, pulpo);
  calculateChange(totalAmount, aliMoney);
  const totalAmount2 = totalBill(tea, paella);