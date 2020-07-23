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
    title.style.fontSize = "18px";
    title.style.fontWeight = "bold";
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
    spriteImg.style.marginBottom = "0px";
    spriteImg.style.backgroundColor = "mediumPurple";
    spriteImg.setAttribute("src", frontDefault);
    
    card.appendChild(spriteImg);

    let spriteInfo = document.createElement("p");
    spriteInfo.classList.add("card-img-top");
    spriteInfo.style.width = "220px";
    spriteInfo.style.border = "6px solid yellow";
    spriteInfo.style.marginTop = "0px";
    spriteInfo.style.marginLeft = "15px";
    spriteInfo.style.paddingLeft = "17%";       //lazy way of doing it
    spriteInfo.style.position = "relative";
    spriteInfo.style.top = "-6px";
    spriteInfo.textContent = "NO. 108  Licking Pokemon  HT: " + height + "  WT: " + weight;
    spriteInfo.style.fontSize = "7px";

    card.appendChild(spriteInfo);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.style.paddingTop = "0";
    card.appendChild(cardBody);

    let content0 = document.createElement("p");
    content0.classList.add("card-text");
    content0.textContent = lick.toUpperCase().slice(0, 1) + lick.slice(1, 9);
    content0.style.fontSize = "12px";
    content0.style.fontWeight = "bold";
    content0.style.marginBottom = "0px";
    cardBody.appendChild(content0);

    let content1 = document.createElement("p");
    content1.classList.add("card-text");
    content1.textContent = "Flip a coin. If heads, your opponent's Active Pokemon is now Paralyzed.";
    content1.style.fontSize = "8px";
    content1.style.marginTop = "0px";
    cardBody.appendChild(content1);

    let content2 = document.createElement("p");
    content2.classList.add("card-text");
    content2.textContent = "Type: " + type.toUpperCase().slice(0, 1) + type.slice(1, 9);
    cardBody.appendChild(content2);
})