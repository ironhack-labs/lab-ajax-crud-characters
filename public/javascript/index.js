const charactersAPI = new APIHandler('http://localhost:8000');

// document.getElementById('')
//document.querySelector('')

const charContainer = document.querySelector('.characters-container')
const idDelete = document.getElementById('character-id-delete')
const deleteBtn = document.getElementById('delete-one')

const characterInfo = (character)=> {
  return `
  <div class="character-info">
  <div class="id">ID: <span>${character.id}</span></div>
  <div class="name">Name: <span>${character.name}</span></div>
  <div class="occupation">Occupation: <span>${character.occupation}</span></div>
  <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
  <div class="weapon">Weapon: <span>${character.weapon}</span></div>
  </div>
  `
}


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then((res)=>{
          console.log(res.data)
          const characters = res.data
          let info = ""
          characters.forEach(character => {
            info += characterInfo(character)
          });

          charContainer.innerHTML = info

      })
      
  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const cId = document.getElementById('character-id').value
    charactersAPI.getOneRegister(cId)
      .then((res)=>{
        const character = res.data
        charContainer.innerHTML = characterInfo(character)
      })
      .catch(err => {
        err
          ? alert(`the Id ${cId} does not exist`)
          : alert("Server error! Sorry.")
        console.log(
          "The error while getting character is: ",
          err.response
        )
      })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(idDelete.value)
      .then(()=>{
        deleteBtn.classList.add("active")
      })
      .catch(err => {
        if(err) deleteBtn.classList.add("btnErr") 
        console.log("The error deleteing character: ", err)
      })
     
  });




  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});



{/* <div class="character-info">
<div class="id">ID: <span>${character.id}</span></div>
<div class="name">Name: <span>${character.name}</span></div>
<div class="occupation">Occupation: <span>${character.occupation}</span></div>
<div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
<div class="weapon">Weapon: <span>${character.weapon}</span></div>
</div> */}


{/* <div class="character-info">
<div class="name">Character Name</div>
<div class="occupation">Character Occupation</div>
<div class="cartoon">Is a Cartoon?</div>
<div class="weapon">Character Weapon</div>
</div> */}


/// { name: string, occupation: string, cartoon: boolean, weapon: string }
// {
//   "characters": [
//     {
//       "id": 1,
//       "name": "Han Solo",
//       "occupation": "Smuggler",
//       "weapon": "Blaster Pistol",
//       "cartoon": true
//     },
//     {
//       "id": 2,
//       "name": "Luke Skywalker",
//       "occupation": "Jedi Knight",
//       "weapon": "Lightsaber",
//       "cartoon": false
//     },
//     {
//       "id": 3,
//       "name": "Sponge Bob",
//       "occupation": "Lives under the sea",
//       "weapon": "Crabby Patty",
//       "cartoon": true
//     }
//   ]
// }