// const inputbox=document.getElementById("input-box");
// const listcontainer=document.getElementById("list-container");

// function addTask(){
//     if(inputbox.value === ''){
//         alert("You must write something!");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputbox.value;
//         listcontainer.appendChild(li);
//         let span=document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span);
//     }
//     inputbox.value = "";
//     savedata();
// }

// listcontainer.addEventListener("click",function(e){
//               if(e.target.tagName === "LI"){
//                 e.target.classList.toggle("checked");
//                 savedata();
//               }
//               else if(e.target.tagName === "SPAN"){
//                 e.target.parentElement.remove();
//                 savedata();
//               }
// },false);

// function savedata(){
//     localStorage.setItem("data",listcontainer.innerHTML);
// }

// function showTask(){
//     listcontainer.innerHTML= localStorage.getItem("data");
// }

// showTask();


const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value.trim() === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // '×'
    li.appendChild(span);
  }

  inputbox.value = "";
  savedata();
  updateTaskCount();
}

// Add task when Enter is pressed
inputbox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Task click handler
listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
    updateTaskCount();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
    updateTaskCount();
  }
}, false);

// LocalStorage save
function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

// Show saved tasks
function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data") || "";
  updateTaskCount();
}

// Clear all tasks
function clearAll() {
  listcontainer.innerHTML = "";
  savedata();
  updateTaskCount();
}

// Update total & completed tasks
function updateTaskCount() {
  const tasks = listcontainer.querySelectorAll("li");
  const completed = listcontainer.querySelectorAll("li.checked").length;
  document.getElementById("task-count").innerText =
    `Total: ${tasks.length} | Completed: ${completed}`;
}

showTask();
