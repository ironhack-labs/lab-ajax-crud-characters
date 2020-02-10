const charactersAPI = new APIHandler('http://localhost:8000/characters');
const $charactersContainer=document.querySelector('.characters-container')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click',async function (event) {
  event.preventDefault()
  const characters=await charactersAPI.getFullList()
  printAll(characters)
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const id= document.querySelector('input[name="character-id"]').value
    const Character=await charactersAPI.getOneRegister(id)
    document.getElementById('delete-one').style='background:none'
    document.getElementById('send-data2').style='background:none'
    document.getElementById('send-data').style='background:none'
    printAll([Character])
    document.querySelector('input[name="character-id"]').value=""
  });

  document.getElementById('delete-one').addEventListener('click',async function (event) {
    const id= document.querySelector('input[name="character-id-delete"]').value
    document.getElementById('delete-one').style='background:red'
    document.getElementById('send-data2').style='background:none'
    document.getElementById('send-data').style='background:none'
    const res= await charactersAPI.deleteOneRegister(id)
    if (res.statusText='OK') {
    const characters=await charactersAPI.getFullList()
    $boton=document.getElementById('delete-one')
    $boton.style='background:green'
    printAll(characters)
    document.querySelector('input[name="character-id-delete"]').value=""
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit',async function (event) {
    event.preventDefault()
    const character={
      id:document.querySelector('#edit-character-form input[name="chr-id"]').value,
      name:document.querySelector('#edit-character-form input[name="name"]').value,
      occupation:document.querySelector('#edit-character-form input[name="occupation"]').value,
      weapon:document.querySelector('#edit-character-form input[name="weapon"]').value,
      cartoon:document.querySelector('#edit-character-form input[name="cartoon"]').checked
    }
    document.getElementById('send-data2').style='background:red'
    document.getElementById('send-data').style='background:none'
    const res=await charactersAPI.updateOneRegister(character)
    console.log(res)
    if (!res) {
      const characters=await charactersAPI.getFullList()
      $boton=document.getElementById('send-data2')
      $boton.style='background:green'
      printAll(characters)
      document.querySelector('#edit-character-form input[name="chr-id"]').value=""
      document.querySelector('#edit-character-form input[name="name"]').value=""
      document.querySelector('#edit-character-form input[name="occupation"]').value=""
      document.querySelector('#edit-character-form input[name="weapon"]').value=""
      document.querySelector('#edit-character-form input[name="cartoon"]').checked=false
    }
  });

  document.getElementById('new-character-form').addEventListener('submit',async function (event) {
    event.preventDefault()
    const character={
      name:document.querySelector('#new-character-form input[name="name"]').value,
      occupation:document.querySelector('#new-character-form input[name="occupation"]').value,
      weapon:document.querySelector('#new-character-form input[name="weapon"]').value,
      cartoon:document.querySelector('#new-character-form input[name="cartoon"]').checked
    }
    document.getElementById('send-data').style='background:red'
    document.getElementById('delete-one').style='background:none'
    document.getElementById('send-data2').style='background:none'
    const res=await charactersAPI.createOneRegister(character)
    console.log(res)
    if (res.statusText='Created') {
      const characters=await charactersAPI.getFullList()
      $boton=document.getElementById('send-data')
      $boton.style='background:green'
      printAll(characters)
      document.querySelector('#new-character-form input[name="name"]').value=""
      document.querySelector('#new-character-form input[name="occupation"]').value=""
      document.querySelector('#new-character-form input[name="weapon"]').value=""
      document.querySelector('#new-character-form input[name="cartoon"]').checked=false
    }
    
  });
});

async function printAll(characters){
  $charactersContainer.innerHTML=""
  characters.forEach(elem => {
    const character = document.createElement('div')
  character.className = 'character-info'
  character.innerHTML = `<div class="id">Id:${elem.id}</div>
  <div class="name">Name:${elem.name}</div>
  <div class="occupation">Occupation:${elem.occupation}</div>
  <div class="cartoon">Is a Cartoon?:${elem.cartoon}</div>
  <div class="weapon">Weapon:${elem.weapon}</div>`
  $charactersContainer.appendChild(character)
  })
}
