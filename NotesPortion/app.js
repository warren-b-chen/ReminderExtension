import { EmojiButton } from '@joeattardi/emoji-button';

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
});