const charactersAPI = new APIHandler("http://localhost:8000");
const url = "http://localhost:8000/characters";

//FETCH BY ID
$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  //FETCH ONE BY ID 
  document.getElementById("fetch-one").onclick = function() {
    let id = document.getElementsByTagName("character-id").value;
    fetch(url + "/" + id)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  //DELETE BY ID
  document.getElementById("delete-one").onclick = function() {
    let id = document.getElementsByTagName("character-id-delete").value;

    fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        //Se le notifica a fetch que se le pasa datos en formato json
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return Promise.reject(res.statusText);
        return res.json();
      })
      .then(data => {
        console.log(id);
      })
      .catch(err => console.log(err));
  };

  //EDIT FORM
  document.getElementById("edit-character-form").onsubmit = function(e) {};
    e.preventDefault();
    
    let id = document.getElementsByTagName('id').value
    let nombre = document.getElementsByTagName('name').value
    let ocupacion = document.getElementsByTagName('occupation').value
    let arma = document.getElementsByTagName('weapon').value
    let caricatura = document.getElementsByTagName('cartoon').value
    let object = {
      id: id,
      nombre: nombre,
      ocupacion: ocupation,
      arma: weapon,
      caricatura:cartoon
  }

  
//CREATE NEW
  document.getElementById("new-character-form").onsubmit = function() {};
    let nombre = document.getElementsByTagName('name').value
    let ocupacion = document.getElementsByTagName('occupation').value
    let arma = document.getElementsByTagName('weapon').value
    let caricatura = document.getElementsByTagName('cartoon').value

    fetch(url,{
      method: 'POST', 
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(newItem)
    })

    .then(res=>{
        if(!res.ok) return Promise.reject(res.statusText);
        return res.json()
    })

    .then(data=>{
        console.log(data);
      
    })
    .catch(err=>console.log(err))
    
});
