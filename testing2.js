let friends =["Julian", "Daniel","Teresa"];
for(let i=0; i< friends.length; i++){
    console.log ("My BF No.", i, friends[i]);

}



let num1= 1;
let num2= 6;
while (num1 < num2){
    console.log ("No. ", num1);
    num1++;
}



// let logIn = false;
// let userName;
// let userPasword;
// while (!logIn){
//     userName = window.prompt ("Enter your name");
//     userPasword = window.prompt ("Enter your Pasword");
//     if(userName === "Fer" && userPasword==="1234"){
//         logIn = true;
//         console.log ("You are loged")
//     }
//     else {
//         console.log ("Incorrect Credencials");
//     }
// }


let animales = ["gato", "perro", "raton"];
for (i=0; i< animales.length;i++){
    console.log ("Animal", animales[i])
}


let autos = 10;
let conductores = 0;
while (autos > conductores){
    console.log ("Auto No.", autos);
     conductores++;
}


let login = false;
let userName;
let userPasword;

while (!login){
    userName = window.prompt("Give your user name");
    userPasword = window.prompt("Give your user pasword");
    if (userName ==="Fer" && userPasword ==="1234"){
        login=true;
        console.log ("you are loged");
    }
    else {
        console.log ("Incorret user or pasword");
    }
}