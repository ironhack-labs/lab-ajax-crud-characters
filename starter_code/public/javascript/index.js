const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  //  axios
  //  .get("http://localhost:8000/characters")
   .then(response => {
    console.log('search succes');
    console.log(response.data);//solo consola
    if(!response.ok)return Promise.reject(response.statusText)
    return response.json();
   })
   .then(data =>{
      muestraTodo(data);
      })
   .catch(error => {
     console.log('Oh nooo hay un error!');
     console.log(error);
   })

  }//final de busca todos
  
  document.getElementById('fetch-one').onclick = function(){
    const fetchOne = document.getElementById("buscaUno").value;
    axios
    .get(`http://localhost:8000/characters/${fetchOne}`)
    .then(response => {
      console.log('search succes')
      console.log(response.data) //solo consola 
    })
    .catch(error => {
      console.log('Oh nooo hay un error!');
      console.log(error);
    })
  }//final de busca uno 
  
  document.getElementById('delete-one').onclick = function(){
    const fetchOne = document.getElementById("borrauno").value;
        axios
        .delete(`http://localhost:8000/characters/${fetchOne}`)
        .then(response => {
          console.log(response)
          console.log("has borrado a un monito")
        })
        .catch(error => {
          console.log('Oh nooo hay un error!');
          console.log(error);
        })
  }//final de borra uno 
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    console.log("form submit");
            const updateInfo = {
              name: document.getElementById('editName').value,
              occupation: document.getElementById('editOcc').value,
              weapon: document.getElementById('editWpn').value,
              cartoon: document.getElementById('editCrt').value
            };

            const editOne = document.getElementById('chrId').value;
            axios
            .patch(`http://localhost:8000/characters/${editOne}`,updateInfo)
            .then(response => {
              console.log('UPdate SUCCESS!!');
            })
            .catch(error => {
              console.log('Oh nooo hay un error!');
              console.log(error);
            })
 
  }//final de edita uno 
  
  document.getElementById('new-character-form').onsubmit = function(){
    const characterinfo = {
      id: '',
      name: document.getElementById('name').value,
      occupation: document.getElementById("occupation").value,
      weapon: document.getElementById("weapon").value,
      cartoon: document.getElementById("cartoon").value
    }

    axios
    .post("http://localhost:8000/characters",characterinfo)
    .then(response => {
      console.log(response)
      console.log("has creado un nuevo caracter")
    })
    .catch(error => {
      console.log('Oh nooo hay un error!');
      console.log(error);
    })
    event.preventDefault();
    console.log("form submit");
  }//final de crea uno 
})


//funciones extras para el dom
function creaunNuevoDiv(objeto){
  let arrayllaves = Object.keys(objeto);
  let arrayvalores = Object.values(objeto);

  let cajaDivs = document.getElementsByClassName('characters-container')[0];
  let nuevacajaDiv = document.createElement("div");
  nuevacajaDiv.className="character-info";

  let divefi;

  for(let i=0; i < arrayllaves.length; i++){
    divefi= creadivKey(arrayllaves[i], arrayvalores[i]);
    nuevacajaDiv.appendChild(divefi);
  }
  cajaDivs.appendChild(nuevacajaDiv);
}

function creadivKey (llave, valor){
  let div = document.createElement("div");
  div.className=llave;
  div.innerHTML= " " + llave + " : " + valor;
  return div;
}

function muestraTodo(arreglObjetos){
  arreglObjetos.forEach((elemento) => {
    creaunNuevoDiv(elemento);
  });
}