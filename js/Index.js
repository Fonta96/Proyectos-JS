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
    listaProductos.push([parseFloat(prompt("Ingrese el valor del producto")), parseFloat(prompt("Cuotas, 3,6 y 12"))])
    let respuesta = parseInt(prompt("Desea agregar otro producto (1 si, 0 no)"))
    if(respuesta === 1) {
        CargaDatos = true 
    }
    else CargaDatos = false 
}
console.warn("Hasta aca nomas papu")

// ciclo forEach de la lista de productos, para agregar el valor de la cuota al producto

listaProductos.forEach(producto => {
    listaProductosCuota.push(revicionCuotas(producto[1],producto[0]))
});

//ciclo forEach que agrega el valor del iva al producto

listaProductosCuota.forEach(producto => {
    listaProductosIva.push(sumaIva(producto))
});

//ciclo forEach que calcula el valor total e imprime el valor de cada producto 

let valorTotal = 0
listaProductosIva.forEach(producto => {
    valorTotal += producto
    document.write("El valor del producto es  ",  + producto + "<br>")
});
document.write("El valor total de los producto es  ",  + valorTotal)








/*let prod1 = parseFloat(prompt("Ingrese el valor del producto"))
let prod1cuotas = parseFloat(prompt("Cuotas, 3,6 y 12"))
let prod2 = parseFloat(prompt("Ingrese valor del producto 2"))
let prod2cuotas = parseFloat(prompt("Cuotas, 3,6 y 12"))
let prod3 = parseFloat(prompt("Ingrese el valor del producto 3"))
let prod3cuotas = parseFloat(prompt("Cuotas, 3,6 y 12"))

prod1 = revicionCuotas(prod1cuotas, prod1)
prod2 = revicionCuotas(prod2cuotas, prod2)
prod3 = revicionCuotas(prod3cuotas, prod3)

prod1 = sumaIva(prod1)
prod2 = sumaIva(prod2)
prod3 = sumaIva(prod3)

let valorTotal = prod1 + prod2 + prod3

document.write("El valor del producto 1 es  ",  + prod1 + "<br>")
document.write("El valor del producto 2 es  ",  + prod2 + "<br>")
document.write("El valor del producto 3 es  ",  + prod3 + "<br>")
document.write("El valor total de los productos ", + valorTotal)*/













