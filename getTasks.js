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
    newWeekly.id = Object.keys(task_data)[i];
    newWeekly.textContent = Object.keys(task_data)[i];
    weekly_reminders.appendChild(newWeekly);
    deleteButton(weekly_reminders, newWeekly.innerHTML, "weekly");
  }
  else if(weeklies == "daily"){
    let newDaily = document.createElement('td');
    newDaily.id = Object.keys(task_data)[i];
    newDaily.textContent = Object.keys(task_data)[i];
    daily_reminders.appendChild(newDaily);
    deleteButton(daily_reminders, newDaily.innerHTML, "daily");
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

function deleteButton(row, task_name, time_interval){
  let del_btn = document.createElement("button");
  del_btn.textContent = "Delete Reminder";
  row.appendChild(del_btn);
  del_btn.addEventListener('click', (event) => {
    confirmation(task_name, time_interval, event);
  });
}

function confirmation(task_name, time_interval, event){
  let confirm_msg = `Confirm deleting '${task_name}'?`;
  if(confirm(confirm_msg) == true){
    removeTask(task_name, time_interval, event)
  }
  else{
    confirm_msg = "Reminder not cancelled"
  }
}

function removeTask(task_name, time_interval, event){
  if (time_interval == "weekly"){
    let rmv_child = document.getElementById(task_name);
    weekly_reminders.removeChild(rmv_child);
    localStorage.removeItem(task_name);
    event.currentTarget.remove();
  }
  else if(time_interval == "daily"){
    let rmv_child = document.getElementById(task_name);
    daily_reminders.removeChild(rmv_child);
    localStorage.removeItem(task_name);
    event.currentTarget.remove();
  }
  else if(time_interval == "yearly"){
    let rmv_child = document.getElementById(task_name);
    yearly_reminders.removeChild(rmv_child);
    localStorage.removeItem(task_name);
    event.currentTarget.remove();
  }
  else if(time_interval == "Intra-daily"){
    let rmv_child = document.getElementById(task_name);
    intra_daily_reminders.removeChild(rmv_child);
    localStorage.removeItem(task_name);
    event.currentTarget.remove();
  }
}

function removeDelBtn(event){
  event.currentTarget.parentElement.remove();
}

function setTaskReminderAlert(task_values){
  if(task_values.time_frame == "daily"){
    let time_interval = task_values.time_interval;
    let converted_interval = time_interval*60*1000;
    let task_name_interval = task_values.task_name;
    task_name_interval = Interval(alert(`Reminder: ${task_values.task_name}`), converted_interval);
  }
  else if(task_values.time_frame == "monthly" || task_values.time_frame == "yearly"){
    let converted_date =  new Date(task_values.date);
    if(CURR_DATE == converted_date){
      alert(`Reminder: ${task_values.task_name}`);
    }
  }
}


/*function appendTable(task){
  let new_row = createTaskRow([task]);
  let new_entry = createTaskData([task]);
  new_row.appendChild(new_entry);
  table.appendChild(new_row);
}*/