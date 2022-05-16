video=""
 var store=[]
 var status=""
function preload(){
    video=createVideo('video.mp4')
    video.hide()
}
 
function setup(){
 Canvas = createCanvas(480,380)
    Canvas.center()
}

function draw(){
image(video,0,0,480,380)
if (status!=""){
    objectdetector.detect(video,gotresult)
    for(i=0;i<store.length;i++)
    {document.getElementById("objects").innerHTML="status:object detected"
    document.getElementById("number").innerHTML="number of objects detected are :"+store.length
    fill("#ff0000")     
    percent=floor(store[i].confidence*100)
    text(store[i].label+""+percent+"%",store[i].x+15,store[i].y+15)
    noFill()
    stroke("#ff0000")
    rect(store[i].x,store[i].y,store[i].width,
        store[i].height)
}
}
}
function gotresult(error,result){
if(error){
console.log(error)
}

    console.log(result)
    store=result
}


function start(){
objectdetector = ml5.objectDetector('cocossd',modelloaded)
document.getElementById("objects").innerHTML="status: detecting objects"
}
function modelloaded(){
    console.log("model loaded")
    status=true
    video.loop()
    video.speed(2)
    video.volume(0)
}