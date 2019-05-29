//declare all variables we need 
let buttons = document.querySelector(".set");
var tom1Audio = new Audio("./sounds/tom-1.mp3"),
  tom2Audio = new Audio("./sounds/tom-2.mp3"),
  tom3Audio = new Audio("./sounds/tom-3.mp3"),
  tom4Audio = new Audio("./sounds/tom-4.mp3"),
  crashAudio = new Audio("./sounds/crash.mp3"),
  kickAudio = new Audio("./sounds/kick-bass.mp3"),
  snareAudio = new Audio("./sounds/snare.mp3");


// add event to container .set with event delegate for buttons
buttons.addEventListener("click", playAudio); //play audio with mouse 
document.addEventListener("keyup", playAudio); //play audio with key



//play audio callback function
function playAudio(e) {
  let textCont;
  if(e.type === 'click') {
    textCont = e.target.textContent;
  }else {
    textCont = e.keyCode;
  }
  switch (textCont) {
    case 'w':case 87:
      animateButton('w');
      tom1Audio.play();
      break;
    case 'a':case 65:
      animateButton('a');
      tom2Audio.play();
      break;
    case 's':case 83:
      animateButton('s');
      tom3Audio.play();
      break;
    case 'd':case 68:
      animateButton('d');
      tom4Audio.play();
      break;
    case 'j':case 74:
      animateButton('j');
      snareAudio.play();
      break;
    case 'k':case 75:
      animateButton('k');
      crashAudio.play();
      break;
    case 'l':case 76:
      animateButton('l');
      kickAudio.play();
      break;
    default:
      return;
  }
}

function animateButton(char) {
  let button = document.querySelector("." + char);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);

}