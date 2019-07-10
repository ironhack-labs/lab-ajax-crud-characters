

$(document).ready( () => {
const name = document.querySelector('.name');
const fetchid = document.getElementById('character-search');
const upID = document.getElementById('upID');
const upName = document.getElementById('upName');
const upOcc = document.getElementById('upOcc');
const upWeap = document.getElementById('upWeap');
const upCheck = document.getElementById('upCheck');
const nname = document.getElementById('nname');
const nocc = document.getElementById('nocc');
const nweap = document.getElementById('nweap');
const ncart = document.getElementById('ncart');
let contain = document.querySelector('.characters-container');


  document.getElementById('fetch-all').onclick = function(){
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((result)=>{

      result.data.forEach((listings)=>{
        contain.innerHTML += `
        <div class="character-info">
        <div class="name">${listings.name}</div>
        <div class="occupation">${listings.occupation}</div>
        <div class="cartoon">${listings.debt}</div>
        <div class="weapon">${listings.weapon}</div>
      </div>`
      

        })
        })

    .catch((err)=>{
      console.log(err);
  })
  }

  
  document.getElementById('fetch-one').onclick = function(){
    axios.get('https://ih-crud-api.herokuapp.com/characters/'+fetchid.value)

    .then((result)=>{
      
      contain.innerHTML += `
      <div class="character-info">
      <div class="name">${result.data.name}</div>
      <div class="occupation">${result.data.occupation}</div>
      <div class="cartoon">${result.data.debt}</div>
      <div class="weapon">${result.data.weapon}</div>
    </div>`
    })

  }

  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();

      axios.put('https://ih-crud-api.herokuapp.com/characters/'+upID.value,{
     

    name:upName.value,
    occupation:upOcc.value,
    debt:upCheck.checked,
    weapon:upWeap.value,

  })
      .then((response)=>{
       
        contain.innerHTML += `
        <div class="character-info">
        <div class="name">${response.data.name}</div>
        <div class="occupation">${response.data.occupation}</div>
        <div class="cartoon">${response.data.debt}</div>
        <div class="weapon">${response.data.weapon}</div>
      </div>`
      })
  
    }     
  
  
  document.getElementById('new-character-form').onsubmit = function(e){
      e.preventDefault();

        axios.post('https://ih-crud-api.herokuapp.com/characters/', {
          name: nname.value,
          occupation:nocc.value,
          weapon: nweap.value,
          debt: ncart.checked
          
      })
      .then((theresponse)=>{
       
        contain.innerHTML += `
        <div class="character-info">
        <div class="name">${theresponse.data.name}</div>
        <div class="occupation">${theresponse.data.occupation}</div>
        <div class="cartoon">${theresponse.data.debt}</div>
        <div class="weapon">${theresponse.data.weapon}</div>
      </div>`
      });
  
      
    
      } 
  
})
