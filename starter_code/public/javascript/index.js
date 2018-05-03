// const charactersAPI = new APIHandler("http://localhost:3000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    // $('.characters-button').click(function(){
      console.log('characters button clicked');
  
      axios({
        method: "GET",
        url: `http://localhost:3000/characters`,
        // params: "URL parameters to be sent with the request" ,
      })
      .then(response => {
        // console.log(response.data);
        response.data.forEach(function(oneCharacter){
          // console.log(oneCharacter.name)
          $('.characters-container').append(`
          <div class="character-info">
          <div class="name">Name: ${oneCharacter.name}</div>
          <div class="occupation">Occupation: ${oneCharacter.occupation}</div>
          <div class="weapon">Weapon: ${oneCharacter.weapon}</div>
          <div class="cartoon">Cartoon: ${oneCharacter.cartoon}</div>
          
        </div>
          
          `)
        })
  
      })
      .catch(err => {
        console.log(err)
      })
    // }) 


  }
  
  document.getElementById('fetch-one').onclick = function(){
    // $(document).ready(function(){

      // $('.submit-button').click(function(){
          // console.log("button clicked");
    
          const whichChar = $('.character-id').val();
    
          // console.log(whichChar)
    
          axios({
            method: "GET",
            url: `http://localhost:3000/characters/${whichChar}`, 
            // params: "URL parameters to be sent with the request" ,
          })
          .then(result => {
            //Here we can do whatever we want with the response object
            console.log(result.data)
            
            $('.characters-container').append(`
            <div class="character-info">
            <div class="name">Name: ${result.data.name}</div>
            <div class="occupation">Occupation: ${result.data.occupation}</div>
            <div class="weapon">Weapon: ${result.data.weapon}</div>
            <div class="cartoon">Cartoon: ${result.data.cartoon}</div>
            
          </div>
            
            `)
          })
          .catch(err => {
            //Here we catch the error and display it
            console.log(err)
          })
    
      // })
    // })
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){

            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    
    // $('#send-data').click(function(){
      // console.log("new char button clicked")
      // const name = $('.char-name').val();
      // const occupation = $('.char-occ').val();
      // const weapon = $('.char-weapon').val();
      // this is same as doing it in a charInfo
      // console.log(name, occupation, weapon)
      const charInfo = {
        
         name : $('.char-name').val(),
         occupation : $('.char-occ').val(),
         weapon : $('.char-weapon').val(),
         cartoon : $('.char-cartoon').val(),
    
      }
    
      //can do this same thing with axios.get vvvv
    
    
      axios.post(`http://localhost:3000/characters`, charInfo)
      .then(response =>{
        console.log("char create ok!" , response)
      })
    
    // })
                
  }
})
