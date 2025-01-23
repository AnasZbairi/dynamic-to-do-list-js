function addTask() {
    // Get the task text from the input field and trim any extra spaces
    const taskText = taskInput.value.trim();

    // Check if the task text is empty
    if (taskText === "") {
        alert("Please enter a task!"); // Show an alert if the input is empty
        return; // Exit the function early
    }

    // Create a new <li> element for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText; // Set the text content of the <li> to the task text

    // Create a "Remove" button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove'; // Set the button text to "Remove"
    removeButton.className = 'remove-btn'; // Add a class for styling

    // Add an onclick event to the remove button to delete the task
    removeButton.onclick = function () {
        taskList.removeChild(taskItem); // Remove the <li> element from the task list
    };

    // Append the "Remove" button to the <li> element
    taskItem.appendChild(removeButton);

    // Append the <li> element to the task list (<ul>)
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    taskInput.value = '';
}
