// const form = document.getElementById("form")
// const btn = document.getElementById("btn")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const numero1 = document.getElementById("num1").value
//     const numero2 = document.getElementById("num2").value

//     mostraResta(resta, numero1, numero2)
//     // console.log(calcularResta())
// })

// form.addEventListener("submit", (e)=> mostrar(e))

// function mostrar(e){
//     e.preventDefault()
//     const numero1 = document.getElementById("num1").value
//     const numero2 = document.getElementById("num2").value

//     mostraResta(resta, numero1, numero2)
// }

// const calcularResta = (num1, num2 = 10) => ({nombre: "Jose", apellido: "Garcia"})


// function crearCita(cita, funcion){
//     let miCita = "Como yo siempre digo, " + cita;
//     funcion(miCita);
    
// }

// function logCita(cita){
//     console.log(cita)
// }

// crearCita("Come tus Vegetales!", logCita)

// function mostraResta(felix, num1, num2) {
//     let resultado = felix(num1, num2)
//     console.log(`El resultado es ${resultado}`)
// }



// function resta(n1, n2){
//     return (n1 - n2)
// }

// mostraResta(resta, 15, 20)


let arr = ["a", "b", "c", "d", {nombre: "Jose", apellido: "Garcia"}]
let arr2 = ["Jose", "Jorge", "David", "Felix"]
let arr3 = [{nombre: "Jose"}, {nombre: "Jorge"}, { nombre: "David"}, {nombre: "Felix"}]
let arr4 = [ 5, 10, 20, 7, 8, 2]


// forEach con una funcion como expresion
// const f = function(){
//     console.log("Un elemento.")
// }

// arr.forEach(f)

// forEach con funcion anonima
// arr.forEach(function(){
//     console.log("Un Elemento.")
// })

// forEach con una funcion fecha
// arr.forEach(()=> console.log("Un elemento."))

// FOREACH
arr.forEach((elemento, index, array)=>{
    // console.log(elemento, index)
})

// MAP
const newArray = arr2.map((elemento)=> elemento.length)
// console.log(newArray)

// FILTER
const newArray2 = arr3.filter((elemento)=> elemento.nombre.includes("e") || elemento.nombre[0] == "J")
// console.log(newArray2)

// REDUCE
arr4.reduce((p, e)=> {
    // console.log(`p=${p} e=${e}`)
    return p - e
})

const keys = [...arr2.keys()]
console.log(keys)

const values = [...arr2.values()]
console.log(values)

const entries = [...arr2.entries()]
console.log(entries)