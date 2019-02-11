var randomLetter = function() {
    this.Letras = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

    this.get = function() {
        return this.Letras[Math.floor(Math.random()*this.Letras.length)];
    };
}

function generar() {
    var id = parseInt(document.getElementById("cantidadProcesos"))+1;
    var nombre = randomLetter.get();
    
}
