const buttons = document.getElementsByClassName("complete-btn");
for(const button of buttons){
    button.addEventListener("click", function(){
        alert('Dashboard Updated Successfully')
        this.disabled = true;
        const submittedAssignment = getInputValueById("total-submission");
        const taskAssign = getInputValueById("total-task");
        const updatedAssignment = submittedAssignment+1;
        const existingAssignment = taskAssign-1;
        document.getElementById("total-submission").innerText =updatedAssignment;
        document.getElementById("total-task").innerText = existingAssignment;
        if(existingAssignment === 0){
            alert("Congrates!!! You have completed all the current task")
        }

        // activity log section js
         const card = this.parentNode.parentNode.parentNode;

         const titleElement = card.querySelector(".card-title");
         if (titleElement) {
             const taskText = titleElement.innerText;
 
             const activityList = document.getElementById("activity-list");
             const activityItem = document.createElement("div");

             activityItem.classList.add("p-3", "rounded-xl", "bg-[#f4f7ff]");
             activityItem.innerText = `You have completed the task ${taskText} at ${formattedTime}`;
 
             activityList.appendChild(activityItem);
         }
    });   


}


const activityList = document.getElementById("activity-list");
document.getElementById("clear-btn").addEventListener("click", function(){
    activityList.innerText = " ";
})


// function to set random bg color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("click", function () {
    const button = document.getElementById("theme-btn");
    
    if (button) {
        button.addEventListener("click", function () {
            document.body.style.backgroundColor = getRandomColor();
        });
    }
});

