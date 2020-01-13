var taskArray = [];
var addTaskToList = document.getElementById('add-task-to-list');
var insertTextButton = document.querySelector('.insert-text-button');
var taskTitleInput = document.querySelector('#task-title-input');
var taskListInput = document.querySelector('#task-item-input');
var placeTaskHere = document.querySelector('.insert-text-space');
var taskCardSpace = document.querySelector('.white-side');
var makeTaskListButton = document.querySelector('#make-task-card');
// var deleteListItemButton = document.getElementById('delete-list-item');
var blueParent = document.querySelector('.blue-side');
var taskId = Date.now();

addTaskToList.addEventListener('click', createTaskList);
makeTaskListButton.addEventListener('click', makeTaskCard);
// blueParent.addEventListener('click', deleteListItem);


function createTaskList(event){
  var taskListValue = taskListInput.value;
  placeTaskHere.insertAdjacentHTML('beforeend', `<div><button id=${taskId} class="delete-list-item"type="submit" name="button"><i class="fa fa-close"></i></button>
  ${taskListValue}</div>`);
  clearTaskInputFields();
}

function clearTaskInputFields(event){
  taskListInput.value = '';
}

// add an event listener around just the tasks
// function deleteListItem(event){
//   var deleteListItemButton = document.querySelectorAll('.delete-list-item');
//   if(event.target === deleteListItemButton){
//     console.log('hey')
//   }
// }

function disableMakeTaskCardButton(){
  if(taskListInput.innerText != "" && taskTitleInput.innerText != ""){
    makeTaskListButton.setAttribute('disabled', 'disabled')
  }
}

function makeTaskCard(event){
  var tasks = placeTaskHere.innerText;
  var taskCardTitle = document.querySelector('#task-title-input').value;
  taskCardSpace.insertAdjacentHTML('beforeend', `<div id=${taskId}><div id='task-card'><h3>${taskCardTitle}</h3><div class="block-list">${tasks}</div><i class="fa fa-flash"></i>
  </div></div>`)
  taskArray.push(tasks)
  window.localStorage.setItem('some-name', `${tasks}`);
  clearTaskList(event);
}



function clearTaskList(event){;
  placeTaskHere.innerText = '';
}
