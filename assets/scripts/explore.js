// explore.js

window.addEventListener('DOMContentLoaded', init);
let voices = []

function createList(voices){
  for(let x=0;x<voices.length;x++){
    let option = document.createElement("option")
    option.text = voices[x].voiceURI + " (" + voices[x].lang + ")" 
    option.value=x
    document.querySelector("#voice-select").add(option)
  }
}
function speak(){
  const text = document.querySelector("textarea").value;
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.voice=voices[document.querySelector("#voice-select").value]
  speechSynthesis.speak(utterance);
}
function init() {
  // TODO
  window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
    createList(voices)
  };
  document.querySelector("button").addEventListener("click",speak);
}