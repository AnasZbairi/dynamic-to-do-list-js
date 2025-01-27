document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function() {
            taskList.removeChild(li);
            updateLocalStorage();
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Save the task to Local Storage if save is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to update Local Storage when a task is removed
    function updateLocalStorage() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push(li.textContent.replace('Remove', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Event listener for the "Enter" key in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});
