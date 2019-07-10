const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  var classname ="";
  document.getElementById('fetch-all').onclick = function(){
    
    let list = document.getElementById('characters-container');
    list.innerHTML = "";
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((result)=>{
      result.data.forEach((e,i)=>{
        let newItem = document.createElement('div');
        newItem.className = "character-info";
        newItem.innerHTML =  `
        <div class="name">Name: ${e.name}</div>
        <div class="occupation">Occupation: ${e.occupation}</div>
        <div class="debt">Debt: ${e.debt}</div>
        <div class="weapon">Weapon: ${e.weapon}</div>
        <button class="editThisChar" id=${i+2}>Edit</button>
        `
        list.appendChild(newItem);
      })
    classname = document.getElementsByClassName("editThisChar");
    for (var i = 0; i < classname.length+1; i++) {
    classname[i].addEventListener('click', populateEdit, false);
}
    })
    .catch((err)=>{
      console.log(err);
    })

  }
  
  function populateEdit(){
    id = Number(this.id);
    console.log(id)
    axios.get('https://ih-crud-api.herokuapp.com/characters/'+id)
    .then((result)=>{
        document.getElementById('chr-id').value = result.data.id;
        document.getElementById('name').value = result.data.name;
        document.getElementById('occupation').value = result.data.occupation;
        document.getElementById('weapon').value = result.data.weapon;
        document.getElementById('debt').checked = result.data.debt.checked;
      })
  
    .catch((err)=>{
      console.log(err);
    })
      
}

   
    // console.log(id);
  
  
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

