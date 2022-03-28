/*=============================================
=           START SECTION | FETCH            =
=============================================*/

/*-- Declaración de IDs --*/
/*----------  START SUBSECTION | Declaración de IDs   ----------*/
let writeName = document.getElementById('pokeGetName');
const pokeIdImg = document.getElementById("pokeShowImg");
const pokeIdName = document.getElementById("pokeShowName");
const pokeIdNameIs = document.getElementById("pokeShowNameIs");
const pokeIdType = document.getElementById("pokeShowType");
const pokeIdStat = document.getElementById("pokeShowStat");
const pokeIdMove = document.getElementById("pokeShowMoves");


const fetchPokemon = () => {
    let showName = writeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${showName}`;
    fetch(url).then((res) => {
        if (res.status != 200) {
            console.log(res);
            pokeGetImage("./assets/404.jpg");
        } else {
            return res.json();
        }
        // console.log(res)
    }).then((data) => {
        // console.log(data);


        /*-- Variables con datos de APIs --*/
        let pokeImg = data.sprites.front_default;
        let pokeName = data.name;
        let pokeType = data.types.map(types => {
            return types.type.name;
        }); //Con .map Saca los tipos de Poquemos, y los mete en un arreglo juntos
        let pokeStat = data.stats;
        let pokeMove = data.moves;
        let pokeMoveTotal = pokeMove.length;


        /*-- Pasando Argumentos a llamando Funciones --*/
        pokeGetImage(pokeImg);
        pokeGetName(pokeName);
        pokeGetNameIs(pokeName);
        pokeGetType(pokeType);
        pokeGetStast(pokeStat);
        pokeGetMove(pokeMoveTotal);
    });
}

fetchPokemon();

// const fetchPokemonColor = () => {
//     let showColor;
//     const url = `https://pokeapi.co/api/v2/pokemon-color`;
// }

/*----------  START SUBSECTION | DECLARACIÓN DE FUNCIONES   ----------*/
const pokeGetImage = (url) => {
    pokeIdImg.src = url;
    // console.log(pokeSrc);
}

const pokeGetName = (name) => {
    pokeIdName.innerHTML = "";
    const node = document.createTextNode(name);
    pokeIdName.appendChild(node);
}

const pokeGetNameIs = (name) => {
    pokeIdNameIs.innerHTML = "";

    const nameIs = document.createElement('p');
    nameIs.innerHTML = `Es... ¡${name}!`

    pokeIdNameIs.appendChild(nameIs);
}

const pokeGetType = (type) => {
    pokeIdType.innerHTML = "";
    
    const node = document.createTextNode(type);
    pokeIdType.appendChild(node);
}

const pokeGetStast = (stat) => {
    // const node = document.createTextNode(stat);

    pokeIdStat.innerHTML = "";

    for (i = 0; i < stat.length; i++) {
        const statName = stat[i].stat.name;
        const statBase = stat[i].base_stat;

        const showData = document.createElement('p');
        showData.innerHTML = `${statName}: ${statBase}`;

        pokeIdStat.appendChild(showData);
        // console.log(`${i} - ${statName} - ${statBase}`);
    }
}

const pokeGetMove = (move) => {
    pokeIdMove.innerHTML = "";

    const node = document.createTextNode(move);
    pokeIdMove.appendChild(node);
}
