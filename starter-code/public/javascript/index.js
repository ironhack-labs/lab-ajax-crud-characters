const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})

$("#fetch-all").click(() => {
  axios.get('https://ih-crud-api.herokuapp.com/characters')
  .then((response)=>{
    $(".results").html("");
      response.data.forEach((character)=>{
        $(".results").append(`<div class="characters-container">
        <div class="character-info">
        <div class="id">Id: <span>${character.id}</span></div>
        <div class="name">Name: <span>${character.name}</span></div>
        <div class="occupation">Occupation:<span>${character.occupation}</span></div>
        <div class="cartoon">Debt?: <span>${character.debt}</span></div>
        <div class="weapon">Weapon:<span>${character.weapon}</span> </div>
        </div>
      </div>`)
      })
  })
  .catch((err)=>{
      console.log(err)
  })
})

$("#fetch-one").click(()=>{
  axios.get(`https://ih-crud-api.herokuapp.com/characters/${$("#character-id-find").val()}`)
  .then((response)=>{
    $(".results").html("");
        $(".results").append(`<div class="characters-container">
        <div class="character-info">
        <div class="id">Id: <span>${response.data.id}</span></div>
        <div class="name">Name: <span>${response.data.name}</span></div>
        <div class="occupation">Occupation:<span>${response.data.occupation}</span></div>
        <div class="cartoon">Debt?: <span>${response.data.debt}</span></div>
        <div class="weapon">Weapon:<span>${response.data.weapon}</span> </div>
        </div>
      </div>`)
  })
  .catch((err)=>{
      console.log(err)
  })
})

$('#send-data').click((e) => {
  e.preventDefault();
  axios.post('https://ih-crud-api.herokuapp.com/characters', {
      name: $("#name").val(),
      occupation: $("#occupation").val(), 
      weapon: $("#weapon").val(), 
      debt: $('#debt:checked').val()? true : false
  })
  .then((result)=>{
     
  })
  .catch((err)=>{
      console.log(err)
  })
})

$('#send-data').click((e) => {
  e.preventDefault();
  axios.post('https://ih-crud-api.herokuapp.com/characters', {
      name: $("#name").val(),
      occupation: $("#occupation").val(), 
      weapon: $("#weapon").val(), 
      debt: $('#debt:checked').val()? true : false
  })
  .then((result)=>{
     
  })
  .catch((err)=>{
      console.log(err)
  })
})

$("#send-data2").click((e)=>{
  e.preventDefault();
  axios.put(`https://ih-crud-api.herokuapp.com/characters/${$("#char-edit").val()}`, {
    name: $("#name-edit").val(),
    occupation: $("#occupation-edit").val(),
    weapon: $("#weapon-edit").val(),
    debt:$('#debt-edit:checked').val()? true : false,
  })
  .then((result)=>{

  })
  .catch((err)=>{
    console.log(err)
  })
})

$("#delete-one").click((e)=>{
  axios.delete(`https://ih-crud-api.herokuapp.com/characters/${$("#character-id-delete").val()}`, {})
  .then((result)=>{
    console.log(result)
  })
  .catch((err)=>{
    console.log(err)
  })
})