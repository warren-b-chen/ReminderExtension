const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//const dbService = require('./dbService');

app.use(cors()); //when we have incoming API call, it won't be blocked and we can send data to backend
app.use(express.json()); //send it in JSON format
app.use(express.urlencoded({ extended : false }));

app.get('/getAll', (request, response)=>{
  console.log("test")
})

app.listen(process.env.PORT, () => console.log("app is running"));




/*import { createPicker } from 'picmo';

window.addEventListener("DOMContentLoaded", () => {
  console.log("Hi")
  const picker = new EmojiButton();
  const trigger = document.querySelector('.holder, .icon');

  trigger.addEventListener('click', () => {
    picker.togglePicker(trigger)
  })

  picker.on('emoji', selection => {
    trigger.innerHTML = selection.emoji;
  })
});*/

