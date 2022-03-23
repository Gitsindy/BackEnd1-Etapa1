const btn = document.getElementById("btn");
const cont = document.querySelector("#container");
const input = document.getElementById("input");
const form = document.getElementById("form");

// cont.addEventListener('click', function() {
//     alert("click en el contenerdor")
// })

// input.addEventListener("mouseover", mouse)

// function mouse(){
//     console.log("Evento mouseover")
// }

// cont.addEventListener("mouseout", ()=> console.log("evento mouseout"))

// input.addEventListener("focus", ()=> console.log("Evento focus"))

// input.addEventListener("blur", ()=> console.log("Evento blur"))

// input.addEventListener("keyup", (event)=> {
//     console.log("Se presiono", String.fromCharCode(event.keyCode))
// })

// document.addEventListener("DOMContentLoaded", ()=> console.log("evento DOMContentLoaded"))

// form.addEventListener("submit", (e)=> {
//     e.preventDefault()
//     console.log("evento submit")
// })

// btn.addEventListener("click", ()=> {
//     console.log(input.value)
// })

// OBJETOS

// let propiedad = "altura"

// let ventilador = {
//     altura: "100cm",
//     color: "negro",
//     potencia: "100W",
//     helices: {
//         tamaño: "10cm",
//         material: "plastico",
//         color: "blanco"
//     },
//     precio: {
//         precio1: 20,
//         precio2: 40,
//         casa: {
//             casa1: "La mia",
//             casa2: "La suya"
//         }
//     }
// }

// { } OBJECT
let diasLaborales = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

// for(let i = 0; i < diasLaborales.length; i++){
//     document.write(diasLaborales[i] + "<br>")
//     if(i == 2){
//         break
//     }
// }

diasLaborales.forEach((dias, index)=> {
    document.write(dias + "<br>")
})

// Desestructurar Arreglos toca usar [ ]
let [ primero, segundo ] = diasLaborales

console.log(diasLaborales)




let letras = ["c", "z", "f", "a"]
let mascotas = []

function Perro(nombre, edad, vivo) {
  this.nombre = nombre;
  this.edad = edad;
  this.vivo = vivo;
}

let perro1 = new Perro("FLobby", "8 meses", true);
let perro2 = new Perro("Boby", "1 año", true);
let perro3 = new Perro("Lupe", "1 año", false);

mascotas.push(perro1, perro2, perro3)

// let result = letras.concat(mascotas)
// mascotas.shift()

let result = [letras, mascotas]

// for(let i = 0; i < 3; i++){
//     console.log("Letas " + result[0][i])
//     console.log("Perros "  + result[1][i]);
// }

// console.log(result)

// Desestructurar objetos toca usar { }
// const { nombre, edad, vivo } = perro1;

// console.log(nombre, edad, vivo);


// [ ] ARRAY

let array1 = new Array()

let array2 = []

let array3 = new Array(10)

let array4 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

// console.log(array4.toString())