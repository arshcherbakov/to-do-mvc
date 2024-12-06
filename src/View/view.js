export const showAllTasks = (listTasks) => {
  const elemetList = document.getElementsByClassName("task-list")[0];

  listTasks.forEach((task) => {
    const li = document.createElement('li');

    li.id = task.id;
    li.style = 'display: flex; align-items: center; gap: 10px;'
    li.innerHTML = `
      <p class="description-text">${task.description}</p>
      <button class="delete-button" style="height: 20px">Удалить</button> 
      <button class="edit-button" style="height: 20px">Изменить</button>
    `;

    elemetList.appendChild(li);
  });
}

export const getDescriptionFromInput = () => {
  const searchInputElemet = document.getElementsByClassName("search-input")[0];

  return searchInputElemet.value;
}

export const getIdTask = (index) => {
  const buttonDelete = document.getElementsByClassName("delete-button")[index];

  if (buttonDelete) {
    const liElement = buttonDelete.closest('li');

    return liElement.id
  }

  return null;
}

export const addTask = (task) => {
  const elemetList = document.getElementsByClassName("task-list")[0];
  const newLi = document.createElement('li');
  newLi.id = task.id;
  newLi.style = 'display: flex; align-items: center; gap: 10px;'

  newLi.innerHTML = `
    <p class="description-text">${task.description}</p>
    <button class="delete-button" style="height: 20px">Удалить</button>
    <button class="edit-button" style="height: 20px">Изменить</button>
  `;

  elemetList.append(newLi);

  const searchInputElemet = document.getElementsByClassName("search-input")[0];
  searchInputElemet.value = '';
}

export const deleteTaskView = (index, nameEvent, event) => {
  const taskId = getIdTask(index);

  const taskElement = document.getElementById(taskId);

  taskElement.removeEventListener(nameEvent, event);
  taskElement.parentNode.removeChild(taskElement);

  return taskId;
}

export const getEditedDescriptionTask = () => {
  const editInput = document.getElementsByClassName("edit-input")[0];

  return editInput.value;
}

export const saveEditView = (taskId, editedTask) => {
  const taskElement = document.getElementById(taskId);

  taskElement.innerHTML = `
    <p class="description-text">${editedTask.description}</p>
    <button class="delete-button" style="height: 20px">Удалить</button>
    <button class="edit-button" style="height: 20px">Изменить</button>
  `;
}

export const cancelEditingView = (taskId, textTask) => {
  const taskElement = document.getElementById(taskId);

  taskElement.innerHTML = `
    <p class="description-text">${textTask}</p>
    <button class="delete-button" style="height: 20px">Удалить</button>
    <button class="edit-button" style="height: 20px">Изменить</button>
  `;
}

export const editTaskView = (taskId) => {
  const taskElement = document.getElementById(taskId);
  const textElement = taskElement.getElementsByClassName("description-text")[0];

  const textTask = textElement.textContent;

  const buttons = taskElement.getElementsByTagName('button');
  buttons[0].style = 'display: none;';
  buttons[1].style = 'display: none;';

  taskElement.innerHTML = `
    <input class="edit-input" placeholder="Название задачи" value="${textTask}" />
    <button class="button-save-edit">Сохранить</button>
    <button class="button-cancel-edit">Отмена</button>
  `;

  return textTask;
}
