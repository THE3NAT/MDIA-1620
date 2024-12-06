/*
Create a simple task management system that will track tasks in different categories: "personal", "work", "urgent", "completed", and "archived". By default, each category starts with 0 tasks. 
The application should allow the user to:

1) Invoke a function that allows them to add a task to their chosen category by passing in the category name. This will increment the task count for that category by 1.
2) Invoke a function that logs each category and the number of tasks in it.
3) Challenge: Invoke a function that calculates the total number of tasks across all categories. Based on the number of tasks, log out a message:
- Less than 5 tasks: "light workload"
- Between 5 and 15 tasks: "moderate workload"
- Between 15 and 25 tasks: "heavy workload"
- More than 25 tasks: "overloaded"
*/

let 
    personal =[],
    work = [],
    urgent = [],
    completed = [],
    archived = [];


function MakeTask(){ 
    
    let persoanlTask = true;
    let workTask = true;
    let urgentTask = true;          //edit this to determine which tasks incriment by 1
    let completedTask = true;
    let archivedTask = true;

    if( persoanlTask === true){
        personal++
    }if (workTask === true){
        work++
    }if (urgentTask === true){
        urgent++
    }if (completedTask === true){
        completed++
    }if (archivedTask === true){
        archived++
    }

}
MakeTask();

    // let personal = 4;
    // let work = 8;
    // let urgent = 1;           // You can use this to check the TotalTasks function since otherwise the max is 5
    // let completed = 4;        // You need to comment out everything above line 44
    // let archived = 6;

function LogTasks(){
    console.log(`You have completed ${personal} personal task(s)!`)
    console.log(`You have completed ${work} work task(s)!`)
    console.log(`You have completed ${urgent} urgent task(s)!`)
    console.log(`You have completed ${completed} completed task(s)!`)
    console.log(`You have completed ${archived} archived task(s)!`)
}
LogTasks()



function TotalTasks(){
    let t = personal + work + urgent + completed + archived

    if (t < 5){
        console.log(`Only ${t} tasks? That's a light workload`)
    } else if ( t > 4 && t < 15){
        console.log(`${t} tasks? That's a moderate workload`)
    } else if ( t > 14 && t < 25){
        console.log(`You have ${t} tasks? Dang yo that's a heavy workload`)
    } else if ( t > 25){
        console.log(`You have ${t} tasks? Good luck bruh`)
    }
}
TotalTasks()


//After finishing the code and looking back, I realize it may have been better to make MakeTask be a loop to allow the logged number to be more than 1
//However I don't want to re-code something that meets all the requirements, just an idea for nest time I suppose.

// TY for the fun puzzle :)