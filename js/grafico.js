var tam_base = 300;
var inicio_nombres = 10;
var inicio_barras = 70;

var myCanvas = document.getElementById("myCanvas");
myCanvas.width = tam_base;
myCanvas.height = tam_base;

var ctx = myCanvas.getContext("2d");

function tiempo() {
    var d = new Date();
    return d.toLocaleTimeString();
}

function dibujarBase(ctx) {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

function dibujarLinea(ctx, startX, startY, endX, endY, color){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();
}

function dibujarBarra(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}

function dibujarTexto(ctx, txt, x, y, stroke_color) {
    ctx.beginPath();
    ctx.strokeStyle = stroke_color;
    ctx.font="bold 15px arial";
    ctx.fillText(txt,x,y);
}

function arrancarEjecucion() {
    myCanvas.width += 10;
    dibujarBase(ctx);
    dibujarBarra(ctx, inicio_barras+10, 10, 50, 10, '#DF0101');
    dibujarTexto(ctx, tiempo(),  3, 20, "#08298A");
}

var myVar = setInterval(arrancarEjecucion, 1000);
