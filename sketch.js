function setup() {
noCanvas();
let lang = navigator.language || 'en-US'; 
let speechRec = new p5.SpeechRec(lang, gotSpeech);

let continuous = true; //continuous mode 
let interim = false; //interim results set to false 
speechRec.start(continuous,interim);//starts listening

function gotSpeech() {
  if(speechRec.resultValue){ //was it successful or not 
createP(speechRec.resultString);
  }
}
}

function draw() {
  // put drawing code here
}
