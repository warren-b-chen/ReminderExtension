document.addEventListener('DOMContentLoaded', ()=>{
  fetch('http://localhost:5500/hi')
  .then(response => response.json())
  .then(jsonObj => {
    let notes = jsonObj.data;
    let note_list = `<ul>`;
    window.notes = [];
    notes.forEach(note=>{
      note_list += ``
    })
  })
});