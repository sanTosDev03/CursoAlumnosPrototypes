function Cliente(nombre,saldo,pais) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.pais = pais;
}

// Le asginamos una función que es especifica para los nodos de la funcion padre CLiente
Cliente.prototype.tipoCliente = function() {
    let tipo;
    if(this.saldo > 5000) {
        tipo = "Gold";
    } else if (this.saldo > 2000) {
        tipo = "Platino";
    } else {
        tipo = "Bronce";
    }
    return `${this.nombre} es categoria ${tipo}`;
}   

Cliente.prototype.ClienteInfo = function() {
    return `Nombre cliente: ${this.nombre} - Saldo: ${this.saldo} - País: ${this.pais}`;
}

Cliente.prototype.CurrencyCliente = function() {
    if (this.pais === "Argentina") {
        return `${this.nombre} tiene acceso a ahorro en Peso Argentino, Peso Mexicano, Peso Uruguayo y Peso Chileno`;
    }else if (this.pais === "Mexico") {
        return `${this.nombre} tiene acceso a ahorro en Peso Argentino, Peso Mexicano, Peso Uruguayo, Peso Chileno, Euro, USD y Franco Suizo`;
    } else if (this.pais === "Italia") {
        return `${this.nombre} tiene acceso a ahorro en Peso Argentino, Peso Mexicano, Peso Uruguayo, Peso Chileno, Euro, USD y Franco Suizo`;
    }
}

Cliente.prototype.retirarDinero = function(retiro) {
    this.saldo -= retiro;
}



const sandra = new Cliente("Sandra", 8000, "Italia");
console.log(sandra);
// Sandra es una variable objeto hecha con la funcion constructora CLiente y dentro de los [[Prototypes]] de esta función esta la función tipoCliente(); 
console.log(sandra.ClienteInfo());
console.log(sandra.tipoCliente());
console.log(sandra.CurrencyCliente());
sandra.retirarDinero(1000); // Retiramos 1000 
console.log(sandra.ClienteInfo());


function Empresa(nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const gauchoGrowing = new Empresa('GauchoGrowing LLC',8000,"Marketing"); // No tiene en el [[Prototypes]] la función tipoCliente();
console.log(gauchoGrowing);