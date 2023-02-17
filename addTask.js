let vals = []
let taskRepeat = false;

//add task name into vals
const add_task = document.querySelector('#enter');
add_task.addEventListener('click', () => {
  const task_name = document.querySelector('#task').value;
  vals.push(task_name);
});

//make time options visible and select timeframe
const timeChosen = document.querySelector('#time-select');
timeChosen.addEventListener('change', (event)=>{
  displayCalendar(event)
});

const monthTimeSet = document.querySelector("#month-interval");
const yearTimeSet = document.querySelector('#year-interval');
const monthSetButton = document.getElementById("month-set");
const yearSetButton = document.getElementById("year-set");
monthSetButton.addEventListener('click', ()=>{
  getTime("month")
  let repeat = document.getElementById("monthly-rpt").checked;
  getRepeat(repeat, "month");
  console.log(vals)
});
yearSetButton.addEventListener('click', ()=>{
  getTime("year")
  let repeat = document.getElementById("yearly-rpt").checked;
  getRepeat(repeat, "year");
});

function getTime(time){
  const date = document.querySelector(`#${time}-interval`);
  vals.push(date.value);
}

//need to get repeat, but also make sure no other checkbox is ticked
function getRepeat(checked, time){
  if (checked === false){
    return;
  }
  else{
    vals.push("repeat")
  }
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
//Solution: call w/: displayCalendar, this actually calls function, also use an anon func to call this func in the event listener and pass event as param

function clearStorage(){
  localStorage.clear();
}