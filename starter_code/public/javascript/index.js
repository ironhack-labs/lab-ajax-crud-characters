const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList() //duda: ¿por qué se llama aquí a charactersAPI si getFullList ya lleva metida la URL?
    .then(data => {
      fetchAll => {
        let i = document.getElementsByClassName('name');
        i.innerText='name'; //tiene que mostrar todos, hay que añadir un div por cada personaje
      } 
    })
    .catch((err => {
      console.log(err)
    }))
  }
    
  document.getElementById('fetch-one').onclick = function(){
   charactersAPI.getOneRegister()
   .then(data => {
    fetchOne((id) => {
      let id = data.data.id; //no estoy consiguiendo ver cómo enlazar la info con el DOM
      let j = document.getElementsByClassName('character-id')
    }) 
   .catch((err => {
    console.log(err)
  }))
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }


})

