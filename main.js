lowerlipX = 0;
lowerlipY = 0;

function preload() 
{
lipstick = loadImage(' https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw()
{
image(video, 0, 0, 300, 300);
image(lipstick, lowerlipX, lowerlipY, 30, 30);
}

function take_snapshot() {
save('myFilterImage.png');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results)
        lowerlipX = results[0].pose.lowerlip.x-13;
        lowerlipY = results[0].pose.lowerlip.y-13;
        console.log("lips x = " + lowerlipX);
        console.log("lips y = " + lowerlipY);
    }
}
