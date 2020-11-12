

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
   
  getFullList () {
    let data = " "
    axios.get(this.baseUrl).then(res =>{
        data = res.data 
    }).catch(error => {console.log(error)})
    return data
  }

  getOneRegister (id) {
    let id= " "
    axios.get(this.baseUrl).then(res =>{
      id = res.data
    }).catch(error =>{console.log(error)})
  }

  createOneRegister () {
   
        document.getElementById("#new-character-form").addEventListener("submit",e =>{
          e.preventDefault()
          console.log("form submit")
          const name = document.getElementById("name").value;
          const occupation = document.getElementById("occupation").value;
          const weapon = document.getElementById("weapon").value;
          const cartoon = document.getElementById("cartoon").value;

          const newCharacterInfo = {
            name,
            occupation,
            weapon,
            cartoon
          };
        

   axios.post(this.baseUrl,newCharacterInfo)
      .then(()=>
      {
        this.getOneRegister()
  document.getElementById("#new-character-form").reset() 
      }).catch(err => console.log(`Error while saving a new character ${err}`))
    })
  }
  
  updateOneRegister (id){
   
    const charName = document.getElementById('update-name-input');
    const charOccupation = document.getElementById('update-occupation-input');
    const charWeapon = document.getElementById('update-weapon-input');
    const charId = document.getElementById('char-id');

    const updateCharacter = id =>{
      let id=""
      axios.get(`${this.baseUrl}/${id}`)
      .then(response => {
        const { id, name, occupation, weapon} =response.data;
        charName.value = name;
        charOccupation.value = occupation;
        charWeapon.value = weapon;
        charId.value = id;
        document.getElementById("#edit-character-form").style.display ="block;"
      })
      .catch(error=> {
        error.response.status === 404 ? alert(`The id ${charId} doesn't exist`):
        alert("server error!");

      })
    }
  } 

  deleteOneRegister (id) {
    let id= " "
    if (id == 1 || id == 2){
      alert(`Character with id ${id} can't ne deleted`)
      return;
    }
    const toDelete = confirm(`Are you sure you want to delete?`);
    if(toDelete){
      axios.delete(`${this.baseUrl}/${id}`)
      .then(response => {
        alert(response.data)
        getCharacters();
      }).catch(err => console.log(`Err while deleting character:${err}`))
    }
  }
   
  }
