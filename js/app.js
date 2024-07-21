"use strict"

const URLBase="https://swapi.dev/api/"
const endpointPersonaje="people/"
const endpointNave="starships/"
const endpointPelicula="films/"
let pagina=1

let cardContenedorPersonaje=document.querySelector('#card-contenedor-personaje')
let cardContenedorNave=document.querySelector('#card-contenedor-nave')
let cardContenedorPelicula=document.querySelector('#card-contenedor-pelicula')
let anterior=document.querySelector('#anterior')
let siguiente=document.querySelector('#siguiente')


//PERSONAJES
async function mostrarPersonajes(){
  try {
    let response=await fetch(`${URLBase}${endpointPersonaje}?page=${pagina}`)
    .then(response=>response.json())
    .then(data=>cardPersonaje(data.results))
  } catch (error) {
    console.error("Error al mostrar el personaje", error)
  }
}

mostrarPersonajes()

const cardPersonaje=(personajes)=>{
    cardContenedorPersonaje.innerHTML=''
    for(let personaje of personajes){
        const {name,gender,height,mass}=personaje
        cardContenedorPersonaje.innerHTML+=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Género: ${gender}</p>
          <p class="card-text">Altura: ${height} cm</p>
          <p class="card-text">Masa: ${mass} kg</p>
        </div>
      </div>`
        console.log(name)
    }
}


//NAVES
const mostrarNaves=()=>{
  fetch(`${URLBase}${endpointNave}?page=${pagina}`)
  .then(response=>response.json())
  .then(data=>cardNave(data.results))
  .catch(error=>{
      console.error("Error al mostrar las naves", error)
  })
}
mostrarNaves()

const cardNave=(naves)=>{
  cardContenedorNave.innerHTML=''
  for(let nave of naves){
      const {name,model,crew}=nave
        cardContenedorNave.innerHTML+=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Nave: ${name}</h5>
          <p class="card-text">Modelo: ${model}</p>
          <p class="card-text">Cantidad de pilotos: ${crew}</p>
        </div>
      </div>`
      console.log(name)
  }
}


//PELICULAS
const mostrarPeliculas=()=>{
  fetch(`${URLBase}${endpointPelicula}?page=${pagina}`)
  .then(response=>response.json())
  .then(data=>cardPelicula(data.results))
  .catch(error=>{
      console.error("Error al mostrar las películas", error)
  })
}
mostrarPeliculas()

const cardPelicula=(peliculas)=>{
  cardContenedorPelicula.innerHTML=''
  for(let pelicula of peliculas){
      const {title,episode_id,director}=pelicula
        cardContenedorPelicula.innerHTML+=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Título: ${title}</h5>
          <p class="card-text">Episodios: ${episode_id}</p>
          <p class="card-text">Director: ${director}</p>
        </div>
      </div>` 
      console.log(title)
  }
}


//EVENTOS
//Boton Anterior
anterior.addEventListener('click',()=>{
    pagina--
    console.log(pagina)
    mostrarPersonajes()
    mostrarNaves()
    mostrarPeliculas()
})

//Boton Siguiente
siguiente.addEventListener('click',()=>{
    pagina++
    console.log(pagina)
    mostrarPersonajes()
    mostrarNaves()
    mostrarPeliculas()
})


