// Loop for
let favFood =  ['donner', 'pizza', 'Hotdog'];
for (let i = 0; i < favFood.length; i++){
    console.log('i:', i, );
    console.log(favFood[i]);
}
// Loop while 
let num1 = 5;
let num2 = 10;
while (num1 < num2){
    console.log ("hi", num1);
    num1++;
} 

// Loop while if else
let login= false;
let userName;
let userPasword;
while (!login){
    userName = window.prompt('Enter your user name');
    userPasword = window.prompt('Enter Your Pasword');
    if (userName === "Fer" && userPasword === "1234"){
        login=true;
        console.log ('You are log');
    }
    else {
        console.log ('Enter Your credentials')
    }
}

