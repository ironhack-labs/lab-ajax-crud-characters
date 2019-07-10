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
        newNameDiv.innerHTML =`Character Name: ${eachOne.name}`

        let newWeaponDiv = document.createElement('div');
        newWeaponDiv.classList.add('weapon');
        newWeaponDiv.innerHTML =`Weapon: ${eachOne.weapon}`

        let newOccupationDiv = document.createElement('div');
        newOccupationDiv.classList.add('occupation');
        newOccupationDiv.innerHTML =`Occupation: ${eachOne.occupation}`

        let newCartoonDiv = document.createElement('div');
        newCartoonDiv.classList.add('cartoon');
        newCartoonDiv.innerHTML =`Is a Cartoon? ${eachOne.debt ? "Yes" : "No"}`

        newCharDiv.appendChild(newNameDiv);
        newCharDiv.appendChild(newOccupationDiv);
        newCharDiv.appendChild(newCartoonDiv);
        newCharDiv.appendChild(newWeaponDiv);
        parentDiv.appendChild(newCharDiv);
      });




    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
    let theId = document.getElementsByName('character-id')[0].value;
    let parentDiv = document.getElementsByClassName('characters-container')[0];
    
    axios.get('https://ih-crud-api.herokuapp.com/characters/'+theId)
    .then(result => {
      console.log(result.data);
      parentDiv.innerHTML = '';
      let newCharDiv = document.createElement("div");
      newCharDiv.classList.add('character-info');
      newCharDiv.innerHTML = `
      <div  class="name"> Character Name: ${result.data.name} </div>
      <div  class="occupation"> Occupation: ${result.data.occupation}</div>
      <div  class="cartoon">Is a Cartoon? ${result.data.debt ? "Yes" : "No"}</div>
      <div  class="weapon"> Weapon: ${result.data.weapon}</div>
      `

      parentDiv.appendChild(newCharDiv);
    })
    .catch(err => {
      console.log(err);
    })




  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
