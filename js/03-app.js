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



function Persona(nombre,saldo,email) {
    Cliente.call(this, nombre,saldo); // Mandamos a llamar a las variables de la funcion CLiente;
    this.email = email;
}

// Para heredar las funciones debemos hacerlos antes de Instanciar un nuevo objeto
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

Persona.prototype.EmailCliente = function() {
    return `El email de ${this.nombre} es ${this.email}`;
}


// Instanciar objeto
const santiago = new Persona("Santiago",35000,"santiagolescanosjl@gmial.com");
console.log(santiago);
console.log(santiago.ClienteInfo());
console.log(santiago.tipoCliente());
console.log(santiago.EmailCliente());
