const charactersAPI = new APIHandler('http://localhost:8000/');

const charactersContainer = document.querySelector('.characters-container')

function generateCharacterDOM(character) {
  const characterDOM = document.createElement('div')
  characterDOM.classList.add('character-info')
  characterDOM.innerHTML = `<div class="name">${character.name}</div> <div class="occupation">${character.occupation}</div> <div class="cartoon"> ${character.cartoon ? "It's a Cartoon!" : "Not a Cartoon." }</div> <div class="weapon">${character.weapon}</div>`
  return characterDOM
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then((res) => {
      
      const characters = res.data
      charactersContainer.innerHTML = ""

      characters.forEach(character =>
        charactersContainer.appendChild(generateCharacterDOM(character)))
    })
    .catch(error => console.log(error))
  })
  

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});

