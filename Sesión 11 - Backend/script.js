let personajes;

fetch("http://hp-api.herokuapp.com/api/characters") //Por defecto realiza un GET
.then((resp)=> resp.json())
.then((data)=> personajes = data)

setTimeout(() => {
    personajes.forEach((pers)=>{
        const { name } = pers
        document.write(name + "<br>")
    })
}, 1000);