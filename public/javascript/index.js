const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    let container = document.getElementById('characters-container')
    container.innerHTML = ''

    charactersAPI.getFullList('/characters')
      .then(results=>{
            results.forEach(element => {
              container.innerHTML +=`<div class='character-info'>\
                                      <div class='name'>Name:<br>${element.name}</div>\
                                      <br>
                                      <div class='occupation'>Character Occupation:<br>${element.occupation}</div>\
                                      <br>
                                      <div class='cartoon'>Is a Cartoon?<br>${element.cartoon}</div>\
                                      <br>
                                      <div class='weapon'>Character Weapon:<br> ${element.weapon}</div>\
                                      <br>
                                      </div>`
              });
    })
    .catch(err=>console.log(err))
  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const inputId = document.getElementById('character-id').value
    const charName = document.getElementById('edit-character-name');
    const charOccupation = document.getElementById('edit-character-occupation');
    const charWeapon = document.getElementById('edit-character-weapon');
    const charCartoon = document.getElementById('edit-character-cartoon');
    const charId = document.getElementById('chr-id');

   charactersAPI.getOneRegister('/characters',inputId).then(response => {
      const { id, name, occupation, weapon, cartoon } = response;
      // prefill the form
      charName.value = name;
      charOccupation.value = occupation;
      charWeapon.value = weapon;
      charCartoon.checked = cartoon
      charId.value = id;


      //update Card details
      let container = document.getElementById('characters-container')
      container.innerHTML = ''
      container.innerHTML +=`<div class='character-info'>\
                                <div class='name'>Name:<br>${name}</div>\
                                <br>
                                <div class='occupation'>Character Occupation:<br>${occupation}</div>\
                                <br>
                                <div class='cartoon'>Is a Cartoon?<br>${cartoon}</div>\
                                <br>
                                <div class='weapon'>Character Weapon:<br> ${weapon}</div>\
                                <br>
                                </div>`
    })




  //   

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById('character-id-delete').value
    charactersAPI.deleteOneRegister('/characters', id)
      .then(()=>{
        this.style.background='green'
        document.getElementById('character-id-delete').value = '';
      })
      .catch((err)=> {
        console.log(err)
        this.style.background="red"
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const button = this.getElementsByTagName('button')
    const charId = document.getElementById('chr-id').value;
    const charName = document.getElementById('edit-character-name').value;
    const charOccupation = document.getElementById('edit-character-occupation').value;
    const charWeapon = document.getElementById('edit-character-weapon').value;
    let charCartoon = document.getElementById('edit-character-cartoon').value;

    if(charCartoon === 'on'){
      charCartoon = true
    }else{
      charCartoon = false
    }

    const updatedCharacter = {
      name: charName,
      occupation: charOccupation,
      weapon: charWeapon,
      cartoon: charCartoon
    };
    console.log(updatedCharacter)
    charactersAPI.updateOneRegister('/characters', charId, updatedCharacter)
    .then(()=>{
      button[0].style.background='green'
      document.getElementById('edit-character-form').reset();
    })
    .catch(err=> {
      console.log(err)
      button[0].style.background='red'
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const button = this.getElementsByTagName('button')
    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const weapon = document.getElementById('weapon').value;
    let cartoon = document.getElementById('cartoon').value;
    if(cartoon === "on"){
      cartoon = true
    }else{
      cartoon = false
    }
    const data = {"name":name,"occupation":occupation,"weapon":weapon,"cartoon":cartoon}
    charactersAPI.createOneRegister('/characters',data)
      .then(()=>{
        button[0].style.background="green"
        document.getElementById('new-character-form').reset();
      })
      .catch(err=> {
        console.log(err)
        button[0].style.background='red'
        
      })
  });

})