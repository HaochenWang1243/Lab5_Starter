// expose.js
const jsConfetti = new JSConfetti()



window.addEventListener('DOMContentLoaded', init);

function setVolume(e){
  let volume = e.target.value;
  let image = document.querySelector("#volume-controls img");
  let audio=document.querySelector("audio");
  
  audio.volume=volume/100;
  if(volume == 0)
    image.setAttribute("src","assets/icons/volume-level-0.svg");
  else if(volume > 0 && volume < 33)
    image.setAttribute("src","assets/icons/volume-level-1.svg");
  else if(volume >= 33 && volume < 67)
    image.setAttribute("src","assets/icons/volume-level-2.svg");
  else
    image.setAttribute("src","assets/icons/volume-level-3.svg");
}

function setHornImage(e){
  let image = document.querySelector("header + img")
  let horn = e.target.value;

  if(horn == "select")
    image.setAttribute("src","assets/images/no-image.png")
  else if(horn == "air-horn")
    image.setAttribute("src","assets/images/air-horn.svg")
  else if(horn == "car-horn")
    image.setAttribute("src","assets/images/car-horn.svg")
  else if(horn == "party-horn")
    image.setAttribute("src","assets/images/party-horn.svg")
}

function setAudio(e){
  let audio=document.querySelector("audio");
  let horn = e.target.value;

  if(horn == "select")
    audio.setAttribute("src","")
  else if(horn == "air-horn")
    audio.setAttribute("src","assets/audio/air-horn.mp3")
  else if(horn == "car-horn")
    audio.setAttribute("src","assets/audio/car-horn.mp3")
  else if(horn == "party-horn")
    audio.setAttribute("src","assets/audio/party-horn.mp3")
}

function playSound(e){
  document.querySelector("audio").play()
  if(document.querySelector("#horn-select").value=="party-horn")
    jsConfetti.addConfetti()
}
function init() {
  // TODO
  let volumeInput = document.querySelector("#volume")
  let horn = document.querySelector("#horn-select")
  let button= document.querySelector("button")

  volumeInput.addEventListener("input",setVolume)
  horn.addEventListener("input",setHornImage);
  horn.addEventListener("input",setAudio)
  button.addEventListener("click",playSound)
}