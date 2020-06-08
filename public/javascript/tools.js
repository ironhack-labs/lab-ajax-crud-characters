function buildCard(char) {
  return `
      <div class="char-id"><p>Id: <span>${char.id}</span></p></div>
      <div class="name"><p>Name: <span>${char.name}</span></p></div>
      <div class="occupation"><p>Occupation: <span>${char.occupation}</span></p></div>
      <div class="cartoon"><p>Is a cartoon? <span>${char.cartoon}</span></p></div>
      <div class="weapon"><p>Weapon: <span>${char.weapon}</span></p></div>
    `;
}
function buildManyCards(char) {
  const data = buildCard(char);
  const newDiv = buildNodeELement("div");
  newDiv.innerHTML = data;
  return newDiv;
}

function buildNodeELement() {
  const newDiv = document.createElement("div");
  newDiv.className = "character-info";
  return newDiv;
}

export { buildManyCards, buildCard, buildNodeELement };
