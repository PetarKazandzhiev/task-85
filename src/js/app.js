import "../scss/app.scss";


function getPokemonInfo () {
  fetch('https://pokeapi.co/api/v2/pokemon')
  .then((res) => {
  res.json();
  })
  .then((data) => {
    console.log(JSON.stringify(data));
    })
}

// window.addEventListener("DOMContentLoaded", async () => {
//   // This block will be executed once the page is loaded and ready

//   console.log("goes in the DOMContentLoaded");

//   let pokemonArray =  [];

//   const requestInput = {
//     method: 'GET',
//     headers: new Headers({
//       'Content-Type': 'application/json',
      
//     }),
//   };


//   fetch('https://pokeapi.co/api/v2/pokemon',requestInput)
//   .then((res) => {
//   res.json();
//   })
//   .then((data) => {
//     console.log(JSON.stringify(data));

//     //must see what the response is before continuing
//     pokemonArray = data;
//     })

//   let ul = document.querySelector("ul");

//   pokemonArray.forEach((element,index) => {
//     let li = document.createElement("li");
//   li.appendChild(document.createTextNode(`${element.name}`));
//   li.setAttribute("id", `element${index}`); // added line
//   ul.appendChild(li);
//   });
  

// });
