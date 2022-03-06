song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

scoreRightWrist = 0;
socreLeftWrist = 0;

rightWristX = 0 ;
leftWristY = 0;

leftWristX = 0;
rightWristY = 0;

function prelaod(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " rightWristY = " + scoreLefttWrist);

        rightWristX = results[0].poseWrist.x;
        rightWristY = results[0].poseWrist.y;
        console.log("rightWristX = " + rightWrist + "rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = " + leftWrsitX + "LeftWristY = " + leftWristY)


    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    song1_status = song1.play();
    song2_status = song2.play();

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist> 0.2)
    {
        ciricle(rightWristX,rightWristY,20);
        song1.stop();
        if(song1_status == false)
        {
            song1.play();
            document.getElementById("song").innerHTML ="playing-Harry Potter Theme Song";

    }
}

if(scoreLeftWrist> 0.2)
{
    ciricle(leftWristX,leftWristY,20);
    song2.stop();
    if(song2_status == false)
    {
        song2.play();
        document.getElementById("song").innerHTML ="playing-Peter Pan Theme Song";
        
}
}


function play() {
    song1.play();
    song.setVolume(1);
    song.rate(1);
}
}
