const charactersAPI = new APIHandler('http://localhost:8000');
const inputSearchID = document.querySelector("input[name=character-id]");
const idToDelete = document.querySelector("input[name=character-id-delete]");


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
      charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
      // funktioniert weil im html ein leeres 'value' definiert ist
      charactersAPI.getOneRegister(inputSearchID.value );
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
        const id = idToDelete.value;
        charactersAPI.deleteOneRegister(id);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const idToChange = document.querySelector("input[name=chr-id]");
        const id = idToChange.value;
        const name = document.querySelector("#edit-character-form [name=name]");
        const nameVal = name.value;
        console.log(nameVal)
        const occupation = document.querySelector("#edit-character-form [name=occupation]");
        const weapon = document.querySelector("#edit-character-form[name=weapon]");
        const cartoon = document.querySelector("#edit-character-form [name=cartoon]");
        let data = {name: nameVal  , occupation: occupation.value , weapon: weapon.value, cartoon: cartoon.value};
        
        console.log(data);
        charactersAPI.updateOneRegister(id, data );
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
