// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // If input is empty, alert user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Set onclick to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the button to the list item and list item to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event to Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event to input field for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
