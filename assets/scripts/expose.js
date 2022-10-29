// expose.js

window.addEventListener('DOMContentLoaded', init);

function setVolumeIcon(e){
  let volume = e.target.value;
  let image = document.querySelector("#volume-controls img");
  let audio=document.querySelector("audio");

  audio.setAttribute("volume",volume/100.0);
  if(volume == 0)
    image.setAttribute("src","assets/icons/volume-level-0.svg");
  else if(volume > 0 && volume < 33)
    image.setAttribute("src","assets/icons/volume-level-1.svg");
  else if(volume >= 33 && volume < 67)
    image.setAttribute("src","assets/icons/volume-level-2.svg");
  else
    image.setAttribute("src","assets/icons/volume-level-3.svg");
}

function set
function init() {
  // TODO
  let volumeInput = document.querySelector("#volume")

  volumeInput.addEventListener("input",setVolumeIcon)
}1235452286Abc
1235452286Abc
1235452286Abc