const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  // var data = axios.get("http://localhost:8000/characters").then(function(elements) {
  //   elements.data
  })
  //console.log(document.getElementsByClassName('name')[0].innerText) =  
  document.getElementById('fetch-all').onclick = function getFullList (){
    axios.get("http://localhost:8000/characters").then(function(elements) {
     for(e=0; e<elements.data.length;e++){
          document.getElementsByClassName('name')[0].innerText +=` ${elements.data[e].name}`
          document.getElementsByClassName('occupation')[0].innerText += ` ${elements.data[e].occupation}`
          document.getElementsByClassName('cartoon')[0].innerText +=` ${elements.data[e].cartoon}`
          document.getElementsByClassName('weapon')[0].innerText +=` ${elements.data[e].weapon}`
    //console.log(document.getElementsByClassName('characters-container'))
  }
})
}
    //for(e=1;e<characters-ServiceWorkerContainer.length;e++) {
    //console.log(axios.get("http://localhost:8000/characters"))
  //}
  document.getElementById('fetch-one').onclick = function getOneRegister(){
    //for(e=0; e<elements.length;e++) {
      let id = document.getElementsByClassName("operation")[1].children[1].value
      console.log(id)
      axios.get("http://localhost:8000/characters").then(function(character){
        console.log(character.data[id]);
        document.getElementsByClassName('name')[0].innerText =` ${character.data.name}`
          document.getElementsByClassName('occupation')[0].innerText = ` ${characters.data.occupation}`
          document.getElementsByClassName('cartoon')[0].innerText =` ${characters.data.cartoon}`
          document.getElementsByClassName('weapon')[0].innerText =` ${characters.data.weapon}`
      //  console.log(elements)
       })
    }
    
  //}
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
//})
