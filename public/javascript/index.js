const charactersAPI = new APIHandler('http://localhost:8080');

window.addEventListener('load', () => {

  document
  .getElementById('fetch-all')
  .addEventListener('click', async (event)=> {
    const getAll = await charactersAPI.getFullList();
    console.log(`here is all the characters `, getAll);

  });

  document
  .getElementById("fetch-one")
  .addEventListener('click', async function (event)  {
    const idInput = document.querySelector("#character-id").value;
    const getOne = await charactersAPI.getOneRegister(idInput);
    console.log('One character found ', getOne);

  });

  document
  .getElementById('delete-one')
  .addEventListener('click', async (event) => {
    const idInput = document.querySelector("#character-id-delete").value;
    const deleteId = await charactersAPI.deleteOneRegister(idInput);
    console.log('deleted character ', idInput);


  });

  document
  .getElementById('edit-character-form')
  .addEventListener('submit', function (event) {

  });

  document
  .getElementById('new-character-form')
  .addEventListener('submit', function (event) {

  });
});
