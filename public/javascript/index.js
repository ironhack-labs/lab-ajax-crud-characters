const charactersAPI = new APIHandler('http://localhost:8000/characters');
let $charactersContainer = document.querySelector('.characters-container')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const data = await charactersAPI.getFullList()
    charactersAPI.displayCharacters(data)
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const $inputID = document.querySelector('#character-id')
    const data = await charactersAPI.getOneRegister($inputID.value)
    document.querySelector('#fetch-one').classList.remove('active', 'wrong')
    if (data) document.querySelector('#fetch-one').classList.add('active');
    else {
      document.querySelector('#fetch-one').classList.add('wrong');
      $inputID.value = ''
      return
    }
    $inputID.value = ''
    charactersAPI.displayCharacters([data])
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const $inputID = document.querySelector('#character-id-delete')
    charactersAPI.deleteOneRegister($inputID.value)
    $inputID.value = ''
    const data = await charactersAPI.getFullList()
    charactersAPI.displayCharacters(data)
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    const $createForm = document.querySelector('#edit-character-form')
    event.preventDefault()
    const {target} = event
    const id = target[0].value
    const name = target[1].value
    const occupation = target[2].value
    const weapon = target[3].value
    const isCartoon = target[4].checked
    charactersAPI.updateOneRegister(id,name,occupation,weapon,isCartoon)
    event.target[0].value = ''
    event.target[1].value = ''
    event.target[2].value = ''
    event.target[3].value = ''
    event.target[4].checked = false
    const data = await charactersAPI.getFullList()
    charactersAPI.displayCharacters(data)
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    const $createForm = document.querySelector("#new-character-form")
    event.preventDefault()
    const { target } = event
    const name = target[0].value
    const occupation = target[1].value
    const weapon = target[2].value
    const isCartoon = target[3].checked
    charactersAPI.createOneRegister(name, occupation, weapon, isCartoon)
    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';
    event.target[3].checked = false;
    const data = await charactersAPI.getFullList()
    charactersAPI.displayCharacters(data)
  });
});
