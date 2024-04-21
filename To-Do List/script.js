const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

console.log(listContainer);
document.getElementById("add-btn").addEventListener("click", addTask);

document.addEventListener("Keydown", (e) => {
    if (e.key.toLowerCase() == "enter") {
        addTask();
    }
});
function addTask() {
    if (inputBox.value == "") {
        alert("You must write something!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        let span = document.createElement("span");
        span.innerHTML = " <i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

//Save Data to Local Storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("Checked");
        saveData();
    } else if (e.target.tagName.toUpperCase() === "SPAN") {
        e.target.parentElement.remove(); 
        saveData();
    }
})

//fetch data from local storage
function showTask() {
    const data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}

showTask();