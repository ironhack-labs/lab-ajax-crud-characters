
function renderResponse(charactersArray, subheading) {
    const mainHeading = document.getElementById("main-heading");
    if (document.getElementById("subheading")) {
        document.getElementById("subheading").innerText = ` ${subheading}`;
    } else {
        const subHeading = document.createElement("h5");
        subHeading.setAttribute("id", "subheading");
        subHeading.innerHTML = ` ${subheading}`;
        mainHeading.appendChild(subHeading);
    }
    const charactersContainer = document.getElementById("characters-container");
    charactersContainer.innerHTML = "";
    charactersArray.forEach((character) => {
        charactersContainer.innerHTML += `
        <div class="character-info">
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
            <div>Id: ${character.id}</div>
      </div>`;
    });
}

export { renderResponse };