const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const oneId = document.getElementById("oneInput").value;
    charactersAPI.getOneRegister(oneId)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const deleteId = document.getElementById("deleteInput").value;
    charactersAPI.deleteOneRegister(deleteId)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const editId = document.getElementById("editInput").value;
    const editChar = {
        'name': document.getElementById("editName").value, 
        'occupation': document.getElementById("editOccupation").value, 
        'weapon': document.getElementById("editWeapon").value, 
        'cartoon': document.getElementById("editCartoon").checked
    }
    charactersAPI.updateOneRegister(editId, editChar)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const newChar = {
        'name': document.getElementById("createName").value, 
        'occupation': document.getElementById("createOccupation").value, 
        'weapon': document.getElementById("createWeapon").value, 
        'cartoon': document.getElementById("createCartoon").checked
    }
    charactersAPI.createOneRegister(newChar)
  });
});
