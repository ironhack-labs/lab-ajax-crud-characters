const axiosApp = axios.create({
  baseUrl: 'http://localhost:8000'
})

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axiosApp
      .get(this.BASE_URL + '/characters')
      
      .then(charactersAPI.printAll())

      .catch(err => console.log(err))
    
    
    

  }

  getOneRegister() {
    const idChar = document.querySelector('.operation input').value


    
    axiosApp
      .get(this.BASE_URL + '/characters' + '/' + idChar)
      .then(theChar => {
        
        //console.log(theChar.data)
      })
      .catch(err => {
        document.querySelector('.operation input').value =""
        console.log(err)
      })
      
    

  }
  printOne() {

    const idChar = document.querySelector('.operation input').value

    axiosApp
      .get(this.BASE_URL + '/characters' + '/' + idChar)
      .then(response => {

        document.querySelector('.delete input').value = ""
        

        
        document.querySelector(".name").innerHTML = ("Character Name: ") + response.data.name
        document.querySelector(".occupation").innerHTML = ("Character Occupation: ") + response.data.occupation
        document.querySelector(".cartoon").innerHTML = ("Is a cartoon: ") + response.data.cartoon
        document.querySelector(".weapon").innerHTML = ("Character weapon: ") + response.data.weapon
        


      })
      .catch(err => {
        document.querySelector('.operation input').value = ""
        
        console.log(err)
      })

  }





  createOneRegister() {
    const imputs = document.querySelectorAll('#new-character-form input')
   
    const character = {
      name: imputs[0].value,
      occupation: imputs[1].value,
      weapon: imputs[2].value,
      cartoon: imputs[3].checked
      
    }
    axiosApp
      .post(this.BASE_URL + '/characters', character)
      .then(() => { 

        console.log(document.querySelectorAll('#new-character-form input').value)
        document.querySelector('#send-data').style.background = 'green'
      })
      .catch(err => {
       
        document.querySelectorAll('#new-character-form input').value = ""


        document.querySelector('#send-data').style.background = 'red'
        console.log(err)
      })

  }

  updateOneRegister() {
    const idChar = document.querySelector('#edit-character-form input').value
    const inputs = document.querySelectorAll('#edit-character-form input')
    
    const newCharacterData = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }
    axiosApp
      .put((this.BASE_URL + '/characters' + '/' + idChar), newCharacterData)
      .then(() => { 
        document.querySelector('#send-data-update').style.background = 'green'
      })
      .catch(err => {
        document.querySelector('#send-data-update').style.background = 'red'

        console.log(err)
      })


  }

  deleteOneRegister() {
    const idChar = document.querySelector('.delete input').value
    

    
    axiosApp
      
      .delete(this.BASE_URL + '/characters' + '/' + idChar)
      .then(theChar => {
        document.querySelector('#delete-one').style.background = 'green'
        document.querySelector('.delete input').value = ""
        console.log(theChar.data)
      })
      .catch(err => {
        document.querySelector('#delete-one').style.background = 'red'
        document.querySelector('.delete input').value = ""
        console.log(err)
      })

  }
  printAll() {
    axiosApp
      .get(this.BASE_URL +'/characters')
      .then(response => { 
        
        //document.querySelector('.characters-container').style.display = 'none'
        const box = document.querySelector('.characters-container')
        const subBox = document.querySelector('.character-info')



        response.data.forEach(elm => {
         
          const clone = subBox.cloneNode(true)
          document.querySelector(".name").innerHTML = ("Character Name:") + elm.name
          document.querySelector(".occupation").innerHTML = ("Character Occupation:") + elm.occupation
          document.querySelector(".cartoon").innerHTML = ("Is a cartoon:") + elm.cartoon
          document.querySelector(".weapon").innerHTML = ("Character weapon:") + elm.weapon
          box.appendChild(clone)

        })
      })
      .catch(err => console.log(err))
  }

  

}



