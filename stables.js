

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

//Preface
//
//As you know because I was out for two fridays I missed some of your lectures. 
//Because of that I ened up mostly self-teaching myself the code based on the slides, help from friends I have in comp-sci
//and most notably hours of trial and error. 
//Point is my code is apperently very weird as put by my classmates, and honestly for the most part looks nothing like theirs
//I've tried to leave comments on my code in the parts that are different explaining what they are just so it's clear that I know what I've coded

//____________________________________________________________________START_OF_MY_CODE____________________________________________________________________________

let horses = [];  //We create an empty array for our horses

let welcomeMessage = "May you cast off your mortal coil, and join us among the horse gods.";

let lateFee = 666;

let stallsTotal = 10;
//------------------------- First day -------------------------//

function HorseConstruct(name, nickname, favTreat, age, rent, isHorseInside, uniqueProperty1, fears){
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favTreat;
    this.age = age;                        //This is a constructor, it's for setting up a template so you can make multiple complex objects quickly
    this.rent = rent;
    this.isHorseInside = isHorseInside;
    this.UniqueProperty1 = uniqueProperty1;
    this.fears = fears;
}
let horse1 = new HorseConstruct("Johnny", "John", "Apples", 26, 130.00, false, "Not unique in any way", "Mean horses >:(");
let horse2 = new HorseConstruct("Powder", "Jinx","C4",17, 120.00, false,"Has blue Hair","The Police");
let horse3 = new HorseConstruct("Blargboard Box","Nick", "Candy", 4.99, 300, true, "A cardboard cutout of a horse", "Water");

horses.push (horse1, horse2, horse3);  //putting the objects into the array

let horse4 = {
    name: "Fancyl",
    nickname: "Fan",
    favoriteTreat: "Gold Bars",
    age: 68,                            //Imagine doing this 4 times, this is why we use constructors
    lateFee: lateFee*2,
    isHorseInside: true,
    UniqueProperty1: "Loves dem dalla dalla billz",
    fears: "The bottom 99% of horses",
}
horses.push (horse4)

function HorseHunger(horseHunger){  //Create a new local varible
    horseHunger.isHorseHungry = true;  //define the boolean value for the variable
    horse1.isHorseHungry = false;
    horse3.isHorseHungry = false; //overwrite the varible for specific horses
}

horses.map(HorseHunger); //assign the results of the varible/ function to the horses array
            //as a side note, I don't fully understand the map function, my understanding is it's very useful
            //I learned about it / used it here because I was having one of my friends in comp sci was tutoring me




// 
let stallsLeft = stallsTotal - horses.length;
if (stallsLeft <= 2){
    console.log("We need to build more stalls");
}else
    console.log (`we have ${stallsLeft} stalls avalible`);
//

//
function HorseFeeLogger(singleHorse){
    let totalFee = singleHorse.rent + lateFee
    console.log(`returning ${singleHorse.name} late will result in a ${totalFee} fee`)
}
    HorseFeeLogger(horse2);
//

//
for(let singleHorse of horses){  
    if(singleHorse.favoriteTreat != horse4.favoriteTreat){
        console.log (`${singleHorse.name} hates ${singleHorse.favoriteTreat}`)
    } else {
        console.log (`${singleHorse.name} loves ${singleHorse.favoriteTreat}`)
        break;
    }
}
//This is the way I understand how to make loops. It's assigning a local variable to be a single item from the 'horses' array. 
//
function RetunHorseNickname(singleHorse){
    return singleHorse.nickname;
}
console.log(`Powder's nickname is ${RetunHorseNickname(horse2)}`);
//
//
function EternalFears(){
    let limit = 0;
    for(let singleHorse of horses){
        if(limit > horses.length){
            break;
        } else {
            console.log (`${singleHorse.name} fears ${singleHorse.fears}`)
            limit++
        }
    }
}
EternalFears()
//The main thing I was told was weird about my code was that the paramaters of the array were empty. 

// Make horses that are inside go outside, don't target harses that are already outside
function GoOutside(){
    let limit = 0;      //When this hits max the loop will break via line 140 / 141
    let horseNumber = 0;
    for(let singleHorse of horses){
        if(limit === 4){
            break;          //If the limit is not reached the actual function runs. This limit system is much less effcient than the one in your slides
        } else {            //However I think this system makes way more sense so I've written it like this because it makes more sense to me :)
            if (singleHorse.isHorseInside === true){
                singleHorse.isHorseInside = false;
                limit++
                horseNumber++
                console.log(`${[horseNumber]} Horses have moved from inside to outside via line 144`)
            } else{
                limit++
            }
        }
    }
}
GoOutside()
//

// Inside > Outside and Outside > Inside
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
//


// Call outside horses inside and feed all horses
function FeedTreat(){
    let limit = 0;
    for(let singleHorse of horses){
        if(limit >= 4){
            break;
        } else {
            if (singleHorse.isHorseInside === false){
                singleHorse.isHorseInside = true;
                limit++
                console.log(`${[singleHorse.name]} Came inside(186) and ate their snack via line 188`)
            } else{
                limit++
                console.log(`${[singleHorse.name]} Was already inside and ate their snack on line 191 with great zeal!`)
            }
        }
    }
}
FeedTreat()
//

//If it is daytime call all horses outside 
let daytime = true;
function Nighttime(){
    let limit = 0;
    for(let singleHorse of horses){
        if(limit >= horses.length){
            break;
        } else {
            if (singleHorse.isHorseInside && daytime === true){
                singleHorse.isHorseInside = false;
                console.log(`${[singleHorse.name]} Has decided to go out for the day via line 208`)
                limit++
            } else{
                limit++
            
            }
            if (singleHorse.isHorseInside && daytime === false){
                singleHorse.isHorseInside = true;
                console.log(`${[singleHorse.name]} Has come in for the night via line 216`)
                limit++
            } else{
                limit++
        }
    }
}}
Nighttime()
//

//
console.log (horses);
//I hope I did everything right :)