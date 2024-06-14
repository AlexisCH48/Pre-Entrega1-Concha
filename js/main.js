//calculadora de precios y descuento

//definir variable nomrbe del cliente 
let nombreCliente = prompt('Ingrese su nombre y apellido: (Para Salir escriba ESC)');

//validación del nombre
while (nombreCliente != 'ESC'){

    //Selección de productos
    let tipoProducto = 'Seleccione el producto que desea comprar (15% de descuentos por compras mayores a 4 unidades)\n\n';
    tipoProducto += '1-Jugos $3000\n';
    tipoProducto += '2-Bebidas $5000\n';
    tipoProducto += '3-Bebidas Alcolicas $7500\n';

    // variable valor producto seleccionado
    let valorProducto = parseInt(prompt(tipoProducto));

    // asignacion de precio 
    if (valorProducto === 1){
        valorProducto = 3000
    }else if (valorProducto === 2){
        valorProducto = 5000
    }else if (valorProducto === 3){
        valorProducto = 7500
    }else  {
        alert ('Opcion no valida ');
        break
    }

    //variable de cantidad de productos
    const cantidadProducto = parseInt(prompt("ingrese la cantidad de productos a comprar"));

    //calculo de la compra (valor x cantidad - descuento)
    function calculoCompra (valorProducto, cantidadProducto){
        if ((valorProducto == 3000 || valorProducto == 5000 || valorProducto == 7500) && cantidadProducto >= 4){
            return (valorProducto * cantidadProducto)*0.85;
        }else if ((valorProducto === 3000 || valorProducto === 5000 || valorProducto === 7500) && cantidadProducto <= 3){
            return valorProducto * cantidadProducto;
        } else {
            return 'Producto no válido';
        }
        
    }
    //variable total de la compra
    let totalAPagar = calculoCompra (valorProducto, cantidadProducto);

    //mensaje con datos de la compra
    alert('Cliente: '+ nombreCliente + '\nValor Producto: $' + valorProducto + '\nCantidad: ' + cantidadProducto + '\nTotal a Pagar: $' + totalAPagar);

    //reinicio del ciclo
    nombreCliente = prompt('Ingrese su nombre y apellido: (Para Salir escriba ESC)');
}


