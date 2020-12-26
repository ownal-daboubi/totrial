var NM = prompt("please enter your name");
alert("Hello " + NM);

var age = prompt("please enter your age");

if (age > 20) {
    alert("Welcome to our website " + NM)

} else {
    alert("sorry you can not enter this website " + NM)

}

var pass = prompt("please enter your password");

    if (pass== 1234) {
        alert("you are Logged in "+NM);

    } else {
        alert("password not correct " +NM);
    }

// // var Number =5;

// // function check() {

//     if (Number < 10) {
//         alert("number is less than 10");
//     } else { alert("number is larger than 10");

//     }

// }

// check();

// var pepsiDrink = "12 Pepsi";
// var correct = true; 
// var notCorrect = false;
// function checkpepsi() {
//     if (pepsiDrink ==  "12 Pepsi") {
//         alert("correct");

//     }else{
//         alert("not correct");
//     }

// }

// // checkpepsi();

// function checkmessage(mymessage) {
//     if (mymessage == "hello") {
//         alert("welcome");
//     } else {
//         alert ("rude");
//     }

// }
// checkmessage("go");

var n1 = prompt("please enter your first number");
var n2 = prompt("please enter your seconf number");
var method = prompt("please enter the method:+.-.*./");
var sum = parseInt (n1) + parseInt (n2);
var multi = n1 * n2;
var div = n1 / n2;
var sub = n1 - n2;

if (method == "+") {
    alert("n1+n2= " + sum);
} if (method == "-") {
    alert("n1-n2 =" + sub);
} if (method == "*") {
    alert(" n1*n2= " + multi);
} if ((method == "/")) {


    alert("n1/n2 =" + div);

}