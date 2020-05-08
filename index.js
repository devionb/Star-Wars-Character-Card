
const sw_characters = document.getElementById('sw_characters');
const sw_numbers = 1000; // gets the first 1000 characters


const fetch_characters = async() =>{
    for(let i =1; i<=sw_numbers; i++){
        await get_characters(i);
    }
}

const get_characters = async id =>{
    const api_url = `https://swapi.dev/api/people/${id}/`; // could also be :id from the documentation
    //const api_url = `http://intergalacticdb.me/api/characters/${id}`;
    const res = await fetch(api_url);
    const characters = await res.json();
    create_sw_characters_card(characters);
}

function create_sw_characters_card(characters){
    const characters_el = document.createElement('div');
    characters_el.classList.add('characters');

    //const name = characters.name[1].toUpperCase() + characters.name.slice(1);

    /*
    const characters_inner_html = `
        <div class="img_container">
            <img src=http://intergalacticdb.me/api/characters/image/${characters.id}.jpg"/>
        </div>
        
    `;

    characters_el.innerHTML = characters_inner_html; */



    const characters_inner_html = `
        <div class ="info">
            <span class="number">#${characters.id.toString().padStart(3,'0')}</span>
            <h3 class="name">${name}</h3>
        </div>
    `;
    sw_characters.appendChild(characters_el);


}

fetch_characters();






/* 
// api url to get info on star wars characters
const api_url = 'https://swapi.dev/api/people/1/'
    async function getName(){
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
    }
    getName();

    */