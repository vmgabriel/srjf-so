var procesos = 13; //Cantidad de Procesos en el sistema
var onOff = true; // Ejecucion de Pausa/play
var dispatch = false; // Evalua si algo cambio en la lista de procesos
var proceso; // Hilo base

var tiempoGlobalEjecucion = 0; //Tiempo de ejecucion de proceso

// Variables de grafica por defecto
var inicioNombres = 10;
var inicioBarras = 80;
var distanciaEntreProcesos = 20;
var margenProceso = 40;
var anchoBarra = 10;
var distanciaTiempoTexto = 40;
var distanciaEntreBarras = 60;

var myCanvas = document.getElementById("myCanvas");
var myTimeExec = document.getElementById("timeExec");
var myInitTime = document.getElementById("inicioTiempo");
var myCantProcess = document.getElementById("cantidadProcesos");

myCanvas.width = 120;
myCanvas.height = 300;

var ctx = myCanvas.getContext("2d");

// Metodos Base

function tiempo() {
    var d = new Date();
    return d.toLocaleTimeString();
}

// Dibujo Base

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

// Dibujo mas especifico

function lineasTiempo(ctx) {
    var grosorBarra = 2;
    var colorBarra = "#08088A";
    var inicioPintadoBarra = 30;
    var largoBarras = 2000;

    var posicionTexto = 20;

    if (procesos > 11 && dispatch == false) {
        myCanvas.height += (distanciaTiempoTexto*(procesos-11));
        dispatch = true;
    }

    var i=0;
    while (i <= tiempoGlobalEjecucion) {
        dibujarBarra(ctx, inicioBarras+(distanciaEntreBarras*i), inicioPintadoBarra, grosorBarra, largoBarras, colorBarra);
        dibujarTexto(ctx, i, inicioBarras+(distanciaEntreBarras*i), posicionTexto, colorBarra);
        i += 1;
    }
}

// Manejo de Proceso Principal

function arrancarEjecucion() {
    myTimeExec.innerHTML = tiempoGlobalEjecucion;
    myCanvas.width += distanciaEntreBarras;

    lineasTiempo(ctx);

    var temp = 0;
    while (temp < procesos) {
        dibujarTexto(ctx, "Base"+temp,  inicioNombres, margenProceso+((temp+1)*distanciaEntreProcesos), "#08298A");
        dibujarBarra(ctx, inicioBarras, (margenProceso + 10)+(temp*distanciaEntreProcesos), 40, anchoBarra, '#DF0101');
        temp += 1;
    }
    tiempoGlobalEjecucion += 1;
}

function pausar() {
    if (!onOff) {
        // Pausar
        onOff = true;
        clearInterval(proceso);
        myInitTime.innerHTML = "Reanudar Ejecucion";
    } else {
        // Ejecutar
        onOff = false;
        proceso = setInterval(arrancarEjecucion, 1000);
        myInitTime.innerHTML = "Pausar Ejecucion";
    }
}

function detener() {
    onOff = true;
    clearInterval(proceso);
    tiempoGlobalEjecucion = 0;
    myInitTime.innerHTML = "Iniciar Ejecucion";
    myTimeExec.innerHTML = 0;
    dibujarBase(ctx);
}
