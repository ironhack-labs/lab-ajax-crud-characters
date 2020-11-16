const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const charCol = document.getElementsByName("character-id")
    const charArr = [...charCol]
    const id = charArr[0].value
    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const charCol = document.getElementsByName("character-id-delete")
    const charArr = [...charCol]
    const id = charArr[0].value
    charactersAPI.deleteOneRegister(id)
    event.preventDefault()
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const editCharForm = document.getElementById('edit-character-form')
    const data = {
      "id": editCharForm[0].value,
      "name": editCharForm[1].value,
      "occupation": editCharForm[2].value,
      "weapon": editCharForm[3].value,
      "cartoon": editCharForm[4].checked
    }
    console.log(data)
    charactersAPI.updateOneRegister(data.id, data)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const newCharForm = document.getElementById('new-character-form')
    const data = {
      "id": 0,
      "name": newCharForm[0].value,
      "occupation": newCharForm[1].value,
      "weapon": newCharForm[2].value,
      "cartoon": newCharForm[3].checked
    }
    charactersAPI.createOneRegister(data)
    event.preventDefault()
  });
});
