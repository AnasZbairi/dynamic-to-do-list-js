document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    console.log('Elements selected:', { addButton, taskInput, taskList });

    function addTask() {
        const taskText = taskInput.value.trim();
        console.log('Task text:', taskText);

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        removeButton.onclick = function () {
            console.log('Removing task:', taskItem);
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            console.log('Enter key pressed');
            addTask();
        }
    });
});
