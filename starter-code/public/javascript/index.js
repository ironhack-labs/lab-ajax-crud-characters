const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  const list = document.getElementById(`list`)
  const mainchar = document.getElementById(`mainchar`)
  const fetchoneinput = document.getElementById(`fetch-one-input`)
  const deleteoneinput = document.getElementById(`delete-one-input`)
  const newcharform = document.getElementById(`new-character-form`)
  const editcharform = document.getElementById(`edit-character-form`)

  const cleanList = () => {
    //stackoverflow says this is faster than innerHTML = ""
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

  const buildList = data => {
    data.forEach(elm => {
      list.innerHTML += `<section class="form-container"><p>id: ${elm.id}</p><p>Name: ${elm.name}</p><p>Weapon: ${elm.weapon}</p><p>Occupation: ${elm.occupation}</p><p>Is a Cartoon?: ${elm.cartoon}</p></section>`
    })
  }

  const clearForms = () => {
    fetchoneinput.value = ``;
    deleteoneinput.value = ``;
    [...newcharform.elements].forEach(elm => elm.value = ``);
    [...editcharform.elements].forEach(elm => elm.value = ``)
  }

  const update = () => {
    charactersAPI.getFullList()
    .then(response => {
      cleanList()
      buildList(response.data)
      clearForms()
    })
    .catch(err => console.log(err))
  }




  document.getElementById('fetch-all').onclick = function(){
    update()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(fetchoneinput.value)
      .then(response => {
        const {name,occupation,weapon,cartoon} = response.data
        mainchar.children[0].innerText = `Character Name: ${name}`
        mainchar.children[1].innerText = `Character Occupation: ${occupation}`
        mainchar.children[2].innerText = `Is a Cartoon?: ${cartoon}`
        mainchar.children[3].innerText = `Character Weapon: ${weapon}`
        clearForms()
      })
      .catch(err => console.log(err))
  }
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister(deleteoneinput.value) 
      .then(() => update())
      .catch(err => console.log(err))
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    
    e.preventDefault()
    
    const [name,occupation,weapon,cartoon] = [...newcharform.elements]
    console.log(name)
    charactersAPI.createOneRegister({name : name.value ,occupation : occupation.value ,weapon : weapon.value , cartoon : cartoon.checked}) 
      .then(() => update())
      .catch(err => console.log(err))        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    
    e.preventDefault()
    
    const [id,name,occupation,weapon,cartoon] = [...editcharform.elements]

    charactersAPI.updateOneRegister(id.value,{name : name.value ,occupation : occupation.value ,weapon : weapon.value , cartoon : cartoon.checked}) 
      .then(() => update())
      .catch(err => console.log(err))           
  }
})
