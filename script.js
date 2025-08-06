let catImage = document.getElementById("catImage");


let pokemonBtn = document.getElementById("pokemonBtn");

async function getPokemon() {
        let randomNumber = Math.floor(Math.random()* 400) + 1;


        const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
        const response = await fetch(url);
        console.log(url);
        console.log(response);

        const data = await response.json();
        console.log(data);

        let pokemon = data.sprites.back_shiny;

        let img = document.createElement("img");
        img.src = pokemon;
        document.body.appendChild(img);

        
}

pokemonBtn.onclick = function() { 
        getPokemon();
       
}




async function getCats() {
    const url = "https://api.thecatapi.com/v1/images/search";
    const response = await fetch(url);

    const data = await response.json();
    // checks 
    console.log(data);

    let catSrc = data[0].url;
    catImage.src = catSrc;

/*   UNUSED; FOR FUTURE REFERENCE
    let breed = data[0].name;
    breedName.innerHTML = `Breed Name: ${breed} `;
*/



    

}

getCats();

catBtn.onclick = function() {

        getCats();
}

// a bit simple but remember MVP fr