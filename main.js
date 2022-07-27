song_1 = "";
song_2 = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0; 
leftWristY = 0;


function preload(){
song_1 = loadSound("music.mp3");
song_2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    image(video, 0, 0, 300, 300);
}