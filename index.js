const taskInput = document.querySelector('#task-input');
const btn = document.querySelector('#btn');
const addedContaner = document.querySelector('.added-container');

btn.addEventListener('click', function () {
  if (taskInput.value === '') {
    alert('Please enter some task');
    return;
  }

  const newTask = document.createElement('div');
  newTask.classList.add('new-task');

  const li = document.createElement('li');
  li.classList.add('li');
  li.innerText = taskInput.value;
  newTask.appendChild(li);

  const checkbutton = document.createElement('button');
  checkbutton.innerText = 'Done';
  checkbutton.classList.add('check-button');
  newTask.appendChild(checkbutton);

  const trashbutton = document.createElement('button');
  trashbutton.innerText = 'Delete';
  trashbutton.classList.add('trash-button');
  newTask.appendChild(trashbutton);

  addedContaner.appendChild(newTask);

  checkbutton.addEventListener('click', check);
  trashbutton.addEventListener('click', del);
});

function check() {
  const parentDiv = this.parentNode;
  const li = parentDiv.querySelector('li');
  li.classList.toggle('checklist');
}

function del() {
  const parentDiv = this.parentNode;
  parentDiv.parentNode.removeChild(parentDiv);
}
