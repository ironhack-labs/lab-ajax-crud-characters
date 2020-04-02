const charactersAPI = new APIHandler('http://localhost:8000');

//
window.addEventListener('load', () => {
  // const charactersCard = document.querySelector('characters-container')
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then(res => {
        // let characterArr = res.data;
        // characterArr.forEach(item => {
        //   let newCard = `<div class="character-info">
        //   <div class="name">Character Name ${item.name}</div>
        //   <div class="occupation">Character Occupation ${item.occupation}</div>
        //   <div class="cartoon">Is a Cartoon? ${item.cartoon}</div>
        //   <div class="weapon">Character Weapon ${item.weapon}</div>
        // </div>`;
        // let card.innerHTML = newCard
        // charactersCard.innerHTML = ""
          // charactersCard.innerHTML += newCard
          // charactersCard.appendChild(card)
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