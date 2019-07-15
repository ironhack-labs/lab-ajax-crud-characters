const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = ()=>{
    // let list = document.getElementById('list-of-characters')
    //   console.log(list)

    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((response)=>{
          // list.innerHTML = "";
          charList = "";
          
          response.data.forEach((character)=>{
            // let newChar = document.createElement('div');
            // newChar.innerHTML = `
            charList += `
            <div class="character-info">
              <div class="id"> ID : ${character.id}</div>
              <div class="name"> Name : ${character.name}</div>
              <div class="occupation"> Occupation : ${character.occupation}</div>
              <div class="weapon"> Weapon : ${character.weapon}</div>
              <div class="cartoon">Debt : ${character.debt}</div>
            </div>
            `
            // list.appendChild(newChar); 
            $('.characters-container').html(charList);
          })
      })
      .catch((err)=>{
          console.log(err);
      })
  }
  

  document.getElementById('fetch-one').onclick = function (e) {
    e.preventDefault();
    let charID = $('[name="character-id"]'.val());
    
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${charID}`)
      .then((response)=>{ 
        `
        <div class="character-info">
          <div class="id"> ID : ${response.data.id}</div>
          <div class="name"> Name : ${response.data.name}</div>
          <div class="occupation"> Occupation : ${response.data.occupation}</div>
          <div class="weapon"> Weapon : ${response.data.weapon}</div>
          <div class="cartoon">Debt : ${response.data.debt}</div>
        </div>
        `
      $('.characters-container').html(charList);
    })
    .catch((err)=>{
        console.log(err);
    })
  }


  // document.getElementById('delete-one').onclick = function(){
        
  // }
  

  document.getElementById('edit-character-form').onclick = function (e) {
    e.preventDefault();

    let charID = document.getElementById('edit-id');
    let updateChar = {
      name : document.getElementById('new-name').value,
      occupation : document.getElementById('new-occupation').value,
      debt : document.getElementById('new-debt').checked,
      weapon : document.getElementById('new-weapon').value
    }
    
    axios.patch(`https://ih-crud-api.herokuapp.com/characters${charID}`, updateChar)
    .then((response)=>{
      console.log('update successful: ', response);
      document.getElementById("update-form").reset();
    })
    .catch((err)=>{
        console.log(err);
    })
  }
    
//   document.getElementById('edit-character-form').onsubmit = function (e) {
//     e.preventDefault();
//     let charID = $('#edit-character-form [name="chr-id"]').val();

//     let updatedcharacterInfo = {
//       name: $('#edit-character-form [name="name"]').val(),
//       occupation: $('#edit-character-form [name="occupation"]').val(),
//       debt: $('#edit-character-form [name="cartoon"]').prop("checked"),
//       weapon: $('#edit-character-form [name="weapon"]').val(),
//     }
    
//     console.log(updatedcharacterInfo);
    
//     axios.patch(`https://ih-crud-api.herokuapp.com/characters/${charID}`, updatedcharacterInfo)
//     .then(response => {
//           console.log('update successful: ', response);
//           document.getElementById("update-form").reset();
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }


  document.getElementById('new-character-form').onclick = (event)=>{
    event.preventDefault();
    let name = document.getElementById('new-name');
    let occupation = document.getElementById('new-occupation');
    let weapon = document.getElementById('new-weapon');
    let debt = document.getElementById('new-debt');

    // let name = $('[name="name"]');
    // let occupation = $('[name="occupation"]');
    // let weapon = $('[name="weapon"]');
    // let debt = $('[name="cartoon"]');

    axios.post('https://ih-crud-api.herokuapp.com/characters', {
        name: name.value,
        occupation: occupation.value,
        weapon: weapon.value,
        debt: debt.checked
    })
    .then(()=>{
        console.log('yay')
    
        name.value = "";
        occupation.value = "";
        weapon.value = "";
        debt.checked = false;
    })
    .catch((err)=>{
        console.log(err);
    })       
  }
})
