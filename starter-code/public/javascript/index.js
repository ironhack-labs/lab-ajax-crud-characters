const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    
    let list = document.getElementById('characters-container');
    list.innerHTML = "";
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((result)=>{
      result.data.forEach((e)=>{
        let newItem = document.createElement('div');
        newItem.className = "character-info";
        newItem.innerHTML =  `
        <div class="name">Name: ${e.name}</div>
        <div class="occupation">Occupation: ${e.occupation}</div>
        <div class="debt">Debt: ${e.debt}</div>
        <div class="weapon">Weapon: ${e.weapon}</div>
        `
        list.appendChild(newItem);
      })
    })
    .catch((err)=>{
      console.log(err);
    })

  }
  
  document.getElementById('fetch-one').onclick = function(){
    let list = document.getElementById('characters-container');
    list.innerHTML = "";
    let oneMovie = document.getElementById('oneMovie').value;
    console.log(oneMovie);
    axios.get('https://ih-crud-api.herokuapp.com/characters/'+oneMovie)
    .then((result)=>{
        let newItem = document.createElement('div');
        newItem.className = "character-info";
        newItem.innerHTML =  `
        <div class="name">Name: ${result.data.name}</div>
        <div class="occupation">Occupation: ${result.data.occupation}</div>
        <div class="debt">Debt: ${result.data.debt}</div>
        <div class="weapon">Weapon: ${result.data.weapon}</div>
        `
        list.appendChild(newItem);
      })
  
    .catch((err)=>{
      console.log(err);
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    let id = document.getElementById('chr-id').value;
    let name = document.getElementById('name').value;
    let occupation = document.getElementById('occupation').value;
    let weapon = document.getElementById('weapon').value;

    let debt = document.getElementById('debt').checked;  

    axios.put('https://ih-crud-api.herokuapp.com/characters/'+id, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
  })
  .then(()=>{
      console.log('yay')
      
      document.getElementById('name').value = "";
      document.getElementById('occupation').value = "";
      document.getElementById('weapon').value = "";

      document.getElementById('debt').checked = false;
      


  })
  .catch((err)=>{

      console.log(err);
  })

  
      
  }
  
  })
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let name = document.getElementById('new-name').value;
    let occupation = document.getElementById('new-occupation').value;
    let weapon = document.getElementById('new-weapon').value;

    let debt = document.getElementById('new-debt').checked;  
    axios.post('https://ih-crud-api.herokuapp.com/characters', {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
  })
  .then(()=>{
      console.log('yay')
      
      document.getElementById('new-name').value = "";
      document.getElementById('new-occupation').value = "";
      document.getElementById('new-weapon').value = "";

      document.getElementById('new-debt').checked = false;
      


  })
  .catch((err)=>{

      console.log(err);
  })

  
      
  
}

