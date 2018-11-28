const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    deleteChilds('.characters-container')
    charactersAPI.getFullList()
        .then(result => {
            result.data.forEach(c => {
                const div = document.querySelector(".characters-container");
                var tr = document.createElement("tr");
                tr.innerHTML = `
                    <div class="character-info">
                      <div class="name">${c.id}</div>
                      <div class="occupation">${c.name}</div>
                      <div class="cartoon">${c.occupation}</div>
                      <div class="weapon">${c.weapon}</div>
                    </div>
               `;
                div.appendChild(tr);
                  });
                console.log(data)
            })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    deleteChilds('.characters-container')
    //console.log(document.querySelector('#character-id').value)
    charactersAPI.getOneRegister(document.querySelector('#character-id').value)
        .then(c => {
                console.log(c)
                const div = document.querySelector(".characters-container");
                var tr = document.createElement("tr");
                tr.innerHTML = `
                    <div class="character-info">
                      <div class="name">${c.data.id}</div>
                      <div class="occupation">${c.data.name}</div>
                      <div class="cartoon">${c.data.occupation}</div>
                      <div class="weapon">${c.data.weapon}</div>
                    </div>
               `;
                div.appendChild(tr);

        })

  }
  
  document.getElementById('delete-one').onclick = function(){
        charactersAPI.deleteOneRegister(document.querySelector('#character-id-delete').value)
            .then(data => console.log(data))
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
      e.preventDefault();

      console.log(e.target.cartoon.value)
      let flag=false
      //if(e.target.cartoon.value == 'on') flag=true
      const char = {
          id: e.target.id.value,
          name: e.target.name.value,
          occupation: e.target.occupation.value.value,
          weapon: e.target.weapon.value,
          cartoon: flag
      };
            charactersAPI.updateOneRegister(char)
                .then(data => console.log(data))
                .catch(e => console.log(e))
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
      e.preventDefault();

      const char = {
          id: e.target.id.value,
          name: e.target.name.value,
          occupation: e.target.occupation.value.value,
          weapon: e.target.weapon.value,
          cartoon: true
      };
      charactersAPI.createOneRegister(char)
          .then(data => console.log(data))
          .catch(e => console.log(e))
  }
})

function deleteChilds(id) {
    var myNode = document.querySelector(id);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}