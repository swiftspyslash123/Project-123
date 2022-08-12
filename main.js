difference = 0;
leftWristX = 0;
rightWristX = 0;
textsize = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ADD8E6');
    
    textsize(defference);
    fill('#adcae6');
    text('Rise', 50, 400);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0);
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.   rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}