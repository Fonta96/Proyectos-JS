//listas
const carritoDeCompras = []
const mensajeBienvenida = ["¡Hola Bienvenidos!", "Hola soy Goku" , "Welcome to the Jungle"]
//declaracion de constantes
const cuota3 = 1.28
const cuota6 = 2.28
const cuota12 = 3.28
const iva = 1.24

//funcion constuctura de los productos

function objProducto(nombre,precio,cuota) {
    this.nombre = nombre
    this.precio = precio
    this.cuota = cuota
    this.precioIva 
}

//FUNCION DEL BUTTON

function cargarProducto(nombre,precio,cuota) {
    carritoDeCompras.push(new objProducto(nombre,precio,cuota))    
}

//Funcion de testeo

function imprimir() {
     carritoDeCompras.forEach( producto => {
        document.write(producto.nombre + " " + producto.precio + " " + producto.cuota + "<br>" )
    });
}

//Funcion que calcula el valor del producto despues de las cuotas

function revicionCuotas(){
    carritoDeCompras.forEach( producto => {
        producto.precioIva = producto.precio 

        if (producto.cuota === 3) {
            producto.precioIva *= cuota3
        }
        else if (producto.cuota === 6) {
            producto.precioIva *= cuota6
        }
        else if (producto.cuota === 12) {
            producto.precioIva *= cuota12
        }
        producto.precioIva *= iva
    });
    
}

//funcion para mensaje de bienvenida
    function msjBienvenida() {
       let numeroRandom = Math.floor(Math.random()*3)
       document.getElementById('MensajeDeBienvenida').innerHTML += mensajeBienvenida[numeroRandom]
    }

//ciclo forEach que calcula el valor total e imprime el valor de cada producto 
function eventHandler(event) {
    if (event.keyCode === 13) {
        revicionCompras()
    }
    else if (event.keyCode === 32) {
        msjUsuario()
    }
    
}

//funcion forEach que calcula el valor total e imprime el valor de cada producto 

function revicionCompras() {
    revicionCuotas()
        let valorTotal = 0
        carritoDeCompras.forEach(producto => {
            valorTotal += producto.precioIva
            document.write("El valor del " + producto.nombre + " Es: " + producto.precioIva + "<br>")
        });
        document.write("El valor total de los producto es  ",  + valorTotal)
}

//funcion para el mensaje del usuario
function msjUsuario() {

    let mensaje = prompt("Escribi tu mensaje aqui.")
    mensaje += "<br>"
    document.getElementById('mensajeUsuario').innerHTML += mensaje
}