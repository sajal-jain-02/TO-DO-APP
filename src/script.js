const inputVal = document.getElementById("inputVal")
const btn = document.getElementById("btn")
const taskList = document.getElementById("tasks")

btn.addEventListener("click", () => {
    if(inputVal.value){
        
        const li = document.createElement("li")
        const span = document.createElement("span")
        const deleteBtn = document.createElement("button")
        const checkbox = document.createElement("input")
        const task = inputVal.value
        span.textContent = task
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("delete-btn")
        checkbox.type = "checkbox"
        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(deleteBtn)
        taskList.appendChild(li);
        inputVal.value = ("")

        deleteBtn.addEventListener("click", () => {
            li.remove()
        })

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                span.classList.add("completed");
            } else {
                span.classList.remove("completed");
            }
        })
    }

} )

