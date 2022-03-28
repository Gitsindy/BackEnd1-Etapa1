const form = document.getElementById("form")
const tbody = document.getElementById("tbody")
let usuarios = localStorage.getItem("usr") == null ? [] : JSON.parse(localStorage.getItem('usr'))
let count;

ordenar()

function ordenar(){
    if(localStorage.getItem("usr") == null){
        count = 0
    }else{
        usuarios = JSON.parse(localStorage.getItem('usr'))
        let posicion = usuarios.length - 1
        count = usuarios[posicion].id
        console.log(count)
        count++
    }
}

mostrarUsurios()

function Persona(name, lastName, email, age){
    this.id = count
    this.nombre = name;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
}

// Agregar Usuario
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const name = document.getElementById("name").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const age = document.getElementById("age").value
    const newU = new Persona(name, lastName, email, age)
    usuarios.push(newU)
    localStorage.setItem("usr", JSON.stringify(usuarios))
    ordenar()
    mostrarUsurios()
})

// Mostrar Usuarios
function mostrarUsurios(){
    usuarios = localStorage.getItem("usr") == null ? [] : JSON.parse(localStorage.getItem('usr'))
    tbody.innerHTML = "";
    usuarios.forEach((item)=>{
        const { nombre, lastName, email, age, id } = item;
        tbody.innerHTML += `
        <tr class="fila">
        <td class="celda">${nombre}</td>
        <td class="celda">${lastName}</td>
        <td class="celda">${email}</td>
        <td class="celda">${age}</td>
        <button>Editar</button>
        <button onclick="eliminar(${id})">Borrar</button>
        </tr>
        `
    })
}

// Borrar Usuarios
function eliminar(id){
    const newUsuarios = usuarios.filter((item)=> item.id !== id)
    localStorage.setItem("usr", JSON.stringify(newUsuarios))
    ordenar()
    mostrarUsurios()
}

// Actualizar
