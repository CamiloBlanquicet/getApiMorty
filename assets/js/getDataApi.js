console.log("rick and morty api");


const url = "https://rickandmortyapi.com/api/character";

function getData(api) {

    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            mostrarDatos(json)
        })
        .catch((error) => {
            console.log("Error ......", error)
        })


}

function mostrarDatos(data) {

    var html = "";

    data.results.forEach(pesonaje => {

        console.log("......................");
        console.log("Nombre " + pesonaje.name);
        console.log("Nombre " + pesonaje.species);
        console.log("Nombre " + pesonaje.gender);
        console.log("Nombre " + pesonaje.image);
        html += `<div class="card" style="width: 18rem;">`
        html += `<img src="${pesonaje.image}" class="card-img-top" alt="..."> `
        html += `<div class="card-body">`
        html += `<h5 class="card-title">Nombre: ${pesonaje.name}</h5>`
        html += `</div>`
        html += `<ul class="list-group list-group-flush">`
        html += `<li class="list-group-item">${pesonaje.species}</li>`
        html += `<li class="list-group-item">${pesonaje.gender}</li>`
        html += `</ul>`
        html += `</div>`

    });
    document.getElementById("datosPersonaje").innerHTML = html;

}
getData(url);