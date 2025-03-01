const buttons = document.getElementsByClassName("complete-btn");
for(const button of buttons){
    button.addEventListener("click", function(){
        alert('Board Updated Successfully')
        this.disabled = true;
        const submittedAssignment = getInputValueById("total-submission");
        const taskAssign = getInputValueById("total-task");
        const updatedAssignment = submittedAssignment+1;
        const existingAssignment = taskAssign-1;
        document.getElementById("total-submission").innerText =updatedAssignment;
        document.getElementById("total-task").innerText = existingAssignment;
        
    });
}
const submissionEndAlert = document.getElementById("complete-btn").addEventListener("click", function() {
    submissionEndAlert = confirm("Congrates!!! You have completed all the current task");
});

const activityList = document.getElementById("activity-list");
document.getElementById("clear-btn").addEventListener("click", function(){
    activityList.innerText = " ";
})


