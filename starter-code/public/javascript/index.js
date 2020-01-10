const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  event.preventDefault();
  document.getElementById('fetch-all').addEventListener('click', function (event) {
     charactersAPI.getFullList().then(responseData=>{console.log(responseData[0].name)
     let html = "";
      for(let i=0; i<responseData.length; i++){
       console.log(responseData[i])
     html += `<div class="character-info">
        <div>Character Name: ${responseData[i].name}</div>` +
       `<div>Character Occupation: <span> ${responseData[i].occupation}</span></div>`+
        `<div>Is a Cartoon?: ${responseData[i].cartoon}</div>`+
       `<div>Character Weapon: ${responseData[i].weapon}</div> 
        </div>`
     }
     document.getElementById("characters-container").innerHTML=html
     })
          
  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    let charId=document.getElementById("character-id").value
    charactersAPI.getOneRegister(charId).then(responseData=>{
      console.log(responseData)
      
      document.getElementById("characters-container").innerHTML= `<div class="character-info">
        <div>Character Name: ${responseData.name}</div>` +
       `<div>Character Occupation: <span> ${responseData.occupation}</span></div>`+
        `<div>Is a Cartoon?: ${responseData.cartoon}</div>`+
       `<div>Character Weapon: ${responseData.weapon}</div> 
        </div>`
            
    })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let charId=document.getElementById("character-id-delete").value
    charactersAPI.deleteOneRegister(charId)
    .then(responseData=>{document.getElementById("delete-one").style.backgroundColor = "green";}  )
    .catch(err=>document.getElementById("delete-one").style.backgroundColor = "red")

  })


  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
  });


  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
     let bodyId={
       name: document.getElementById("nameChar").value,
       occupation: document.getElementById("createOccu").value,
       weapon: document.getElementById("weapon").value,
       cartoon: document.getElementById("checkbox").value
  }

   charactersAPI.createOneRegister(bodyId)
   .then(responseData=>console.log(responseData)  )
   
 // console.log(bodyId)

  });
});
