const charactersAPI = new APIHandler("http://localhost:8000/characters/")

$(document).ready(() => {
  let $characters = document.getElementsByClassName('characters-container')[0]
  let $characterInfo = document.getElementsByClassName('character-info')[0]
    $characters.removeChild($characterInfo)

  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(characters => {
        $characters.innerHTML=""
        characters.data.forEach(character => {
          showOneCharacter(character)
        });
      })
  }

  document.getElementById('fetch-one').onclick = function (e) {
    charactersAPI.getOneRegister(e.target.previousElementSibling.value)
    .then(character=>{
      $characters.innerHTML=""
      showOneCharacter(character.data)
    })
    .catch(e=>alert(e))
    
  }

  document.getElementById('delete-one').onclick = function (e) {
    charactersAPI.deleteOneRegister(this.previousElementSibling.value)
      .catch(err => alert(err))
  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault();
    charactersAPI.updateOneRegister(e.target.querySelector('[name=chr-id]').value,getCharacter(e.target))
    .then(character=>{
      $characters.innerHTML=""
      showOneCharacter(character.data)
    })
    .catch(e=>alert(e))
  }

  document.getElementById('new-character-form').onsubmit = function (e) {
   e.preventDefault()
    charactersAPI.createOneRegister(getCharacter(e.target))
    .then(character=>{
      $characters.innerHTML=""
      showOneCharacter(character.data)
    })
    .catch(e=>alert(e))
  }
  const setCharacter = (el, data) => {
    el.getElementsByClassName('id')[0].innerHTML = data.id
    el.getElementsByClassName('name')[0].innerHTML = data.name
    el.getElementsByClassName('occupation')[0].innerHTML = data.occupation
    el.getElementsByClassName('cartoon')[0].innerHTML = data.cartoon
    el.getElementsByClassName('weapon')[0].innerHTML = data.weapon
  }
  const getCharacter = el=>{
    return {
      name:el.querySelector('[name=name]').value,
      occupation:el.querySelector('[name=occupation]').value,
      weapon:el.querySelector('[name=weapon]').value,
      cartoon:el.querySelector('[name=cartoon]').checked
    }
  }
  const showOneCharacter=(character => {
      let $characterNew = $characterInfo.cloneNode(true)
      $characters.append($characterNew)
      setCharacter($characterNew, character)
      $characterNew.scrollIntoView()  
      $characterNew.focus()
  })
})