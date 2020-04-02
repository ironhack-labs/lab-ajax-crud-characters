const charactersAPI = new APIHandler('http://localhost:8000');
const charactersDiv = document.querySelector('.characters-container')

//
window.addEventListener('load', () => {
  // const charactersCard = document.querySelector('characters-container')
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(res => {
        let characterArr = res.data;
        charactersDiv.innerHTML = '';
        characterArr.forEach(item => {
          
          const divCharacterInfo = document.createElement('div')
          const name = document.createElement('div')
          const occupation = document.createElement('div')
          const weapon = document.createElement('div')
          const id = document.createElement('div')
          const cartoon = document.createElement('div')

          divCharacterInfo.setAttribute('class', 'character-info')
          name.setAttribute('class', 'name')
          occupation.setAttribute('class', 'occupation')
          weapon.setAttribute('class', 'weapon')
          id.setAttribute('class', 'id')
          cartoon.setAttribute('class', 'cartoon')

          name.innerHTML = `Name: <span>${item.name}</span>`
          occupation.innerHTML = `Occupation: <span>${item.occupation}</span>`
          weapon.innerHTML = `Weapon: <span>${item.weapon}</span>`
          id.innerHTML = `ID: <span>${item.id}</span>`
          cartoon.innerHTML = `Cartoon: <span>${item.cartoon}</span>`
          divCharacterInfo.appendChild(name)
          divCharacterInfo.appendChild(occupation)
          divCharacterInfo.appendChild(weapon)
          divCharacterInfo.appendChild(id)
          divCharacterInfo.appendChild(cartoon)
          charactersDiv.appendChild(divCharacterInfo)

        })
        console.log('foi! getall')
        console.log(res.data)
      })
      .catch(error => console.log(error));
    //FAZ AQUI ENTAO GABRIEL
  });


  //Procurar
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()

    const id = document.getElementById('search-one').value;

    charactersAPI
      .getOneRegister(id)
      .then(res => {
        let characterArr = res.data;
        charactersDiv.innerHTML = '';
        // characterArr.forEach(item => {
          
          const divCharacterInfo = document.createElement('div')
          const name = document.createElement('div')
          const occupation = document.createElement('div')
          const weapon = document.createElement('div')
          const id = document.createElement('div')
          const cartoon = document.createElement('div')

          divCharacterInfo.setAttribute('class', 'character-info')
          name.setAttribute('class', 'name')
          occupation.setAttribute('class', 'occupation')
          weapon.setAttribute('class', 'weapon')
          id.setAttribute('class', 'id')
          cartoon.setAttribute('class', 'cartoon')

          name.innerHTML = `Name: <span>${characterArr.name}</span>`
          occupation.innerHTML = `Occupation: <span>${characterArr.occupation}</span>`
          weapon.innerHTML = `Weapon: <span>${characterArr.weapon}</span>`
          id.innerHTML = `ID: <span>${characterArr.id}</span>`
          cartoon.innerHTML = `Cartoon: <span>${characterArr.id}</span>`
          divCharacterInfo.appendChild(name)
          divCharacterInfo.appendChild(occupation)
          divCharacterInfo.appendChild(weapon)
          divCharacterInfo.appendChild(id)
          divCharacterInfo.appendChild(cartoon)
          charactersDiv.appendChild(divCharacterInfo)

        // })
        console.log('foi! getone')
        console.log(res.data)
      })
      .catch(error => console.log(error));
  });


  //Deletar
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()

    const id = document.getElementById('deleted').value;
    charactersAPI
      .deleteOneRegister(id)
      .then(res => {
        console.log('foi! delete')
        console.log(res.data)
      })
      .catch(error => console.log(error))
  });


  //Editar
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const nameEdit = document.getElementById('name-edit').value
    const occupationEdit = document.getElementById('occupation-edit').value
    const weaponEdit = document.getElementById('weapon-edit').value
    let cartoonEdit = document.getElementById('cartoon-edit')
    if (cartoonEdit.checked) {
      cartoonEdit = true;
    } else {
      cartoonEdit = false;
    }
    const idEdit = document.getElementById('id-edit').value

    const characterEdit = {
      name: nameEdit,
      occupation: occupationEdit,
      weapon: weaponEdit,
      cartoon: cartoonEdit
    }

    charactersAPI
      .updateOneRegister(idEdit, characterEdit)
      .then(res => {
        console.log('foi! create one')
        console.log(res)
      })
      .catch(error => console.log(error))

  });


  //Adicionar
  document.getElementById('new-character-form').onsubmit = (event) => {
    event.preventDefault()
    const name = document.getElementById('character-name').value
    const occupation = document.getElementById('character-occupation').value
    const weapon = document.getElementById('character-weapon').value
    let cartoon = document.getElementById('cartoon')

    if (cartoon.checked) {
      cartoon = true;
    } else {
      cartoon = false;
    }

    const character = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }

    charactersAPI
      .createOneRegister(character)
      .then(res => {
        console.log('foi! create one')
        console.log(res)
      })
      .catch(error => console.log(error))
  }
})