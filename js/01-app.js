function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


const santiago = new Cliente('Santiago',400);


// Crear funcion que muestre la información del cliente y Empresas

function mostarInfoCliente(cliente) {
    const {nombre,saldo} = cliente; 
    return `El cliente ${nombre} tiene un saldo de: ${saldo}usd`;
}
function mostarInfoEmpresa(cliente) {
    const {nombre,saldo,categoria} = cliente; 
    return `El cliente ${nombre} tiene un saldo de: ${saldo}usd y pertenece a la categoria: ${categoria}`;
}


console.log(mostarInfoCliente(santiago));


function Empresa(nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const gauchoGrowing = new Empresa('GauchoGrowing LLC',8000,"Marketing");
console.log(mostarInfoEmpresa(gauchoGrowing));