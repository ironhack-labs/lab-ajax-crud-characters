$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    
    let list = document.getElementById('display-characters');
    
    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((response) => {
        list.innerHTML = "";

        response.data.forEach((eachOne) => {

          let Char = document.createElement('div');
          Char.classList = "character-info"
          Char.innerHTML = `
              <div class="id"> Id:${eachOne.id} </div>
               <div class="name"> Name:${eachOne.name} </div>
               <div class="occupation">Occupation: ${eachOne.occupation} </div>
               <div class="cartoon">Is a Cartoon?: ${eachOne.debt} </div>
               <div class="weapon">Weapon: ${eachOne.weapon} </div>`
          
          list.appendChild(Char);

        })
      })
  }

  document.getElementById('fetch-one').onclick = function () {
    let charToSearchFor = document.getElementById('char-id').value;

    axios.get('https://ih-crud-api.herokuapp.com/characters/'+charToSearchFor)
        .then((result)=>{
            let theName = result.data.name;
            let theOccupation = result.data.occupation;
            let theCartoon = result.data.debt;
            let theWeapon = result.data.weapon;

            document.getElementById('Name').innerHTML = "Id: " + theName;
            document.getElementById('Occupation').innerHTML = "Occupation: " + theOccupation;
            document.getElementById('Cartoon').innerHTML = "Is a Cartoon?: " + theCartoon;
            document.getElementById('Weapon').innerHTML = "Weapon: " + theWeapon;
            document.getElementById('char-id').value = "";
        })
        .catch((err)=>{
            console.log(err);
        })

  }


  document.getElementById('edit-send-data').onclick = function () {
    let name = document.getElementById('edit-name').value;
    let occupation = document.getElementById('edit-occupation').value;
    let weapon = document.getElementById('edit-weapon').value;
    let id = document.getElementById('edit-id').value;
    let cartoon = document.getElementById('edit-cartoon').checked;

    axios.put('https://ih-crud-api.herokuapp.com/characters/'+id, {
        id:id,
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
    })
    .then(()=>{
        console.log('yay')
        
        document.getElementById('edit-name').value = "";
        document.getElementById('edit-occupation').value = "";
        document.getElementById('edit-weapon').value = "";
        document.getElementById('edit-cartoon').checked = false;

    })
    .catch((err)=>{

        console.log(err);
    })

  }

  document.getElementById('new-send-data').onclick = function () {
    let name = document.getElementById('new-name').value;
    let occupation = document.getElementById('new-occupation').value;
    let weapon = document.getElementById('new-weapon').value;
    let cartoon = document.getElementById('new-cartoon').checked;

    axios.post('https://ih-crud-api.herokuapp.com/characters', {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    })
    .then(()=>{
        console.log('yay')
        
        document.getElementById('new-name').value = "";
        document.getElementById('new-occupation').value = "";
        document.getElementById('new-weapon').value = "";

        document.getElementById('new-cartoon').checked = false;
      
    })
    .catch((err)=>{

        console.log(err);
    })
  }
})