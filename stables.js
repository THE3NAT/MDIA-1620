let horseName = "Cuthulador";
//console.log(horseName);
let horseAge = 27;
//console.log(horseAge);
let isHorseInside = true;
//console.log(isHorseInside);

//Lesson 4 code
//console.log(typeof "123") //this is a string because of the ""
let x = 1000000000000;
let y = 1000;
let z = 10;
let a = 1.7976931348623158557 //What is the max number??
const STABLE_MONTHLY_FEE = x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*y*y*z*z*a;
//console.log("The stable will cost $" + (STABLE_MONTHLY_FEE*0.9) + "a month. This is 10% off")
let horseNickname = "Tree Man"
//console.log(`My horses name is "${horseName}" his nickname is ${horseNickname} `);

//console.log("Is my horse inside T/F?")
//console.log(isHorseInside)

//Lesson 6 code
let word = "blarg"
console.log(word.charAt(1-9)) //This will return nothing as it is 8 characters before "Blarg"
let horseNames = [horseName, "Belvgaroth", "Greg", "Danny Devito"];
let horseAges = [horseAge, 210437, 16, 57, 2, 108, 11];
console.log(horseNames.length);
horseNames.push("Grelgador", "Hozeingoth");
console.log(horseNames);
console.log(horseNames.length);
console.log(STABLE_MONTHLY_FEE)
console.log(horseNames[3])
console.log(`Welcome to the den there are ${horseNames.length} eldrich ponys `);
console.log(`Did you know that ${horseNames[5]} is ${horseAges[5]} years old?`);
console.log("My horses are adorable little harbringers of the end times (which are nigh upon us)")
console.log("Is my horse inside T/F?")
console.log(isHorseInside)