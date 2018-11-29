var allButtons = document.querySelectorAll(".drum");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", (event) => {
    playSound(event.target.innerHTML);
  });
}

document.addEventListener("keypress", (event) => {
  playSound(event.key);
});

function playMusic(filename) {
  var sound = new Audio(`sounds/${filename}.mp3`);
  sound.play();
}

function playSound(key) {
  switch (key) {
    case "w":
      playMusic("tom-1")
      break;
    case "a":
      playMusic("tom-2")
      break;
    case "s":
      playMusic("tom-3")
      break;
    case "d":
      playMusic("tom-4")
      break;
    case "j":
      playMusic("snare")
      break;
    case "k":
      playMusic("crash")
      break;
    case "l":
      playMusic("kick-bass")
      break;
    default:
  }
}