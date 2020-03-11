const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function(event) {
    charactersAPI
      .getFullList()
      .then(res => {
        console.log(res.data);
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
        console.log(res.data);
      })
      .catch(error => {
        console.log('Error fetching one character', error);
      });
  });

  document.getElementById('delete-one').addEventListener('click', function(event) {});

  document.getElementById('edit-character-form').addEventListener('submit', function(event) {});

  document.getElementById('new-character-form').addEventListener('submit', function(event) {
    const q = document.querySelector.bind(document);
    const name = q("#new-character-form input[name='name']").value;
    const occupation = q("#new-character-form input[name='occupation']").value;
    const weapon = q("#new-character-form input[name='weapon']").value;
    const cartoon = q("#new-character-form input[name='cartoon']").checked;
    const character = { name, occupation, weapon, cartoon };
    charactersAPI
      .createOneRegister(character)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log('Error fetching one character', error);
      });
  });
});
