let video; //gain access to the camera 
let poseNet;
let noseX = 0;
let noseY = 0;
let lang = navigator.language || 'en-US'; 
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true; //continuous mode 
let interim = true; //interim results set to false, waits to listen before text

function setup() {
  noCanvas();
  // createCanvas(640, 480);
  video = createCapture(VIDEO); //connect to webcam 
  // video.hide();
  poseNet = ml5.poseNet(video, modelReady); //load posenet model and connect to video 
  poseNet.on('pose', gotPoses); //pose event
  speechRec.start(continuous,interim);//starts listening
}

  function gotSpeech() {
  if(speechRec.resultValue){ //was it successful or not 
  createP(speechRec.resultString);
  }
  }

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    let newX = poses[0].pose.keypoints[0].position.x;
    let newY = poses[0].pose.keypoints[0].position.y;
    noseX = lerp(noseX, newX, 0.5); //nose less jumpy 
    noseY = lerp(noseY, newY, 0.5);
  }
}

function modelReady() { //event callback tells me when its finished loading model
  console.log('model ready');
}


//THIS IS THE WHOLE P5.SPEECH.JS CODE WHICH I WANT TO MERGE WITH THE POSENET ONE
// function draw() {
//   //no background function needed
//   noFill();
//   strokeWeight(3);
//   stroke('yellow');
//   ellipse(noseX, noseY, 200);
// }


// function setup() {
//   noCanvas();
//   let lang = navigator.language || 'en-US'; 
//   let speechRec = new p5.SpeechRec(lang, gotSpeech);
  
//   let continuous = true; //continuous mode 
//   let interim = false; //interim results set to false 
//   speechRec.start(continuous,interim);//starts listening
  
//   function gotSpeech() {
//     if(speechRec.resultValue){ //was it successful or not 
//   createP(speechRec.resultString);
//     }
//   }
//   }
  
//   function draw() {
//     // put drawing code here
//   }
