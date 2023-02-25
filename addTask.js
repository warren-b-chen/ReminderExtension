let vals = [];
//add task name into vals
/*add_task.addEventListener('click', () => {
const add_task = document.querySelector('#set');
  const task_name = document.querySelector('#task').value;
  task = task_name;
});*/

let scale = document.getElementById("daily-interval");
let scale_val = document.getElementById("val-display");
scale_val.innerHTML = scale.value;
function update_slider(){
  scale_val.innerHTML = scale.value;
}
scale.addEventListener('input', update_slider)

//make time options visible and select timeframe
const timeChosen = document.querySelector('#time-select');
timeChosen.addEventListener('change', (event)=>{
  displayCalendar(event)
});

function timeSet(){
  const timeChosen = document.querySelector('#time-select');
  if(timeChosen.value === "monthly"){
    vals.push("monthly")
    getTime("month")
    let repeat = document.getElementById("monthly-rpt").checked;
    getRepeat(repeat, "month");
  }
  else if(timeChosen.value === "yearly"){
    vals.push("yearly")
    getTime("year")
    let repeat = document.getElementById("yearly-rpt").checked;
    getRepeat(repeat, "year");
  }
  else if(timeChosen.value === "daily"){
    vals.push("daily")
    let interval = scale.value;
    vals.push(interval);
    let repeat = document.getElementById("daily-rpt").checked;
    getRepeat(repeat, "daily");
  }
}

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

//Problem: even when form is not filled in properly, vals gets stored in localStorage
function addTask(){
  timeSet();
  if(document.getElementById("form1").checkValidity() && document.getElementById("form2").checkValidity()){
    let task = document.querySelector('#task').value;
    vals.push(task);
    localStorage.setItem(task, JSON.stringify(vals));
    vals = []
  } else{
    console.log("forms invalid")
  }
}

// Problem: tried to call via: displayCalendar(event), which the callback uses the return function
//Solution: call w/: displayCalendar, this actually calls function, also use an anon func to call this func in the event listener and pass event as param
function displayCalendar(thing){
  if (thing.target.value === 'daily') {
    document.getElementById('year-container').hidden = true;
    document.getElementById('month-container').hidden = true;
    document.getElementById('dailies-container').hidden = false;
    document.getElementById('daily-interval').required = true;
  }
  else if(thing.target.value === ""){
    document.getElementById('year-container').hidden = true;
    document.getElementById('month-container').hidden = true;
    document.getElementById('dailies-container').hidden = true;
  }
  else if(thing.target.value==="monthly"){
    document.getElementById('year-container').hidden = true;
    document.getElementById('month-container').hidden = false;
    document.getElementById('month-interval').required = true;
    document.getElementById('dailies-container').hidden = true;
  }
  else if(thing.target.value==="yearly"){
    document.getElementById('year-container').hidden = false;
    document.getElementById('month-container').hidden = true;
    document.getElementById('dailies-container').hidden = true;
  }
};

function clearStorage(){
  localStorage.clear();
}