document.addEventListener('click', ()=>{
    const checkBoxes = document.getElementsByClassName('check_box');
    const taskDueDates = document.getElementsByClassName('task_due_date');
    for(let i = 0; i < checkBoxes.length; i++){
        let checkBox = checkBoxes[i];
        let taskDueDate = taskDueDates[i];
        if(checkBox.checked && (taskDueDate.getAttribute('data-value') == checkBox.getAttribute('value'))){
            const value = checkBox.getAttribute('value');
            console.log(value);
            taskDueDate.classList.add('completed');
        }else{
            taskDueDate.classList.remove('completed');
        }
    }
});