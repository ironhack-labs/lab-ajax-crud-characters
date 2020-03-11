const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function(event) {
    charactersAPI
      .getFullList()
      .then(res => {
        console.log('Fetched all', res.data);
      })
      .catch(error => {
        console.log('Error fetching all', error);
      });
  });

  document.getElementById('fetch-one').addEventListener('click', function(event) {
    const id = document.getElementsByName('character-id')[0].value;
    charactersAPI
      .getOneRegister(id)
      .then(res => {
        console.log('Fetched one', res.data);
      })
      .catch(error => {
        console.log('Error fetching one character', error);
      });
  });

  document.getElementById('delete-one').addEventListener('click', function(event) {
    const id = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI
      .deleteOneRegister(id)
      .then(() => {
        console.log(`Deleted character id ${id}`);
      })
      .catch(error => {
        console.log('Error deleting one character', error);
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const q = document.querySelector.bind(document);
    const id = q("#edit-character-form input[name='chr-id']").value;
    const name = q("#edit-character-form input[name='name']").value;
    const occupation = q("#edit-character-form input[name='occupation']").value;
    const weapon = q("#edit-character-form input[name='weapon']").value;
    const cartoon = q("#edit-character-form input[name='cartoon']").checked;
    const character = { name, occupation, weapon, cartoon };

    charactersAPI
      .updateOneRegister(id, character)
      .then(res => {
        console.log('Edited character', res.data);
      })
      .catch(error => {
        console.log('Error updating a character', error);
      });
  });

  document.getElementById('new-character-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const q = document.querySelector.bind(document);
    const name = q("#new-character-form input[name='name']").value;
    const occupation = q("#new-character-form input[name='occupation']").value;
    const weapon = q("#new-character-form input[name='weapon']").value;
    const cartoon = q("#new-character-form input[name='cartoon']").checked;
    const character = { name, occupation, weapon, cartoon };

    charactersAPI
      .createOneRegister(character)
      .then(res => {
        console.log('Added character', res.data);
      })
      .catch(error => {
        console.log('Error fetching a character', error);
      });
  });
});
