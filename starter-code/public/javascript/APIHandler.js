class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.$charactersContainer = document.querySelector('.characters-container')
  }
//Mostrar la lista  completa
  getFullList = async (event) => {
    event.preventDefault()

    const { data } = await axios.get('http://localhost:8000/characters')
    
    //Para insertar codigo html 
    this.$charactersContainer.innerHTML =''
    // ☝
    data.forEach(character => {
      //Creamos una etiqueta div la cual contendra las caracteristicas del personaje
      //Gracias al create element podemos decir que tipo de etiqueta html necesitamos
      const characterInfo = document.createElement('div')
      characterInfo.className = 'character-Info'

      const characterId = document.createElement('p')
      characterId.innerHTML = `Character ID: <span> ${character.id} </span>`

      const characterName = document.createElement('p')
      characterName.className = 'name'
      characterName.innerHTML = `Character Name : <span> ${character.name} </span> `

      const characterOccupation = document.createElement('p')
      characterOccupation.className = 'occupation'
      characterOccupation.innerHTML = `Character Occupation : <span> ${character.occupation} </span>`

      const characterCartoon = document.createElement('p')
      characterCartoon.className = 'cartoon'
      characterCartoon.innerHTML = `Is a CARTOON???? : <span> ${character.cartoon} </span>`

      const characterWeapon = document.createElement('p')
      characterWeapon.className = 'weapon'
      characterWeapon.innerHTML = `Character wapon : <span> ${character.weapon} </span>`

      characterInfo.appendChild(characterId)
      characterInfo.appendChild(characterName)
      characterInfo.appendChild(characterOccupation)
      characterInfo.appendChild(characterCartoon)
      characterInfo.appendChild(characterWeapon)

    
      this.$charactersContainer.appendChild(characterInfo)

    });



  }


//Registrar uno
  getOneRegister = async (event) => {
    
    event.preventDefault()
    //se crea para guardar el valor de id
    const characterId  = document.querySelector('input[name="character-id"]').value
    //Esperas a recibir Id
    const character = await axios.get(`http://localhost:8000/characters/${characterId}`)
    //Despues con este crea uno registro ID
    this.createOneRegister(character.data)


  }

//Crear un registrodo
  createOneRegister (character) {

    this.$charactersContainer.innerHTML = ''

    const characterInfo = document.createElement('div')
    characterInfo.className = 'character-info'

    const characterId = document.createElement('p')
    characterId.innerHTML = `Character ID: <span>${character.id}<span>`

    const characterName = document.createElement('p')
    characterName.className = 'name'
    characterName.innerHTML = `Name : <span>${character.name}</span>`

    const characterOccupation = document.createElement('p')
    characterOccupation.className = 'occupation'
    characterOccupation.innerHTML = `Occupation : <span> ${character.occupation}</span>`

    const characterCartoon = document.createElement('p')
    characterCartoon.className = 'cartoon'
    characterCartoon.innerHTML = `Is a Cartoon???? : <span> ${character.cartoon}</span>`

    const characterWeapon = document.createElement('p')
    characterWeapon.className = 'weapon'
    characterWeapon.innerHTML = `Weapon : <span>${character.weapon}</span>`
//Recordar mandar a llamar los elementos creados anteriromente
//Ya que sino uno de los campos faltaria y o fallaria o no se crearia no lo revise eso

    characterInfo.appendChild(characterId)
    characterInfo.appendChild(characterName)
    characterInfo.appendChild(characterOccupation)
    characterInfo.appendChild(characterCartoon)
    characterInfo.appendChild(characterWeapon)
    this.$charactersContainer.appendChild(characterInfo)

  }

//Ahora  se tiene que registar un elemnto usamos una async 

registerUno = async (event) => {
  event.preventDefault()


  const name = document.querySelector('#new-character-form input[name="name"]').value
  const occupation = document.querySelector('#new-character-form input[name="occupation"]').value
  const cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked
  const weapon = document.querySelector('#new-character-form input[name="weapon"]').value

  
  await axios.post('http://localhost:8000/characters', {name, occupation, weapon, cartoon})
  this.getFullList(event)

}


//Editar un elemento o bueno personaje registrado 

  updateOneRegister = async (event) => {

    event.preventDefault()
//se crea lo mismo que en la secciones anteriones unas constantes las cuales
//Guardaran el nombre de lo que se realizara
//Cara una indicando que del documento (documente) y seleccionando (queryselector)
//El ide del form y a su vez dentro de dicho form lel input con el name de cada uno
//Los cuales apuntan al index.html 
    const id = document.querySelector('#edit-character-form input[name="chr-id"]').value
    const name = document.querySelector('#edit-character-form input[name="name"]').value
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked
//Esto es lo que me cuesta mas trabajo al momento de poner lo del id siempre me confundo
//Pero comprendo que hace referencia a que de los characters 
//El que contenga ese id sera el que se va a modificar 
    await axios.put(`http://localhost:8000/characters/${id}`, {name, occupation, weapon, cartoon})

    this.getFullList(event)
  }

//Paso para eleminar 
  deleteOneRegister = async (event) => {
    event.preventDefault()

    const characterDelete = document.querySelector('input[name="character-id-delete"]').value
    const deleteB = document.querySelector('#delete-one')

    await axios.delete(`http://localhost:8000/characters/${characterDelete}`)
  
    this.getFullList(event)

  }
}
