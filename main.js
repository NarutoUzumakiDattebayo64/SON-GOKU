function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 410);
    canvas.position(560, 110)
    reconocimiento = ml5.poseNet(video,modelolisto)
    reconocimiento.on("pose",mostrarresultado)
}
function modelolisto(){
    console.log("!Estoy Listo!")
}
var narizx = 0
var narizy = 0
var distancia = 0
var manoizquierda = 0
var manoderecha = 0
function mostrarresultado(resultados){
if(resultados.length>0){
    narizx = resultados[0].pose.nose.x
    narizy = resultados[0].pose.nose.y
    manoderecha = resultados[0].pose.rightWrist.x
    manoizquierda = resultados[0].pose.leftWrist.x
    distancia = Math.round(manoizquierda-manoderecha)
}
}function draw(){
    document.getElementById("square_side").innerHTML = "el cuadrado mide "+ distancia
    fill("blue")
    stroke("black")
    background("orange")
    square(narizx,narizy,distancia)
}