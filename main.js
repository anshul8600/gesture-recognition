Webcam.set({
width:350, height:300, image_format:'png', png_quality:90
});
c1=document.getElementById("camera");
Webcam. attach(c1);
function takepic(){
Webcam. snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img id="capturedimage" src="'+data_uri+'"/>';
}
);
}
mymodel = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VVc77Aywf/model.json', modelLoaded);
function modelLoaded(){
console.log("My Model Has Loaded")

}


function speak(){
synth = window.speechSynthesis;
speech1 = "your first gesture is " + pred1;
speech2 = "your second gesture is " + pred2;
x = new SpeechSynthesisUtterance(speech1 + speech2);
synth.speak(x);
}

function predict(){
img = document.getElementById("capturedimage");
mymodel.classify(img, gotResult);

}

function gotResult(error, results){
if(error){
    console.log(error);
}
else{
console.log(results);
document.getElementById("emotionname").innerHTML = results[0].label;
document.getElementById("emotionname2").innerHTML = results[1].label;
pred1 = results[0].label;
pred2 = results[1].label;
speak();

if(results[0].label == "ok")
{
    document.getElementById("emoji1").innerHTML = "&#128076;";
}
if(results[0].label == "hi")
{
    document.getElementById("emoji1").innerHTML = "&#9995;";
}
if(results[0].label == "fist")
{
    document.getElementById("emoji1").innerHTML = "&#9994;";
}

if(results[1].label == "ok")
{
    document.getElementById("emoji2").innerHTML = "&#128076;";
}
if(results[1].label == "hi")
{
    document.getElementById("emoji2").innerHTML = "&#9995;";
}
if(results[1].label == "fist")
{
    document.getElementById("emoji2").innerHTML = "&#9994;";
}














































































































}














































}
