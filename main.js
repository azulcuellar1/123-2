difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log ('PoseNet Is Initialize!');
}

function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " +leftWristX +" rightWristX ="+ rightWristX +
        "difference ="+difference );
        }

        }
        function draw(){
            background ('#7FCCDD');
             document.getElementById("font_size").innerHTML= "El tamaño de la fuente es: ="+
             difference +"px";
             textSize(difference);
             fill('#7F88DD');
             text('Azul' ,50,400);
        }