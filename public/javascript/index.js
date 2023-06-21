const charactersAPI = new APIHandler('http://localhost:8000');
const charactersContainer = document.querySelector('.characters-container')

function appendToCharacterContainer(id, name, occupation, weapon, cartoon){
  const characterInfoDiv = document.createElement('div');
  const idDiv = document.createElement('div');
  const nameDiv = document.createElement('div');
  const occupationDiv = document.createElement('div');
  const cartoonDiv = document.createElement('div');
  const weaponDiv = document.createElement('div');
  characterInfoDiv.className = "character-info"

  idDiv.className = "Id"
  idDiv.innerHTML = "Id:"
  nameDiv.className = "Name"
  nameDiv.innerHTML = "Name:"
  occupationDiv.className = "Occupation"
  occupationDiv.innerHTML = "Occupation:"
  cartoonDiv.className = "cartoon"
  cartoonDiv.innerHTML = "Is a Cartoon?:"
  weaponDiv.className = "weapon"
  weaponDiv.innerHTML = "Weapon:"

  const idSpan = document.createElement("span")
  const nameSpan = document.createElement("span")
  const occupationSpan = document.createElement("span")
  const cartoonSpan = document.createElement("span")
  const weaponSpan = document.createElement("span")

  idSpan.innerHTML = id
  nameSpan.innerHTML = name
  occupationSpan.innerHTML = occupation
  cartoonSpan.innerHTML = cartoon
  weaponSpan.innerHTML = weapon

  idDiv.appendChild(idSpan)
  nameDiv.appendChild(nameSpan)
  occupationDiv.appendChild(occupationSpan)
  cartoonDiv.appendChild(cartoonSpan)
  weaponDiv.appendChild(weaponSpan)

  characterInfoDiv.appendChild(idDiv)
  characterInfoDiv.appendChild(nameDiv)
  characterInfoDiv.appendChild(occupationDiv)
  characterInfoDiv.appendChild(cartoonDiv)
  characterInfoDiv.appendChild(weaponDiv)

  charactersContainer.appendChild(characterInfoDiv)
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then ((character) => {
      const allCharacters = character.data
      charactersContainer.innerHTML = ""
    })
  });

  allCharacters.forEach(character => {
    const {id , name , occupation , weapon, cartoon } = character
    appendToCharacterContainer( id, name, occupation, weapon, cartoon) 
    .catch(err => console.log("Error gettin full list", err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
