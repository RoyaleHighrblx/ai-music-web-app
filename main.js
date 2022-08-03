song_1 = "";
song_2 = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

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

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);

    fill("#FF0000");
    stroke("#FF0000");

if(scoreLeftWrist > 0.2){
    circle(leftWristX,leftWristY,20);
    song_2.stop();

    if(song_1.stop() == false){
        song_1.play();
        song_1 = document.getElementById("song_name").innerHTML = "Harry Potter Theme Song";
}
}


}

function play(){
song_variable.isPlaying();
}

function stop(){
song_variable.stop();
}