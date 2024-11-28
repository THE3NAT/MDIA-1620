/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

//_________________________________________________________________________MY CODE________________________________________________________________________________________
//Setting up some baselines assumptions for the code
let password = "Password1"; //This can be edited
let input = "blarg";        //This can be edited
let passLength = input.length;


//Core functions using if / else statments to determine what to log. The Syntax was a nightmare and getting it right took the vast majority of my time.
function passwordCheck(input, password, passLength){
    if (input === "Password1") {
        console.log ("Access Granted!")

    } else if (input === "forgot") {
        console.log ("Here is a hint")

    } else if (input === "reset") {
        console.log ("Let's reset your account")

    } else{
        console.log ("Access Denied!")
    }
};

//Check the input so we know what to log
passwordCheck(input);

//Now we check additional conditions so we know if we need to log them or not
if (input === "forgot") console.log ("This password you set should not be used because it glitches the system");
if (input === "reset") console.log ("This password you set should not be used because it glitches the system");
//There is a better way to do this using !! so that you can skip writing the console.log command on every line, but this is only 2 lines, so it's fine.

if (passLength <5) console.log ("Your password is too short!"); //This can be edited

//________________________________________________________________________END____________________________________________________________________________________________