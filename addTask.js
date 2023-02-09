const add_task = document.querySelector('#enter');
add_task.addEventListener('click', () => {
const task_name = document.querySelector('#task').value;
  addTask(task_name);
  getTask(task_name);
});

function addTask(task){
    console.log(task);
    localStorage.setItem(task, task);
}

function getTask(task){
  let curr_task = localStorage.getItem(task)
}

const timeChosen = document.querySelector('#time-select');
timeChosen.addEventListener('change', displayCalendar());

function displayCalendar(){
  if (timeChosen.target.value === 'daily') {
    document.getElementById('month-container').hidden = true;
    document.getElementById('day-container').hidden = false;
  }
  else {
    document.getElementById('day-container').hidden = true;
    document.getElementById('month-container').hidden = false;
  }
  console.log(timeChosen.value);
}


function clearStorage(){
  localStorage.clear();
}