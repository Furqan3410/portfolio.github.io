const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="editTask(this)" id="Edit">Edit</button>
    <button onclick="deleteTask(this)" id="Delete">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function editTask(editButton) {
  const li = editButton.parentElement;
  const taskText = li.querySelector('span').textContent;

  const editedTask = prompt('Edit task:', taskText);

  if (editedTask === null || editedTask.trim() === '') {
    return;
  }

  li.querySelector('span').textContent = editedTask.trim();
}

function deleteTask(deleteButton) {
  const li = deleteButton.parentElement;
  li.remove();
}
