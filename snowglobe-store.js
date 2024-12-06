/*
You are the owner of a lovely snowglobe store, and today you have a big sale and customers waiting outside.

1) You need to register the age of each customer in line outside, preferrably in an array.
2) Your store has a "setting" object that keeps track of whether there are breakable items inside.
2) If there are breakable items in the store, only customers over the age of 10 are allowed inside. Create a function that handles the following situations:
- If there are breakable items, all your customers over the age of 10 should get a message logging out "Please come in!". Every customer under 10 should get a message logging "Please wait in line!".
- If there are no breakable itmes, console log "Everyone, come inside!".
3) Challenge: Add a setting for the age requirement to enter. By default, it should be 10, but you should be able to change it by invoking a function that accepts the new entry age as an argument. This also means that the age for the notification needs to be updated to match the new entry requirements.
*/

let customers = []; //I'm not confident these people are all humans

function PeopleConstruct(name, age) {
    this.name = name
    this.age = age
}
let human1 = new PeopleConstruct ("Dasher", 12)
let human2 = new PeopleConstruct ("Dancer", 8)
let human3 = new PeopleConstruct ("Prancer", 35)
let human4 = new PeopleConstruct ("Vixen", 23)
let human5 = new PeopleConstruct ("Commet", 4)
let human6 = new PeopleConstruct ("Cupid", 7)
let human7 = new PeopleConstruct ("Donner", 47)
let human8 = new PeopleConstruct ("Blitzen", 16)


customers.push(human1, human2, human3, human4, human5, human6, human7, human8)

let breakableItems = true;

function AgeCheck(){
    let limit = 0;
    for(let singleCustomer of customers){
        if (breakableItems === false){
            console.log ("Everyone come inside and spend money!")
            break;
        }else if(limit === customers.length){
            break;
        } else { 
            if (singleCustomer.age <= 10 && breakableItems === true){
                console.log (`Sorry, ${singleCustomer.name}but your're only ${singleCustomer.age} years old. You need to be at least 10 years old to enter. Please wait in line`)
                limit++
            } else{
                console.log (`you're ${singleCustomer.age} years old, please come in!`)
                limit++
            }
        }
    }
}
AgeCheck();

//Sorry, I don't even know where to start with the challange :(
