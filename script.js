async function buscarPokemon() {

    const nomePokemon = document
        .getElementById("input")
        .value
        .toLowerCase();

    const resultado = document.getElementById("resultado");

    if (nomePokemon === "") {
        resultado.innerHTML = "Por favor, digite o nome do Pokémon";
        resultado.style.color = "red";
        resultado.style.fontSize = "1.3rem";
        return;
    }

    resultado.innerHTML = "Carregando...";
    resultado.style.color = "#000";
    resultado.style.fontSize = "1.2rem";

    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
        const response = await fetch(url);
        

        if (!response.ok) {

            throw new Error("Pokemon não encontrado");
            
        }

        const data = await response.json();
        mostrarDados(data);

    }catch (error) {

        resultado.innerHTML = "Pokemon não encontrado";
        resultado.style.color = "red";
        resultado.style.fontSize = "1.3rem";

    }

}

function mostrarDados(pokemon) {

    const resultado = document.getElementById("resultado");

    resultado.style.color = "#000";
    resultado.style.fontSize = "1.2rem";

    resultado.innerHTML = `
    <br>
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p>Tipo: ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
     <p>Altura: ${pokemon.height / 10} m</p>
     <p>Peso:${pokemon.weight / 10} kg</p>
     <p>Habilidades: ${pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
    `;


}
