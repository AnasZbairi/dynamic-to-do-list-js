document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    
    const addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.addEventListener('click', addNewTask);
});

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' to not save again
}

function addTask(taskText, save = true) {
    const taskList = document.getElementById('taskList');
    
    // Create the task list item
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="remove-btn" onclick="removeTask(this)">Remove</button>
    `;
    
    taskList.appendChild(li);
    
    // Save task to Local Storage if `save` is true
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

function addNewTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Clear input field
    }
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskText = button.parentElement.firstChild.textContent.trim();
    
    // Remove task from DOM
    button.parentElement.remove();
    
    // Remove task from Local Storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
