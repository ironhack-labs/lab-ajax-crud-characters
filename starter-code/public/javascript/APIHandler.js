class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList = () => {
    axios
      .get(this.BASE_URL +"/characters")
      .then(res => {
        const arrayCha = [...res.data];
        this.displayCard(arrayCha);
      })
      .catch(err => console.log(err))
  }

  getOneRegister =() =>{
    const id = document.getElementsByName('character-id')[0].value;
    axios
    .get(this.BASE_URL+"/characters/" +id)
    .then(res => {
      const arrayCha = new Array(res.data);
      this.displayCard(arrayCha); 
        
    })
    .catch(err => console.log(err))
    
  }

  createOneRegister = (event) => {
    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('name')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon = document.getElementsByName('cartoon')[0].value
    axios
    .post(this.BASE_URL + "/characters", {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon === "on" ? true:false
    })
    .then(res => {
      document.getElementById('send-data').style.backgroundColor = "#1E90FF"
    })
    .catch(res => {
      document.getElementById('send-data').style.backgroundColor = "#DC143C"
    })

  }

  updateOneRegister = (event) => {
    event.preventDefault();
    const id = document.getElementsByName('chr-id')[0].value;
    const name = document.getElementsByName('name-edit')[0].value;
    const occupation = document.getElementsByName('occupation-edit')[0].value;
    const weapon = document.getElementsByName('weapon-edit')[0].value;
    const cartoon = document.getElementsByName('cartoon-edit')[0].value
    const updatedCharacter ={
      name: name,
      occupation:occupation,
      weapon:weapon,
      cartoon: cartoon === "on" ? true:false
    }
    axios.patch(this.BASE_URL+"/characters/" +id,updatedCharacter) 
    .then(res => {
      document.getElementById('update-data').style.backgroundColor = "#1E90FF"
    })
    .catch(err => {
      document.getElementById('update-data').style.backgroundColor = "#DC143C"
    })
  }

  deleteOneRegister = ()=> {
    const id = document.getElementsByName('character-id-delete')[0].value;
    axios
    .delete(this.BASE_URL+"/characters/" +id)
    .then(res => {
      document.getElementById('delete-one').style.backgroundColor = "#1E90FF"
    })
    .catch(err => {
      document.getElementById('delete-one').style.backgroundColor = "#DC143C"
    })
  }

  displayCard =(arrayCha)=>{

    const container = document.querySelector('#container-card')
        if(container.innerHTML !=="") {container.innerHTML =""}
      for(let i = 0; i<arrayCha.length;i++)
      {
        const markup =`
        <div class="character-info">
        <div class="id">Id: ${arrayCha[i].id}</div>
        <div class="name">Name: ${arrayCha[i].name}</div>
        <div class="occupation">Occupation: ${arrayCha[i].name}</div>
        <div class="cartoon">Is a Cartoon?: ${arrayCha[i].cartoon}</div>
        <div class="weapon">Weapon: ${arrayCha[i].weapon}</div>
      </div>
      `
        container.insertAdjacentHTML("afterbegin",markup)
      }
  }
}
