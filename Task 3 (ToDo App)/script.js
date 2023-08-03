// Store tasks in an array
let tasks = [];

// Function to create a new task
function createTask(taskName) {
    const task = {
        name: taskName,
        completed: false
    };
    tasks.push(task);
    return task;
}

// Function to render tasks
function renderTasks() {
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    // Clear the lists
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    // Loop through tasks array
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            renderTasks();
        });

        // Edit button
        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => {
            const newTaskName = prompt('Enter new task name', task.name);
            if (newTaskName) {
                task.name = newTaskName;
                renderTasks();
            }
        });

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(task.name));
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        if (task.completed) {
            li.classList.add('completed');
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskName = taskInput.value.trim();
    if (taskName) {
        createTask(taskName);
        taskInput.value = '';
        renderTasks();
    }
}

// Add form submit event listener
const todoForm = document.getElementById('todo-form');
todoForm.addEventListener('submit', handleFormSubmit);

// Initial rendering of tasks
renderTasks();