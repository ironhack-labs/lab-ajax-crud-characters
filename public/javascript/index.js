const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => 
{
  document.getElementById('fetch-all').addEventListener('click', async function (event) {

    charactersAPI
    .getFullList()
    .then((response) => {console.log('All characters:', response)})
    .catch(err => console.error('Error fetching characters:', err))
    
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const characterId = document.getElementById('character-id').value;

    charactersAPI
    .getOneRegister(characterId)
    .then((response) => {console.log('Character:', response)})
    .catch(err => console.error('Error fetching a character:', err))
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const characterId = document.getElementById('character-id-delete').value;
    
    charactersAPI
    .deleteOneRegister(characterId)
    .then((response) => {console.log('Character:', response)})
    .catch(err => console.error('Error deleting character:', err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const characterId = formData.get('chr-id');
    const characterData = {
      name: formData.get('name'),
      occupation: formData.get('occupation'),
      weapon: formData.get('weapon'),
      cartoon: formData.get('cartoon') === 'on',
    };


    charactersAPI
    .updateOneRegister(characterId, characterData)
    .then((result) => 
    {
      console.log("Character updated", result)

      document.getElementById('edit-data').style.backgroundColor = 'green';
    })
    .catch((err) => 
    {
      console.log("Error updating character", err)

      document.getElementById('edit-data').style.backgroundColor = 'red';
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const characterData = {
      name: formData.get('name'),
      occupation: formData.get('occupation'),
      weapon: formData.get('weapon'),
      cartoon: formData.get('cartoon') === 'on',
    };

    charactersAPI
    .createOneRegister(characterData)
    .then((result) => 
    {
      console.log("Character created", result)

      document.getElementById('send-data').style.backgroundColor = 'green';
    })
    .catch((err) => 
    {
      console.log("Error creating character", err)

      document.getElementById('send-data').style.backgroundColor = 'red';
    })
  });
});
