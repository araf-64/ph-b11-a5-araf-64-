function getInputValueById (id){
    const submissionValue = document.getElementById(id).innerText;
    const convertedSubmissionValue = parseInt(submissionValue);
    return convertedSubmissionValue;
}