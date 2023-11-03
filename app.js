const pokemonContainer = document.querySelector("#pokemonContainer");
const btn = document.querySelector("#next");
const limit = 15;
let offset = 0;

const renderPokemon = function (cartePokemon) {
  const html = `
      <div class="pokemon ${cartePokemon.types[0].type.name}">
          <div class="imgContainer">
              <img src="${cartePokemon.sprites.front_default}" alt=${cartePokemon.name} />
          </div>
          <div class="info">
              <h3 class="name">${cartePokemon.name} id:${cartePokemon.id}</h3>
              <span class="type">Type: <span>${cartePokemon.types[0].type.name}</span></span>
          </div>
      </div>
    `;

  pokemonContainer.insertAdjacentHTML("beforeend", html);
};

async function getPokemon(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();
  console.log(data);
  renderPokemon(data);
}

const getPokemonList = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  );
  //   console.log(response);
  const data = await response.json();
  console.log(data);

  let arr = data.results.map((value) => value.name);
  console.log(arr);
  arr.forEach((item) => {
    console.log(item);
    getPokemon(item);
  });
};

btn.addEventListener("click", getPokemonList);
