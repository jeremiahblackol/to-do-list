var addTaskToList = document.getElementById('add-task-to-list');
var insertTextButton = document.querySelector('.insert-text-button');
var taskTitleInput = document.querySelector('#task-title-input');
var taskListInput = document.querySelector('#task-item-input');
var blueParent = document.querySelector('.blue-side');

addTaskToList.addEventListener('click', createTaskList);

function createTaskList(event){
  var placeTaskHere = document.querySelector('.insert-text-space');
  var taskListValue = taskListInput.value;
  // placeTaskHere.innerText = taskListValue;
  placeTaskHere.insertAdjacentHTML('beforeend', `<div id='place-text-here'>${taskListValue}</div>`);
  // placeTaskHere.insertAdjacentElement('beforebegin',`<div>${taskListValue}</div>);


  clearTaskInputFields();
  }

function clearTaskInputFields(event){
  taskListInput.value = '';
}
