alert ("Bienvenido a Colombian Emeralds!")

alert ("Que deseas realizar?")

let menu = Number (prompt(
    "Menú:\n" +
    "1. Ventas"
));

const Producto_1 = 'Anillo de esmeraldas 20k';
const Precio_1 = 2500;
const Producto_2 = 'Aretes de esmeraldas 15k';
const Precio_2 = 3000;
const Producto_3 = 'Pulsera tennis esmeraldas 10k';
const Precio_3 = 10000;

let product = Number(prompt(
    "Que producto deseas comprar?:\n" +
    `1. ${Producto_1}  $${Precio_1.toFixed(2)}\n` +
    `2. ${Producto_2}  $${Precio_2.toFixed(2)}\n` +
    `3. ${Producto_3}  $${Precio_3.toFixed(2)}`
));

while (product < 1 || product > 3 || isNaN(product)) {
    product = Number(prompt(
        "Digite el numero del producto que desea comprar\n" +
        `1. ${Producto_1}\n` +
        `2. ${Producto_2}\n` +
        `3. ${Producto_3}`
    ));
}

let pago = Number(prompt(
    "Pagos:\n" +
    "1. Efectivo\n"
));

let total;

switch (product) {
    case 1 :
        total = Precio_1;
        break;
        case 2 :
            total = Precio_2;
            break;
            case 3 :
                total = Precio_3
                alert("Su pago total sera $" + total.toFixed())
            
}

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

alert("Gracias pr tu compra! Tu pedido sera enviado a la dirección registrada.")

