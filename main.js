alert ("Bienvenido a Colombian Emeralds!")

alert ("Que deseas realizar?")

let menu = Number (prompt(
    "Menú:\n" +
    "1. Ventas"
));

while (menu < 1 ||  isNaN(menu)) {
    menu = Number(prompt(
        "Menu:\n" +
        "1. Ventas" 
        
    ));
}


const producto_1 = 'Anillo de esmeraldas 20k';
const precio_1 = 2500;
const producto_2 = 'Aretes de esmeraldas 15k';
const precio_2 = 3000;
const producto_3 = 'Pulsera tennis esmeraldas 10k';
const precio_3 = 10000;

let product = Number(prompt(
    "Que producto deseas comprar?:\n" +
    `1. ${producto_1}  $${precio_1.toFixed(2)}\n` +
    `2. ${producto_2}  $${precio_2.toFixed(2)}\n` +
    `3. ${producto_3}  $${precio_3.toFixed(2)}`
));

while (product < 1 || product > 3 || isNaN(product)) {
    product = Number(prompt(
        "Digite el numero del producto que desea comprar\n" +
        `1. ${producto_1}\n` +
        `2. ${producto_2}\n` +
        `3. ${producto_3}`
    ));
}

let pago = Number(prompt(
    "Pagos:\n" +
    "1. Efectivo\n"
));
while (pago < 1 ||  isNaN(pago)) {
    pago = Number(prompt(
        "Pago:\n" +
        "1. Efectivo" 
        
    ));
}

let total;

switch (product) {
    case 1 :
        total = precio_1;
        break;
        case 2 :
            total = precio_2;
            break;
            case 3 :
                total = precio_3
                break;}
                


const nombre = prompt ("Ingresa tu nombre y apellido");
if(nombre === "" || nombre === null){
    alert("No ingresaste tu nombre");
} else{
    alert("Bienvenido, " + nombre);
};

const direccion = prompt ("Ingresa direccion de envio");
if(direccion === "" || direccion === null){
    alert("No ingresaste una direccion valida");
} else{
    alert("Tu direccion es:," + direccion);
};
const nombreDireccion = prompt("Tu pedido sera enviado a: ");
if( nombreDireccion === "" || nombreDireccion === null){
alert("Hubo un error, vuelve a ingresar tus datos")
} else{
    alert("Gracias por tu compra, tu pedido sera enviado a la direccion ingresada"  +  nombreDireccion);
};

let arrayDatos = [nombre + direccion];
console.log(nombreDireccion.length)
