const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();

    const charactersContainer = document.querySelector(".characters-container");
    charactersAPI.getFullList()
      .then((characters) => {
        charactersContainer.innerHTML = ""
        //console.log(characters.data);

        characters.data.forEach(character => {
          let characterInfo = document.createElement('div')
          characterInfo.className = 'character-info'
          characterInfo.innerHTML = `
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">occupation:${character.occupation}</div>
      <div class="cartoon">Cartoon: ${character.cartoon}</div>
      <div class="weapon">weapon: ${character.weapon}</div>
     `

          charactersContainer.appendChild(characterInfo)

        })

      })
      .catch((e) => console.log(e))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();



    let input = document.getElementsByName('character-id')[0];
    

    charactersAPI.getOneRegister(Number(input.value))
      .then((character) => {
       // console.log(character)
        const charactersContainer = document.querySelector(".characters-container");
        charactersContainer.innerHTML = ""
        let characterInfo = document.createElement('div')
        characterInfo.className = 'character-info'
        characterInfo.innerHTML = `
<div class="name">Name: ${character.data.name}</div>
<div class="occupation">occupation:${character.data.occupation}</div>
<div class="cartoon">Cartoon: ${character.data.cartoon}</div>
<div class="weapon">weapon: ${character.data.weapon}</div>
`

        charactersContainer.appendChild(characterInfo)

      })
      .catch((e) => {
        const buttonDelete = document.getElementById("fetch-one");
        buttonDelete.style.background = "Red";
        console.log(e)
      })


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    let input = document.getElementsByName("character-id-delete")[0]
    charactersAPI.deleteOneRegister(Number(input.value))
    .then(() =>{
      const buttonDelete = document.getElementById("delete-one");
      buttonDelete.style.background = "Green";
    })
    .catch((e) => {
      const buttonDelete = document.getElementById("delete-one");
      buttonDelete.style.background = "Red";
      console.log(e)
    })

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    console.log(event.target)
    event.preventDefault()
    const editCharacter = {
      id: Number(event.target[0].value),
      name: event.target[1].value,
      occupation: event.target[2].value,
      weapon: event.target[3].value,
      cartoon: event.target[4].checked
    }
    console.log(editCharacter.id)
    console.log(editCharacter.name)
    console.log(editCharacter.occupation)
    charactersAPI.updateOneRegister(editCharacter)
    .then ((character) => {
      const buttonEdit = document.getElementById("edit-data");
      buttonEdit.style.background = "Green";

    })
    .catch((e) => {
      const buttonEdit = document.getElementById("edit-data");
      buttonEdit.style.background = "Red";
      console.log(e)
    })

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const newCharacter = {
      name: event.target[0].value,
      occupation: event.target[1].value,
      weapon: event.target[2].value,
      cartoon: event.target[3].checked
    }

    charactersAPI
      .createOneRegister(newCharacter)
      .then(res => {
        const buttonCreate = document.getElementById('send-data');
        buttonCreate.style.background = "Green"
       
      })
      .catch(e => {  const buttonCreate = document.getElementById('send-data');
      buttonCreate.style.background = "Red" })

  });
});
