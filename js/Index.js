
let cuota3 = 1.28
let cuota6 = 2.28
let cuota12 = 3.28
let iva = 1.24

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


function sumaIva(productos){
    productos *= iva
    return productos 
}


let prod1 = parseFloat(prompt("Ingrese el valor del producto"))
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
document.write("El valor total de los productos ", + valorTotal)













