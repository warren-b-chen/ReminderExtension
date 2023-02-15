const add_task = document.querySelector('#enter');
let vals = []
let taskRepeat = false;

//add task name into vals
add_task.addEventListener('click', () => {
  const task_name = document.querySelector('#task').value;
  vals.push(task_name);
});

//make time options visible and select timeframe
const timeChosen = document.querySelector('#time-select');
timeChosen.addEventListener('change', (event)=>{
  displayCalendar(event)
  getRepeat();
});
  //need to set the repeat (another func?)

//need to get repeat, but also make sure no other checkbox is ticked
function getRepeat(){
  console.log("hi")
}
function addTask(task){
  localStorage.setItem(task, JSON.stringify(vals));
}

function getTask(task){
  let curr_task = localStorage.getItem(task)
}



function displayCalendar(thing){
  if (thing.target.value === 'daily') {
    document.getElementById('year-container').hidden = true;
    document.getElementById('month-container').hidden = true;
    document.getElementById('dailies-container').hidden = false;
  }
  else if(thing.target.value === ""){
    document.getElementById('year-container').hidden = true;
    document.getElementById('month-container').hidden = true;
    document.getElementById('dailies-container').hidden = true;
  }
  else if(thing.target.value==="monthly"){
    document.getElementById('year-container').hidden = true;
    document.getElementById('month-container').hidden = false;
    document.getElementById('dailies-container').hidden = true;
  }
  else if(thing.target.value==="yearly"){
    document.getElementById('year-container').hidden = false;
    document.getElementById('month-container').hidden = true;
    document.getElementById('dailies-container').hidden = true;
  }
  //need to get time values into val
  vals.push(thing.target.value);
};

 // Problem: tried to call via: displayCalendar(event), which the callback uses the return function
  //Solution: call w/: displayCalendar, this actually calls function


function clearStorage(){
  localStorage.clear();
}