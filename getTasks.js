let task_data = {};
if(localStorage.length != 0){
  let task_names = Object.keys(localStorage);

  for (let i = 0; i< task_names.length; i++){
    let task_name = task_names[i];
    Object.assign(task_data, {[task_name] : JSON.parse(localStorage.getItem(task_name))});
  }
}
else{
  let task_list = document.getElementById("task-list");
  task_list.innerHTML = "";
  let noTasks = document.getElementById("no-tasks-disp");
  noTasks.hidden = false;
}

const table = document.getElementById("task-details");


function createTaskRow(task){
  const taskRow = document.createElement('tr');
}

function createTaskData(data){
  const taskData = document.createElement('td');
  taskData.textContent = data;
}