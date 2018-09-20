const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then(res => {
      res.forEach(element => {
        console.log(element.name);
        console.log(element.occupation);
        console.log(element.weapon);        
      });
    });
  }
  
  document.getElementById('fetch-one').onclick = function(){
    console.log(`hola mundo`);
    getOneRegister ();
    // const characterInfo = {
    //   name: "Han Solo old",
    //   occupation: "Smuggler",
    //   weapon: "Blaster Pistol",
    //   cartoon: true
    // } ;
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    console.log(`ver esto`,document.getElementsByClassName(`character-info`)[0].name);

    const characterInfo = {
      name: document.getElementsByClassName(`character-info`)[0].getElementsByTagName('div')[0].value,
      occupation: document.getElementsByClassName(`character-info`)[0].getElementsByTagName('div')[1].value,
      weapon: document.getElementsByClassName(`character-info`)[0].getElementsByTagName('div')[2].value,
      cartoon: document.getElementsByClassName(`character-info`)[0].getElementsByTagName('div')[3].value
    }
    //console.log('mi caractere', characterInfo);     
  }
})
