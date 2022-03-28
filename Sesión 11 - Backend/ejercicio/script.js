const div = document.getElementById("root")
let colors = ["red", "orange", "blue"]

fetch("http://hp-api.herokuapp.com/api/characters") //Peticion GET
.then((resp)=> {
    return resp.json()
}).then((data)=> {

    data.forEach((personaje)=>{
        num = Math.floor(Math.random() * (3 - 0) + 0)
        const { name, image, house } = personaje;
        
        div.innerHTML += `
        <div class="cards">
        <img src="${personaje["image"]}" alt="" id="img_personaje">
            <div id="datos" class="datos">
                <p id="nombre" class="nombre">${personaje["name"]}</p>
                <p id="escuela" style="color: ${colors[num]}"> ${personaje["house"]}"</p>
            </div>
        </div>
        `
    })
})