var randomLetter = function() {
    this.Letras = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

    this.get = function() {
        return this.Letras[Math.floor(Math.random()*this.Letras.length)];
    };
}

var randomNumber = function() {
    this.intervaloRafaga = 10;
    this.intervaloMaxTiempo = 8;
    this.intervaloIdentificador = 9999;

    this.rafaga = function() {
        return Math.floor(1+(Math.random()*this.intervaloRafaga));
    };

    this.identificador = function() {
        return Math.floor(Math.random()*this.intervaloIdentificador);
    };

    this.tiempoInicio = function(base) {
        return Math.floor(base+(Math.random()*this.intervaloMaxTiempo));
    };
}

function generar() {
    var tiempoEjecucion = parseInt(document.getElementById("timeExec").innerHTML);

    var rl = new randomLetter();
    var rn = new randomNumber();

    var nombre = rl.get();
    var id = rn.identificador();
    var rafaga = rn.rafaga();
    var tiempo = rn.tiempoInicio(tiempoEjecucion);

    document.getElementById("txtId").value = id;
    document.getElementById("txtNombre").value = nombre;
    document.getElementById("txtTiempo").value = tiempo;
    document.getElementById("txtRafaga").value = rafaga;
}
