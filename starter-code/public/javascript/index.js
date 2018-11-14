const charactersAPI = new APIHandler("http://localhost:8000")
let chars;
const name = document.getElementsByClassName("name");
const charsInfo = document.getElementById("character-info");

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then(response => {chars = response;
      console.log(chars);
      for (let i=0; i<chars.data.length; i++) {
        const { id, name, occupation, cartoon, weapon } = chars.data[i];
        const newCharsHtml = 
             `
               <div class="character-info">
                 <p> Id: ${id} </p>
                 <p> Name: ${name} </p>
                 <p> Occupation: ${occupation} </p>
                 <p> Is a Cartoon?: ${cartoon} </p>
                 <p> Weapon: ${weapon} </p>
               </div>
             `;
         document.getElementById("character-info").innerHTML += newCharsHtml;
      }
    });
  }
});
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementsByName("character-id")[0].value;
    charactersAPI.getOneRegister(id)
    .then (response => {
      console.log(response);
      const { id, name, occupation, cartoon, weapon } = response.data;
      const newCharsHtml = 
             `
               <div class="character-info">
                 <p> Id: ${id} </p>
                 <p> Name: ${name} </p>
                 <p> Occupation: ${occupation} </p>
                 <p> Is a Cartoon?: ${cartoon} </p>
                 <p> Weapon: ${weapon} </p>
               </div>
             `;
         document.getElementsByClassName("operation")[0].innerHTML += newCharsHtml;
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.getElementsByName("character-id-delete")[0].value;
    charactersAPI.deleteOneRegister(id)
    .then (() => {
      let btnColor = document.getElementById("delete-one");
      btnColor.style.backgroundColor = "green";
    })
    .catch (() => {
      let btnColor = document.getElementById("delete-one");
      btnColor.style.backgroundColor = "red";
    })
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
