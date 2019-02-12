var listas = function() {
    this.listaProcesos = [];
    this.listaLlegados = [];
    this.listaTerminados = [];

    this.addListaProcesos = function(dato) {
        var valor = false;
        if (this.compararIdProceso(dato.id) == false) {
            this.listaProcesos.push(dato);
            valor = true;
        }
        return valor;
    };

    this.compararIdProceso = function(idComparar) {
        var valor = false;
        this.listaProcesos.forEach(function (elem) {
            if (elem.id == idComparar) {
                valor = true;
            }
        });
        return valor;
    };

    this.cantListaProcesos = function() {
        return this.listaProcesos.length;
    };
}

var todasListas = new listas();

var Proceso = function(_id, _nombre, _tiempo, _rafaga) {
    this.id = _id;
    this.nombre = _nombre;
    this.tiempoInicio = _tiempo;
    this.rafaga = _rafaga;
    this.tiempoComienzo = 0;
    this.tiempoFinal = 0;
    this.tiempoRetorno = 0;
    this.tiempoEspera = 0;

    this.putTableLong = function() {

        return `
            <tr>
              <td>${this.id}</td>
              <td>${this.nombre}</td>
              <td>${this.tiempoInicio}</td>
              <td>${this.rafaga}</td>
              <td>${this.tiempoComienzo}</td>
              <td>${this.tiempoFinal}</td>
              <td>${this.tiempoRetorno}</td>
              <td>${this.tiempoEspera}</td>
            </tr>
        `;
    };

    this.putTableShort = function() {

        return `
            <tr>
              <td>${this.id}</td>
              <td>${this.nombre}</td>
              <td>${this.tiempoInicio}</td>
              <td>${this.rafaga}</td>
            </tr>
        `;
    };

    this.toString = function() {
        return `
              - ${this.id}
              - ${this.nombre}
              - ${this.tiempoInicio}
              - ${this.rafaga}
              - ${this.tiempoComienzo}
              - ${this.tiempoFinal}
              - ${this.tiempoRetorno}
              - ${this.tiempoEspera}
        `;
    };
}

function addToTable(_tabla, valor) {
    var tabla = document.getElementById(_tabla);
    if (todasListas.addListaProcesos(valor) == true) {
        tabla.innerHTML += valor.putTableShort();
        document.getElementById("cantidadProcesos").innerHTML = todasListas.cantListaProcesos();
    } else {
        alert("El ID esta duplicado, no se introducira.");
    }
}

function agregar() {
    var id = document.getElementById("txtId").value;
    var nombre = document.getElementById("txtNombre").value;
    var tiempo = document.getElementById("txtTiempo").value;
    var rafaga = document.getElementById("txtRafaga").value;

    var nProceso = new Proceso(id,nombre,tiempo,rafaga);
    addToTable("processList", nProceso);
}
