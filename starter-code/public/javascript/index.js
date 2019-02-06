const charactersAPI = new APIHandler ('http://localhost:8000');

$ (document).ready (() => {
  document.getElementById ('fetch-all').onclick = function () {
    var characterList = [];
    charactersAPI.getFullList ().then (data => {});
  };

  document.getElementById ('fetch-one').onclick = function (e) {
    e.preventDefault ();

    let elementID = {
      id: document.querySelector('input[name=character-id]').value
    }
    charactersAPI.getOneRegister(elementID.id)
  };

  document.getElementById ('delete-one').onclick = function (e) {
    e.preventDefault ();

    let userDeleted = {
      id: document.querySelector('input[name=character-id-delete]').value
    }
    charactersAPI.deleteOneRegister(userDeleted.id)

  };

  document.getElementById ('edit-character-form').onsubmit = function (e) {
    e.preventDefault ();

    let payload = {
      id: document.querySelector('#edit-character-form input[name=chr-id]').value,
      name: document.querySelector ('#edit-character-form input[name=name]').value,
      occupation: document.querySelector ('#edit-character-form input[name=occupation]').value,
      weapon: document.querySelector ('#edit-character-form input[name=weapon]').value,
      cartoon: document.querySelector ('#edit-character-form input[name=cartoon]').checked,
    }
    charactersAPI.updateOneRegister(payload.id, payload);
  };

  document.getElementById ('new-character-form').onsubmit = function (e) {
    e.preventDefault ();

    let payload = {
      name: document.querySelector ('#new-character-form input[name=name]').value,
      occupation: document.querySelector ('#new-character-form input[name=occupation]').value,
      weapon: document.querySelector ('#new-character-form input[name=weapon]').value,
      cartoon: document.querySelector ('#new-character-form input[name=cartoon]').checked,
    };
    charactersAPI.createOneRegister (payload);
  };
});
