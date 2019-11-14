const charactersAPI = new APIHandler('http://localhost:8000');

function fullList(){
  console.log("hola")
  charactersAPI
      .getFullList()
        .then(apiRes =>{
          const characters = apiRes.data
          let tpl = ""
          characters.forEach(element => {
            tpl += `<div class="character-info">
            <div class="name"> Character name : ${element.name}</div>
            <div class="occupation">Character Occupation : ${element.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
            <div class="weapon">Character Weapon : ${element.weapon}</div>
          </div>`
          });
          container = document.querySelector(".characters-container")
          console.log(container)
          container.innerHTML = tpl
        })
}

function oneItem(id){
  charactersAPI
  .getOneRegister(id)
    .then(apiRes =>{
      console.log(apiRes.data)
      const character = apiRes.data
      let tpl = ""
        tpl += `<div class="character-info">
        <div class="name"> Character name : ${character.name}</div>
        <div class="occupation">Character Occupation : ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon : ${character.weapon}</div>
      </div>`
      container = document.querySelector(".characters-container")
      container.innerHTML = tpl
    });
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all')
  .addEventListener('click', function (event) {
    fullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.querySelector(".operation>input").value
    console.log(id)
    oneItem(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.querySelector(".operation.delete>input").value
    console.log(id)
    oneItem(id)
        charactersAPI
          .deleteOneRegister(id)
            .then(apiRes =>{
              console.log(apiRes)
              container.innerHTML = 'THE OBJECT IS DELETED!!!'
              setTimeout(()  => fullList() , 2000)
            })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const newChar = document.getElementById('edit-character-form')
    let newEntry = {
            'id':'',
            'name':'',
            'occupation':'',
            'weapon':'',
            'cartoon':null
          }
    newEntry.id = newChar.querySelector('input[name="chr-id"]').value
    newEntry.name = newChar.querySelector('input[name="name"]').value
    newEntry.occupation = newChar.querySelector('input[name="occupation"]').value
    newEntry.weapon = newChar.querySelector('input[name="weapon"]').value
    newEntry.cartoon = newChar.querySelector('input[name="cartoon"]').checked
    
    charactersAPI
      .updateOneRegister(newEntry)
    });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const newChar = document.getElementById('new-character-form')
    console.log(newChar)
    let newEntry = {
            'name':'',
            'occupation':'',
            'weapon':'',
            'cartoon':null
          }
    newEntry.name = newChar.querySelector('input[name="name"]').value
    newEntry.occupation = newChar.querySelector('input[name="occupation"]').value
    newEntry.weapon = newChar.querySelector('input[name="weapon"]').value
    newEntry.cartoon = newChar.querySelector('input[name="cartoon"]').checked
    console.log(newEntry)
    
    charactersAPI
      .createOneRegister(newEntry)
    });
});
