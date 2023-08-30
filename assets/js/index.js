
//Get all the checkboxes
const checkBoxes = document.getElementsByClassName('check_box');
//get all the task due date elements
const taskDueDates = document.getElementsByClassName('task_due_date');

// Iterate over all the task due dates
for (let i = 0; i < checkBoxes.length; i++) {
    let checkBox = checkBoxes[i];
    let taskDueDate = taskDueDates[i];
    checkBox.addEventListener('click', () => {
        //update if checkbox is checked 
        if (checkBox.checked && (taskDueDate.getAttribute('data-value') == checkBox.getAttribute('value'))) {
            const value = checkBox.getAttribute('value');
            console.log(value);
            fetch("/toggle-check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: value }),
            });
            //add completed class to the taskDueDate
                taskDueDate.classList.add('completed');
        } else {
            //update if checkbox is uncheced
            const value = checkBox.getAttribute('value');
            console.log(value);
            fetch("/toggle-uncheck", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: value }),
            });
            //remove completed class to the taskDueDate
            taskDueDate.classList.remove('completed');
        }
    });
}