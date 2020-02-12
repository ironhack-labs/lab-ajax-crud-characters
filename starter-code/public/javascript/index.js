const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
      .then((characters) => {
        const charactersPayload = characters.data
        //  console.log(charactersPayload)
        let charactersContainerDOMEl = document.querySelector(".characters-container");
        charactersContainerDOMEl.innerHTML = "";

        charactersPayload.forEach(character => {
          console.log(character)
          let infoDOMEl = document.createElement('div')
          let characterDOMElid = document.createElement("div");
          let characterDOMElname = document.createElement("div");
          let characterDOMEloccupation = document.createElement("div");
          let characterDOMElcartoon = document.createElement("div");
          let characterDOMElweapon = document.createElement("div");
          infoDOMEl.classList.add('character-info')

          characterDOMElid.classList.add('id')
          characterDOMElname.classList.add('name')
          characterDOMEloccupation.classList.add('occupation')
          characterDOMElcartoon.classList.add('cartoon')
          characterDOMElweapon.classList.add('weapon')

          infoDOMEl.appendChild(characterDOMElid)
          infoDOMEl.appendChild(characterDOMElname)
          infoDOMEl.appendChild(characterDOMEloccupation)
          infoDOMEl.appendChild(characterDOMElcartoon)
          infoDOMEl.appendChild(characterDOMElweapon)
          characterDOMElid.innerHTML = `${character.id} `;
          characterDOMElname.innerHTML = `${character.name} `;
          characterDOMEloccupation.innerHTML = `${character.occupation} `;
          characterDOMElcartoon.innerHTML = `${character.cartoon} `;
          characterDOMElweapon.innerHTML = `${character.weapon} `;
          charactersContainerDOMEl.appendChild(infoDOMEl);
        });
      })
  });

  //<button onclick="deleteCharacter('${character._id}')">Delete</button>

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    let idCharacter = document.querySelector('input[name="character-id"]').value
    // console.log(idCharacter)
    charactersAPI.getOneRegister(idCharacter)
      .then((character) => {
        let characterSolo = character.data
        let charactersContainerDOMEl = document.querySelector(".characters-container");
        charactersContainerDOMEl.innerHTML = "";
        let infoDOMEl = document.createElement('div')
        let characterDOMElname = document.createElement("div");
        let characterDOMEloccupation = document.createElement("div");
        let characterDOMElcartoon = document.createElement("div");
        let characterDOMElweapon = document.createElement("div");
        infoDOMEl.classList.add('character-info')
        characterDOMElname.classList.add('name')
        characterDOMEloccupation.classList.add('occupation')
        characterDOMElcartoon.classList.add('cartoon')
        characterDOMElweapon.classList.add('weapon')
        infoDOMEl.appendChild(characterDOMElname)
        infoDOMEl.appendChild(characterDOMEloccupation)
        infoDOMEl.appendChild(characterDOMElcartoon)
        infoDOMEl.appendChild(characterDOMElweapon)
        characterDOMElname.innerHTML = `${characterSolo.name} `;
        characterDOMEloccupation.innerHTML = `${characterSolo.occupation} `;
        characterDOMElcartoon.innerHTML = `${characterSolo.cartoon} `;
        characterDOMElweapon.innerHTML = `${characterSolo.weapon} `;
        charactersContainerDOMEl.appendChild(infoDOMEl);


      });


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    let idCharacter = document.querySelector('input[name="character-id-delete"]').value
    charactersAPI.deleteOneRegister(idCharacter)


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let nameCharacter = document.querySelector('input[name="name"]').value
    let occupationCharacter = document.querySelector('input[name="occupation"]').value
    let weaponCharacter = document.querySelector('input[name="weapon"]').value
    let cartoonCharacterOnOff = document.querySelector('input[name="cartoon"][type="checkbox"]').value
    cartoonCharacter = (cartoonCharacterOnOff === 'on') ? true : false
    console.log(cartoonCharacter)
    charactersAPI.createOneRegister(nameCharacter, occupationCharacter, weaponCharacter, cartoonCharacter)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let idCharacter = document.querySelector('#edit-character-form input[name="chr-id"]').value
    let nameCharacter = document.querySelector('#edit-character-form input[name="name"]').value
    let occupationCharacter = document.querySelector('#edit-character-form input[name="occupation"]').value
    let weaponCharacter = document.querySelector('#edit-character-form input[name="weapon"]').value
    let cartoonCharacterOnOff = document.querySelector('#edit-character-form input[name="cartoon"][type="checkbox"]').value
    cartoonCharacter = (cartoonCharacterOnOff === 'on') ? true : false
    charactersAPI.updateOneRegister(idCharacter, nameCharacter, occupationCharacter, weaponCharacter, cartoonCharacter)

  });
});