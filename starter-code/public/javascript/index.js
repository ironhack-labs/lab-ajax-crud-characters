const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

    let parentDiv = document.getElementsByClassName('characters-container')[0];
    

    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((result) => {
      console.log(result.data);

      parentDiv.innerHTML = '';

      result.data.forEach(eachOne => {

        let newCharDiv = document.createElement("div");
        newCharDiv.classList.add('character-info');

        let newNameDiv = document.createElement('div');
        newNameDiv.classList.add('name');
        newNameDiv.innerHTML =`Character Name: <span class="highlighted">${eachOne.name}</span>`

        let newWeaponDiv = document.createElement('div');
        newWeaponDiv.classList.add('weapon');
        newWeaponDiv.innerHTML =`Weapon: <span class="highlighted">${eachOne.weapon}</span>`

        let newOccupationDiv = document.createElement('div');
        newOccupationDiv.classList.add('occupation');
        newOccupationDiv.innerHTML =`Occupation: <span class="highlighted">${eachOne.occupation}</span>`

        let newCartoonDiv = document.createElement('div');
        newCartoonDiv.classList.add('cartoon');
        newCartoonDiv.innerHTML =`Is a Cartoon? <span class="highlighted">${eachOne.debt ? "Yes" : "No"}</span>`

        newCharDiv.appendChild(newNameDiv);
        newCharDiv.appendChild(newOccupationDiv);
        newCharDiv.appendChild(newCartoonDiv);
        newCharDiv.appendChild(newWeaponDiv);
        parentDiv.appendChild(newCharDiv);

        if(parentDiv.clientHeight > 500) {
          parentDiv.setAttribute("style", "overflow-y:scroll; height:500px;");
        }
      });




    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
    let theId = document.getElementsByName('character-id')[0].value;
    let parentDiv = document.getElementsByClassName('characters-container')[0];
    
    axios.get('https://ih-crud-api.herokuapp.com/characters/'+theId)
    .then(result => {
      parentDiv.innerHTML = '';
      let newCharDiv = document.createElement("div");
      newCharDiv.classList.add('character-info');
      newCharDiv.innerHTML = `
      <div  class="name"> Character Name: <span class="highlighted">${result.data.name}</span> </div>
      <div  class="occupation"> Occupation: <span class="highlighted">${result.data.occupation}</span></div>
      <div  class="cartoon">Is a Cartoon? <span class="highlighted">${result.data.debt ? "Yes" : "No"}</span></div>
      <div  class="weapon"> Weapon: <span class="highlighted">${result.data.weapon}</span></div>
      `

      parentDiv.appendChild(newCharDiv);
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  document.getElementById('delete-one').onclick = function(){    
  }
  
  document.getElementById('send-data').onclick = function(e){
    e.preventDefault();
    let name = document.getElementById("new-char-name");
    let weapon = document.getElementById("new-char-weapon");
    let occupation = document.getElementById("new-char-occupation");
    let debt = document.getElementById("new-char-cartoon");

    axios
      .post("https://ih-crud-api.herokuapp.com/characters", {
        name: name.value,
        occupation: occupation.value,
        weapon: weapon.value,
        debt: debt.checked
      })
      .then(() => {
        console.log("yey");
        let parentDiv = document.getElementsByClassName('characters-container')[0];
        parentDiv.innerHTML = '';

        let newCharDiv = document.createElement("div");
        newCharDiv.classList.add('character-info');
        newCharDiv.innerHTML = `
        <div  class="name"> Character Name: <span class="highlighted">${name.value}</span> </div>
        <div  class="occupation"> Occupation: <span class="highlighted">${occupation.value}</span></div>
        <div  class="cartoon">Is a Cartoon? <span class="highlighted">${debt.checked ? "Yes" : "No"}</span></div>
        <div  class="weapon"> Weapon: <span class="highlighted">${weapon.value}</span></div>
        `
  
        parentDiv.appendChild(newCharDiv);

        name.value = '';
        occupation.value = '';
        weapon.value = '';
        debt.checked = false;
      })
      .catch(err => {
        console.log(err);
      });

  }
  
  document.getElementById('send-data-edit').onclick = function(e){
                
    e.preventDefault();
    let name = document.getElementById("edit-name");
    let weapon = document.getElementById("edit-weapon");
    let occupation = document.getElementById("edit-occupation");
    let debt = document.getElementById("edit-cartoon");
    let theId = document.getElementById("edit-id").value;

    axios
      .put("https://ih-crud-api.herokuapp.com/characters/"+theId, {
        name: name.value,
        occupation: occupation.value,
        weapon: weapon.value,
        debt: debt.checked
      })
      .then(() => {
        console.log("yey");

        name.value = '';
        occupation.value = '';
        weapon.value = '';
        debt.checked = false;
      })
      .catch(err => {
        console.log(err);
      });







  }
})
