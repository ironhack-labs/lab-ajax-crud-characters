const charactersAPI = new APIHandler('http://localhost:7000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
   const response = await charactersAPI.getFullList ()
   console.log(response)
   
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const id = document.querySelector("#character").value
    const responseId = await charactersAPI.getOneRegister (id)
    console.log(responseId)


  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const deletedCharacter = document.querySelector("#delete").value
    const deleteResponse = await charactersAPI.deleteOneRegister (deletedCharacter)
    console.log(deleteResponse)
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    const id = document.querySelector("#idEdit").value
    const name = document.querySelector("#nameEdit").value
    const cartoon = document.querySelector("#cartoonEdit").checked
    const occupation = document.querySelector("#occupationEdit").value
    const weapon = document.querySelector("#weaponEdit").value
    const data = {name, cartoon, occupation, weapon};
    const submit = await charactersAPI.updateOneRegister (id ,data)
    console.log(submit)

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    const name = document.querySelector("#nameId").value
    const cartoon = document.querySelector("#cartoonId").checked
    const occupation = document.querySelector("#occupationId").value
    const weapon = document.querySelector("#weaponId").value
    const data = {name, cartoon, occupation, weapon};
    const submit = await charactersAPI.createOneRegister (data)
    console.log(submit)
  });
});
