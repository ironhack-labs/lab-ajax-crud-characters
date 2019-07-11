const charactersAPI = new APIHandler("http://localhost:8000")


$(document).ready(() => {
  document.getElementById('fetch-all').onclick = (event) => {
    event.preventDefault()
    const cards = document.getElementById('cards');
    cards.innerHTML = '';
    charactersAPI.getFullList()
      .then((answer) => {
        answer.forEach((element) => {
          cards.innerHTML += `<div class="character-info">
            <p class="id">ID: ${element.id}</p>
            <p class="name">Name: ${element.name}</p>
            <p class="occupation">Occupation: ${element.occupation}</p>
            <p class="cartoon">Cartoon? ${element.cartoon}</p>
            <p class="weapon">Weapon: ${element.weapon}</p>
          </div>`;
        });
      });
  };

  document.getElementById('fetch-one').onclick = (event) => {
    event.preventDefault();
    const cards = document.getElementById('cards');
    cards.innerHTML = '';
    const search = document.getElementById('search').value;
    if (search === '') return;
    charactersAPI.getOneRegister(search)
      .then((answer) => {
        cards.innerHTML = `
        <div class="character-info">
            <h3 class="id">ID: ${answer.id}</h3>
            <h3 class="name">Name: ${answer.name}</h3>
            <h3 class="occupation">Occupation: ${answer.occupation}</h3>
            <h3 class="cartoon">Cartoon? ${answer.cartoon}</h3>
            <h3 class="weapon">Weapon: ${answer.weapon}</h3>
          </div>
        `;
      })
      .catch();
  }

  document.getElementById('delete-one').onclick = () => {
    const deleteID = document.getElementById('delete-char').value;
    if (deleteID === '') return;
    charactersAPI.deleteOneRegister(deleteID);
  };

  document.getElementById('edit-character-form').onsubmit = () => {
    const id = document.getElementById('edit-id').value;
    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occup').value;
    const weapon = document.getElementById('edit-weap').value;
    const cartoon = document.getElementById('checkbox').checked;

    charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon);
  };

  document.getElementById('new-character-form').onsubmit = () => {
    const name = document.getElementById('new-name').value;
    const occupation = document.getElementById('new-occup').value;
    const weapon = document.getElementById('new-weap').value;
    const cartoon = document.getElementById('edit-cart').checked;
    if (
      name === ''
      || occupation === ''
      || weapon === ''
    ) return;

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  };
});
