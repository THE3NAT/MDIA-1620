

// ░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░ ░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░ ░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░ ░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░

// ░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░

// ░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░

// ░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░

// ░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░

// ░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░

// ░░░░░░░░░░░░░▐░░░░▐███████████▄░░░░░░░░░░░░░░░░▐░░░░▐███████████▄░░░░░░░░░░░░░░░░▐░░░░▐███████████▄░░░░░░░░░░░░░░░░▐░░░░▐███████████▄░░░

// ░░░░░le░░░░░░░▐░░░░▐█████████████▄░░░░░le░░░░░░░▐░░░░▐█████████████▄░░░░░le░░░░░░░▐░░░░▐█████████████▄░░░░░le░░░░░░░▐░░░░▐█████████████▄

// ░░░░toucan░░░░░░▀▄░░░▐█████████████▄░░░toucan░░░░░▀▄░░░▐█████████████▄░░░toucan░░░░░▀▄░░░▐█████████████▄░░░toucan░░░░░▀▄░░░▐█████████████▄

// ░░░░░░has░░░░░░░░▀▄▄███████████████░░░░░░has░░░░░░░░▀▄▄███████████████░░░░░░has░░░░░░░░▀▄▄███████████████░░░░░░has░░░░░░░░▀▄▄███████████████

// ░░░░░arrived░░░░░░░░░░░░█▀██████░░░░░░░arrived░░░░░░░░░░░░█▀██████░░░░░░░arrived░░░░░░░░░░░░█▀██████░░░░░░░arrived░░░░░░░░░░░░█▀██████░░


//                                                                       PRAISE!

// Welcome!
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
let horses = [];

// Create a variable and use it to store a message visitors to the stable.
let welcomeMessage = "May you cast off your mortal coil, and join us among the horse gods.";

// Create a variable and use it to store the cost of a late payment fee
let lateFee = 666;

// Create a variable and use it to store the number of available stalls in the stable.
let stallsTotal = 10;
//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

function HorseConstruct(name, nickname, favTreat, age, rent, isHorseInside, uniqueProperty1, fears){
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favTreat;
    this.age = age;
    this.rent = rent;
    this.isHorseInside = isHorseInside;
    this.UniqueProperty1 = uniqueProperty1;
    this.fears = fears;
}
let horse1 = new HorseConstruct("Johnny", "John", "Apples", 26, 130.00, false, "Not unique in any way", "Mean horses >:(");
let horse2 = new HorseConstruct("Powder", "Jinx","C4",17, 120.00, false,"Has blue Hair","The Police");
let horse3 = new HorseConstruct("Blargboard Box","Nick", "Candy", 4.99, lateFee, true, "A cardboard cutout of a horse", "Water");

// Store the horses you've just created in your "horses" variable.

horses.push (horse1, horse2, horse3);

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

let horse4 = {
    name: "Fancyl",
    nickname: "Fan",
    favoriteTreat: "Gold Bars",
    age: 68,
    lateFee: lateFee*2,
    isHorseInside: true,
    UniqueProperty1: "Loves dem dalla dalla billz",
    fears: "The bottom 99% of horses",
}
horses.push (horse4)
//console.log(horses);

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot or bracket notation

function HorseHunger(horseHunger){  //Create a new variable
    horseHunger.isHorseHungry = true;  //define the boolean value for the variable
    horse1.isHorseHungry = false;
    horse3.isHorseHungry = false; //overwrite the varible for specific horses
}

horses.map(HorseHunger); //assign the results of the varible/ function to the horses array

// console.log (horses);


//------------------------- Stable roster -------------------------//
// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.
// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

let stallsLeft = stallsTotal - horses.length;
if (stallsLeft <= 2)
    console.log("We need to build more stalls");
else
    console.log (`we have ${stallsLeft} stalls avalible`);

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.


function HorseFeeLogger(singleHorse){
    let totalFee = singleHorse.rent + lateFee
    console.log(`returning ${singleHorse.name} late will result in a ${totalFee} fee`)
}
    
HorseFeeLogger(horse3);


// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

for(let singleHorse of horses){
    if(singleHorse.favoriteTreat != horse4.favoriteTreat){
        console.log (`${singleHorse.name} hates ${singleHorse.favoriteTreat}`)
    } else {
        console.log (`${singleHorse.name} loves ${singleHorse.favoriteTreat}`)
        break;
    }
}

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

function RetunHorseNickname(singleHorse){
    return singleHorse.nickname;
}
console.log(`Powder's nickname is ${RetunHorseNickname(horse2)}`);
//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

function EternalFears(){
    let limit = 0;
    for(let singleHorse of horses){
        if(limit >= 4){
            break;
        } else {
            console.log (`${singleHorse.name} fears ${singleHorse.fears}`)
            limit++
        }
    }
}
EternalFears()

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

function GoOutside(){
    let limit = 0;
    let horseNumber = 0;
    for(let singleHorse of horses){
        if(limit >= 4){
            break;
        } else {
            if (singleHorse.isHorseInside === true){
                singleHorse.isHorseInside = false;
                limit++
                horseNumber++
                console.log(`${[horseNumber]} horses have moved outside`)
            } else{
                limit++
            }
        }
    }
}
GoOutside()


// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

function ReverseSide(){
    let limit = 0;
    for(let singleHorse of horses){
        if(limit >= 4){
            break;
        } else {
            if (singleHorse.isHorseInside === true){
                singleHorse.isHorseInside = false;
                limit++
            } else{
                singleHorse.isHorseInside = true;
                limit++
            }
        }
    }
}
ReverseSide()


// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

function FeedTreat(){
    let limit = 0;
    for(let singleHorse of horses){
        if(limit >= 4){
            break;
        } else {
            if (singleHorse.isHorseInside === false){
                singleHorse.isHorseInside = true;
                limit++
                console.log(`${[singleHorse.name]} Came inside and ate their snack`)
            } else{
                limit++
                console.log(`${[singleHorse.name]} Was already inside and ate their snack with great zeal`)
            }
        }
    }
}
FeedTreat()

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

let daytime = true;

function Nighttime(){
    let limit = 0;
    for(let singleHorse of horses){
        if(limit >= 4){
            break;
        } else {
            if (singleHorse.isHorseInside && daytime === true){
                singleHorse.isHorseInside = false;
                console.log(`${[singleHorse.name]} Has decided to go out for the day`)
                limit++
            } else{
                limit++
            
            }
            if (singleHorse.isHorseInside && daytime === false){
                singleHorse.isHorseInside = true;
                console.log(`${[singleHorse.name]} Has come in for the night`)
                limit++
            } else{
                limit++
        }
    }
}}
Nighttime()

console.log (horses);