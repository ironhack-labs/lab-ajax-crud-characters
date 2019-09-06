const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = async function () {
    const response = await charactersAPI.getFullList();
    const data = await response.data;

    const all = data
      .map(
        item => `
        <div class="character-info">
          <div class="name">${item.name}</div>
          <div class="occupation">${item.occupation}</div>
          <div class="cartoon">${item.cartoon}</div>
          <div class="weapon">${item.weapon}</div>
        </div>
      `,
      )
      .join('');

    document.querySelector('.characters-container').innerHTML = all;
  };

  document.getElementById('fetch-one').onclick = async function () {
    const id = document.getElementById('character-id').value;

    const response = await charactersAPI.getOneRegister(id);
    const data = await response.data;

    const one = `
        <div class="character-info" key=${data.id}>
          <div class="name">${data.name}</div>
          <div class="occupation">${data.occupation}</div>
          <div class="cartoon">${data.cartoon}</div>
          <div class="weapon">${data.weapon}</div>
        </div>
      `;

    document.querySelector('.characters-container').innerHTML = one;
  };

  document.getElementById('delete-one').onclick = async function () {
    try {
      const id = document.getElementById('character-id-delete').value;
      await charactersAPI.deleteOneRegister(id);

      $('#delete-one').css('background', 'green');
    } catch (err) {
      console.log(err);
      $('#delete-one').css('background', 'red');
    }
  };

  document.getElementById('edit-character-form').onsubmit = function () {
    const id = $('#edit-id').val();
    const name = $('#edit-name').val();
    const occupation = $('#edit-occupation').val();
    const cartoon = $('#edit-cartoon').val();
    const weapon = $('#edit-weapon').val();

    charactersAPI.updateOneRegister(id, name, occupation, cartoon, weapon);
  };

  document.getElementById('new-character-form').onsubmit = function () {
    const name = $('#create-name').val();
    const occupation = $('#create-occupation').val();
    const cartoon = $('#create-cartoon').val();
    const weapon = $('#create-weapon').val();

    charactersAPI.createOneRegister(name, occupation, cartoon, weapon);
  };
});
