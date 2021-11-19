Song1 = "";
Song2 = "";

function setup()
{
    canvas = createCanvas(750,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload()
{
   Song1 = loadSound("music.mp3");
   Song2 = loadSound("music2.mp3");
}

function draw()
{
    image(video,0,0,750,600);
}

function play()
{
    Song1.play();
}