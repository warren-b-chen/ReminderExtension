let task_data = {};
let task_names = [];
const CURR_DATE = new Date();
const NEXT_WEEK = new Date();
NEXT_WEEK.setDate(CURR_DATE.getDate() + 7)


if(localStorage.length != 0){
  task_names = Object.keys(localStorage);

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

const weekly_reminders = document.getElementById("weeklies");
const daily_reminders = document.getElementById("dailies")
//problem: calling createTaskRow/Data for each attrib of task obj

//call 2x createTaskData - append to <tr> - append to table
let task_data_length = Object.keys(task_data).length;

//append to daily tasks
/*for(let i=0; i<task_data_length; i++){
  let dailies = getDailyTasks(Object.values(task_data)[i].date);
  if(dailies === true){
    let newDaily = document.createElement('td')
    newDaily.textContent = Object.keys(task_data)[i];
    daily_reminders.appendChild(newDaily);
  }
  else{
    console.log(getWeeklyTasks(Object.values(task_data)[i].date))
  }
}*/

//append to tasks
for(let i=0; i<task_data_length; i++){
  let weeklies = getWeeklyTasks(Object.values(task_data)[i].date);
  if(weeklies === true){
    let newWeekly = document.createElement('td')
    newWeekly.textContent = Object.keys(task_data)[i];
    weekly_reminders.appendChild(newWeekly);
  }
  else if(weeklies == "daily"){
    let newDaily = document.createElement('td');
    newDaily.textContent = Object.keys(task_data)[i];
    daily_reminders.appendChild(newDaily);
  }
  else{
    console.log(getWeeklyTasks(Object.values(task_data)[i].date))
  }
}

function createTaskRow(task){
  const taskRow = document.createElement('tr');
  return(taskRow)
}

function createTaskData(data){
  const taskData = document.createElement('td');
  taskData.textContent = data;
  return(taskData)
}

function getWeeklyTasks(task){
  let task_date = new Date(task)
  if(task_date == "Invalid Date"){
    return("daily")
  }
  if(CURR_DATE<=task_date && task_date <= NEXT_WEEK){
    return(true)
  }
  else{
    return(false)
  }
}

function deleteButton(){
  let del_btn = document.createElement("button");
  del_btn.textContent = "Delete Reminder";
  del_btn.addEventListener('click', confirmation)
}

function confirmation(task){
  let confirm_msg = `Confirm deleting ${task}?`;
  if(confirm(confirm_msg) == true){
    removeTask
  }
  else{
    confirm_msg = "Reminder not cancelled"
  }
}
function taskReminderAlert(task_name){
  
  alert(`Reminder: ${task_name}`);
}


/*function appendTable(task){
  let new_row = createTaskRow([task]);
  let new_entry = createTaskData([task]);
  new_row.appendChild(new_entry);
  table.appendChild(new_row);
}*/