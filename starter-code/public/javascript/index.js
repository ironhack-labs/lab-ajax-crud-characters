const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

    let charBox = document.getElementById('charBox')
    // console.log(charBox)
    

    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
      console.log(response.data);
        charBox.innerHTML = "";

        response.data.forEach((eachOne)=>{

            let newChar = document.createElement('div');
            newChar.className = "character-info"
            newChar.innerHTML = `
            <div class="name">${eachOne.name}</div>
            <div class="occupation">${eachOne.occupation}</div>
            <div class="cartoon">${eachOne.debt}</div>
            <div class="weapon">${eachOne.weapon}</div>
            `

            charBox.appendChild(newChar);

        })

    })
    .catch((err)=>{
        console.log(err);
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){

    let charBox = document.getElementById('charBox')
    let charID = document.getElementById('idSearch').value
    console.log(charID)
    

    axios.get('https://ih-crud-api.herokuapp.com/characters/' + charID)
    .then((response)=>{
      console.log(response.data);
        charBox.innerHTML = "";
        document.getElementById('idSearch').value = ""  ;      
        // response.data.forEach((eachOne)=>{

            let newChar = document.createElement('div');
            newChar.className = "character-info"
            newChar.innerHTML = `
            <div class="name">${response.data.name}</div>
            <div class="occupation">${response.data.occupation}</div>
            <div class="cartoon">${response.data.debt}</div>
            <div class="weapon">${response.data.weapon}</div>
            `

            charBox.appendChild(newChar);
          

        // })

    })
    .catch((err)=>{
        console.log(err);
    })
    
  }
  
  document.getElementById('delete-one').onclick = function(){
    
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){

    e.preventDefault();

    let id = Number(document.getElementById('the-id').value);
    let name = document.getElementById('edit-name').value;
    let occupation = document.getElementById('edit-occupation').value;
    let weapon = document.getElementById('edit-weapon').value;
    let debt = document.getElementById('edit-debt').checked;
    console.log(name, occupation, weapon, debt)

    axios.put('https://ih-crud-api.herokuapp.com/characters/' + id , {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
  })

    
    .then((theCharacter)=>{
      
      // console.log(theCharacter.data)
      
     

    })
    .catch((err)=>{
        console.log(err);
    })
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){

    e.preventDefault();

    let name = document.getElementById('new-name').value;
    let occupation = document.getElementById('new-occupation').value;
    let weapon = document.getElementById('new-weapon').value;
    let debt = document.getElementById('new-debt').checked;
    console.log(name, occupation, weapon, debt)

    axios.post('https://ih-crud-api.herokuapp.com/characters',  {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
  })
    .then(()=>{
      
      document.getElementById('new-name').value = "";
      document.getElementById('new-occupation').value = "";
      document.getElementById('new-weapon').value = "";
      document.getElementById('new-debt').checked = false;

    })
    .catch((err)=>{
        console.log(err);
    })
                
  }









})
