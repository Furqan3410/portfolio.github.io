let taskList = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  taskList.push(taskText);
  taskInput.value = '';
  renderTasks();
}

function updateTask(index) {
  const updatedTaskText = prompt('Update task:', taskList[index]);

  if (updatedTaskText === null) {
    return;
  }

  taskList[index] = updatedTaskText.trim();
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskListElement = document.getElementById('taskList');
  taskListElement.innerHTML = '';

  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="updateTask(${index})" id="Update">Update</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskListElement.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', renderTasks);
