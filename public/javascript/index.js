const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all')
  .addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((apiRes) => {
     
      printCharacter(apiRes.data);
    })
    .catch(err => {
      console.log(err);
    })

  });


  function printCharacter(characters){

    let containerInfo = document.querySelector('.characters-container');
    containerInfo.innerHTML = "";
    characters.forEach(character => {

      console.log(character)

      containerInfo.innerHTML +=  `<div class="character-info">
      <div class="name">Id
       <span>${character.id}</span>
      </div>
      <div class="name">Name
        <span>${character.name}</span>
      </div>
      <div class="occupation">Occupation
        <span>${character.occupation}</span>
      </div>
      <div class="cartoon">Is a Cartoon?
       <span>${character.cartoon}</span>
      </div>
      <div class="weapon">Weapon
        <span>${character.weapon}</span>
      </div>
    </div>`  
    });
  }

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const input = document.querySelector(".operation input");
    const id = input.value;
  

    event.preventDefault()
  
      charactersAPI.getOneRegister(id)
        .then((apiRes) => {
          let allchar = [];
          allchar.push(apiRes.data)
          printCharacter(allchar);
        })
        .catch(err => {
          console.log(err);
        })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const input = document.querySelector(".delete input");
    const id = input.value;
    const btn = document.querySelector("#delete-one");

    event.preventDefault()

    charactersAPI.deleteOneRegister(id)
      .then((apiRes) => {
        
        btn.style.backgroundColor = "green";
        console.log(apiRes.data);
      })
      .catch(err => {

        btn.style.backgroundColor = "red";
        console.log(err);
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const inputId = document.querySelector('#edit-character-form input[name="chr-id"]');
    const inputName = document.querySelector('#edit-character-form input[name="name"]');
    const inputOccupation = document.querySelector('#edit-character-form input[name="occupation"]');
    const inputWeapon = document.querySelector('#edit-character-form input[name="weapon"]');
    const checkboxIsCartoon = document.querySelector('#edit-character-form input[name="cartoon"]');
    const btnUpdate = document.querySelector('#send-data-update');
  
    event.preventDefault()

      charactersAPI.updateOneRegister(inputId.value, {
        id: inputId.value,
        name: inputName.value,
        occupation: inputOccupation.value,
        weapon: inputWeapon.value,
        isCartoon: checkboxIsCartoon.checked,
      })
        .then((apiRes) => {
          console.log(apiRes.data);
          btnUpdate.style.backgroundColor = "green";
        })
        .catch(err => {
          console.log(err);
          btnUpdate.style.backgroundColor = "red";
        })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const inputName = document.querySelector('#name input');
    const inputOccupation = document.querySelector('#occupation input');
    const inputWeapon = document.querySelector('#weapon input');
    const checkboxIsCartoon = document.querySelector('#isCartoon');
    const btnCreate = document.querySelector('#send-data');

    event.preventDefault()

    charactersAPI.createOneRegister({
      name: inputName.value,
      occupation: inputOccupation.value,
      weapon: inputWeapon.value,
      isCartoon: checkboxIsCartoon.checked,
    })
    .then((apiRes) => {
        
      btnCreate.style.backgroundColor = "green";
      console.log(apiRes.data);
    })
    .catch(err => {

      btnCreate.style.backgroundColor = "red";
      console.log(err);
    })
  });

});
