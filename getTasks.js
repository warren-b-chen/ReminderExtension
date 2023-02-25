let task_details = [];

if(localStorage.length != 0){
  const vals = Object.keys(localStorage);
  vals.forEach(value =>
    task_details.push(JSON.parse(localStorage.getItem(value))));
}
else{
  let task_list = document.getElementById("task-list");
  task_list.innerHTML = "";
  let noTasks = document.getElementById("no-tasks-disp");
  noTasks.hidden = false;
}

//[time interval, repeat/empty, int or date time, string (title)]

const table = document.getElementById("task-details");



function createTaskRow(task){
  const taskRow = document.createElement('tr');
}

function createTaskData(data){
  const taskData = document.createElement('td');
  taskData.textContent = data;
}