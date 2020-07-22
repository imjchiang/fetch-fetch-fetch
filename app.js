let container = document.querySelector(".container");
let body = document.querySelector("body");

fetch("https://pokeapi.co/api/v2/pokemon/lickitung")
.then(response =>
{
    console.log(response);
    return response.json();
})
.then(data =>
{
    console.log(data);
    let sprites = data.sprites;
    let frontDefault = sprites.front_default;
    let pokeName = data.name;
    let height = data.height;
    let weight = data.weight;
    let moves = data.moves;
    let lick = moves[42].move.name;
    let type = data.types[0].type.name


    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "272px";
    card.style.margin = "5px";
    card.style.backgroundColor = "silver";
    card.style.border = "10px solid yellow";
    body.appendChild(card);

    let title = document.createElement("h1");
    title.textContent = pokeName.toUpperCase().slice(0, 1) + pokeName.slice(1, 9);
    title.classList.add("card-img-top");
    title.style.margin = "15px";
    title.style.marginBottom = "0px";
    title.style.fontSize = "25px";
    title.style.fontFamily = "Arial";
    
    card.appendChild(title);

    let spriteImg = document.createElement("img");
    spriteImg.classList.add("card-img-top")
    spriteImg.style.width = "220px";
    spriteImg.style.height = "175px";
    spriteImg.style.objectFit = "cover";

    spriteImg.style.border = "6px solid yellow";
    spriteImg.style.margin = "15px";
    spriteImg.style.marginTop = "0px";
    spriteImg.style.backgroundColor = "mediumPurple";
    spriteImg.setAttribute("src", frontDefault);
    
    card.appendChild(spriteImg);

    
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);


    let content = document.createElement("p");
    content.classList.add("card-text");
    content.textContent = lick;
    cardBody.appendChild(content);

})