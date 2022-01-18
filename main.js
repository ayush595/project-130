song1 = "";
song2 = "";
leftwristX = "";
leftwristY = "";

scoreleft= 0;
scoreright= 0;

song1stat= "";
song2stat= "";

rightwristX = "";
rightristY = "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    modelattacher = ml5.poseNet(video, modelLoaded);
    modelattacher.on("pose", gotPoses);
}
function draw() {
    image(video, 0, 0, 500, 500);
fill("grey");
stroke("grey");

song1stat = song1.isPlaying();
song2stat = song2.isPlaying();
if (scoreleft > 0.2) {
    circle(leftwristX, leftwristY , 20);
    song2.stop();
    if (song1stat == false) {
        song1.play();
        document.getElementById("thatoo").innerHTML= "song = harry potter song";

    }
}
if (scoreright > 0.2) {
    circle(rightwristX, rightwristY , 20);
    song1.stop();
    if (song2stat == false) {
        song2.play();
        document.getElementById("thatoo").innerHTML= "song = peter pan song";
        
    }
}
}
function modelLoaded() {
    console.log("model is loaded!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        leftwristY = results[0].pose.leftWrist.y;
        rightwristY = results[0].pose.rightWrist.y;

        scoreleft= results[0].pose.keypoints[9].score;
        scoreright= results[0].pose.keypoints[10].score;
    }
}
function play() {
    song.play();
    song.rate(1);
    song.setVolume(1);
}

