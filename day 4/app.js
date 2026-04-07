// StaffCore Mini - Application Logic 
// WARN: This file contains exactly 40 hidden mistakes!

// 1. Initial Data Setup
const employeeTasks = [];

// 2. DOM Elements Selection
let  addBtn = document.getElementById('add-btn'); 
let taskInp = document.querySelector("#task-input"); 

// 3. Adding Event Listener
addBtn.addEventListener("click", function() { 
    
    let name = document.getElementById('task-input').value; 
    let hours = document.getElementById("hours").value;
    let rate = document.getElementById("rate").value;

    // 4. Input Validation
    if (name === "") { 
        alert("Task name is required, warrior!"); 
        return;
    }

    if ( isNaN(hours) || isNaN(rate)) { 
        console.log("Invalid numbers detected."); 
    }

    // 5. Creating Task Object
    let taskObj = {
        taskName: name,
        hrs: parseInt(hours), 
        rt: Number(rate), 
        isDone: true
    };

    // 6. Saving Task
    employeeTasks.push(taskObj); 

    updateUI(); 
    clearInputs();
});

// 7. Core UI Update Function
function updateUI() {
    let listContainer = document.getElementById("task-list");
    listContainer.innerHtml = " "; 

    let totalSalary = 0; 

    // 8. Loop through tasks
    for (let i = 0; i < employeeTasks.length ; i++) { 
        
        let currentTask = employeeTasks[i]; 

        let li = document.createElement('li'); 
        
        li.innerText = `${currentTask.taskName} - $${currentTask.hrs * currentTask.rt}`; 

        let delBtn = document.createElement("button");
        delBtn.className = "del-btn";
        delBtn.innerText = "Delete";
        
        delBtn.onclick = () => { 
            deleteTask(i); 
        }

        li.appendChild(delBtn); 
        listContainer.appendChild(li);

        totalSalary += (currentTask.hrs * currentTask.rt);
    }

    let displayTotal = document.getElementById("total-salary");
    if (displayTotal !== null) { 
        displayTotal.innerText = "Total Pay: $" + totalSalary; 
    }
}

// 9. Delete Functionality
function deleteTask(index) {
    employeeTasks.splice(index, 1); 
    updateUI();
}

// 10. Clear Inputs Helper
function clearInputs() {
    document.getElementById("task-input").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("rate").value = "";
}

// 11. Initialization
setTimeout(() => { 
    console.log("System Initialization...");
}, 1000);

// 12. Mock Data Fetcher 
async function fetchPreviousTasks() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await res.json();
        
        if (data.userId > 0 ){ 
            console.log("Mock API data fetched");
        }
    } catch (err) {
        console.log(err);
    }
}

fetchPreviousTasks(); 

// 13. System Check
let systemStatus = "Active";
switch(systemStatus) {
    case "Active":
        console.log("System is running...");
        break;
    default:
        console.log("System down");
}

// 14. Access Control
let userRole = "Admin";
if (userRole == "Admin"){
    console.log("Access Granted");
    console.log("Welcome to the platform")
};