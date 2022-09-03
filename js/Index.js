//Constantes 

const cuota3 = 1.28
const cuota6 = 2.28
const cuota12 = 3.28
const iva = 1.24

//Funcion que calcula el valor del producto despues de las cuotas

function revicionCuotas(cantidadCuotas,precioProducto){

    if (cantidadCuotas === 3) {
        precioProducto *= cuota3
    }
    else if (cantidadCuotas === 6) {
        precioProducto *= cuota6
    }
    else if (cantidadCuotas === 12) {
        precioProducto *= cuota12
    }
    else document.write("Error al cargar la cuota <br>")
    return precioProducto
    
}

//Funcion que comprueba la existencia de un objeto en especifico EJ: 1 objeto llamado Celular.

function existenProducto(){
    let productoABuscar= prompt("Ingrese el producto a buscar:")
    let existe = listaProductos.some ((producto)=> producto.nombre === productoABuscar)
    if(existe) {
        console.log("Se encontro al menos 1",productoABuscar)
    }else{
        console.warn("no se encontro lo que buscaba")
    }
}

//Funcion que calcula el precio del productos con el iva

function sumaIva(productos){
    productos *= iva
    return productos 
}

//Declaracion de listas

let listaProductos = []
let listaCuotas = []
let listaProductosIva = []
let listaProductosCuota = []

//ciclo while del input, lo que ingresa el usuario.

let CargaDatos = true 
while(CargaDatos === true) {
    let nombreProducto = prompt("Ingresa el nombre del producto")
    let precioProducto = parseFloat(prompt("Ingresa el precio del producto"))
    let cuotaProducto = parseFloat(prompt("Ingresa la cuota del producto: 3,6 o 12"))
    const objetoProducto = {
        nombre: nombreProducto,
        precio: precioProducto,
        cuota: cuotaProducto,
    }
    listaProductos.push(objetoProducto)
    //listaProductos.push([parseFloat(prompt("Ingrese el valor del producto")), parseFloat(prompt("Cuotas, 3,6 y 12"))])
    let respuesta = parseInt(prompt("Desea agregar otro producto (1 si, 0 no)"))
    if(respuesta === 1) {
        CargaDatos = true 
    }
    else CargaDatos = false 
}
console.warn("Hasta aca nomas papu")

// ciclo forEach de la lista de productos, para agregar el valor de la cuota al producto

listaProductos.forEach(producto => {
    listaProductosCuota.push(revicionCuotas(producto.cuota,producto.precio))
});

//ciclo forEach que agrega el valor del iva al producto

listaProductosCuota.forEach(producto => {
    listaProductosIva.push(sumaIva(producto))
});

//ciclo forEach que calcula el valor total e imprime el valor de cada producto 

let valorTotal = 0
let contador = 0
listaProductosIva.forEach(producto => {
    valorTotal += producto
    document.write("El valor del " + listaProductos[contador].nombre + " " + producto + "<br>")
        contador++
});
document.write("El valor total de los producto es  ",  + valorTotal)

// Se comprueba si existe un producto

existenProducto()