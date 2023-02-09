const timeChosen = document.querySelector('#time-select');
timeChosen.addEventListener("change", displayCalendar());

function displayCalendar(){
  if (timeChosen.value === 'daily') {
    document.getElementById('month-container').hidden = true;
    document.getElementById('day-container').hidden = false;
  }
  else {
    document.getElementById('day-container').hidden = true;
    document.getElementById('month-container').hidden = false;
  }
}