const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementsByName("character-id")[0].value);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementsByName("character-id-delete")[0].value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    let obj = {
      "name": document.getElementsByName("name")[1].value,
      "occupation": document.getElementsByName("occupation")[1].value,
      "weapon": document.getElementsByName("weapon")[1].value,
      "cartoon": document.getElementsByName("cartoon")[1].value
    };
    charactersAPI.updateOneRegister(document.getElementsByName("chr-id")[0].value, obj);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    let obj = {
      "name": document.getElementsByName("name")[0].value,
      "occupation": document.getElementsByName("occupation")[0].value,
      "weapon": document.getElementsByName("weapon")[0].value,
      "cartoon": document.getElementsByName("cartoon")[0].value
    };
    charactersAPI.createOneRegister(obj);
  });
});
