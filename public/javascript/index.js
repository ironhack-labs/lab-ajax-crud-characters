const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList('fetch-all')
    .then((response) => {
      const data = response.data;
  
      data.forEach((character) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div>
        </div>
        `
  
        const target = document.querySelector(".characters-container")
        target.appendChild(div)
      })
    })
    .catch((err) => console.log(err))    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const userInput = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(userInput)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const deleteInput = document.getElementById('character-id-delete').value;
    charactersAPI.getOneRegister(deleteInput);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const editInput = document.getElementById('chr-id').value;
    charactersAPI.getOneRegister(editInput);
    event.preventDefault();
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const newInput = document.getElementById('name').value;
    charactersAPI.getOneRegister(newInput);
    event.preventDefault();
  });
});
