// Axios app creado en forma de nueva instancia
const axiosApp = axios.create({
  baseURL: 'http://localhost:8000'
})




class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {

    return axiosApp
      .get('/characters')
      .then(response => {
        console.log('Characters:', response.data)
        console.log("response desde apihandler", response)

      })

      .catch(err => console.log(err))

  }


  getOneRegister(id) {
    return axiosApp
      .get('/characters/' + id)
      .then(response => {

        console.log('Characters:', response.data)
        document.querySelector('#character-id').value = ""
        //TODO conseguir el .rest()
      })
      .catch(err => console.log(err))
  }

  createOneRegister(inputNew, btn) {
    //TODO pregutnar si hacer esto en index.js
    const characterNew = {
      name: inputNew[0].value,
      occupation: inputNew[1].value,
      weapon: inputNew[2].value,
      cartoon: inputNew[3].checked
    }

    return axiosApp
      .post('/characters', characterNew)
      .then(response => {
        alert(response.status)
        response.status === 201 ? (btn.style.backgroundColor = "green") : (btn.style.backgroundColor = "red")
      })
      .catch(err => {
        btn.style.backgroundColor = "red"
        console.log(err)
      })
  }

  updateOneRegister(characterEdit, btn) {
    console.log("entras asquí?")

    axiosApp
      .put(`/characters/${characterEdit.id}`, characterEdit)
      .then(response => response.status === 200 ? (btn.style.backgroundColor = "green") : (btn.style.backgroundColor = "red")
      )
      .catch(err => {
        btn.style.backgroundColor = "red"
        console.log(err)
      })
  }

  deleteOneRegister(id, btn) {
    axiosApp
      .delete('/characters/' + id)
      .then(response => {
        console.log('Characters:', response.data)
        alert("CENTRA TU ATENCIÓN EN EL BOTÓN DEL DELETE PORQUE SERÁ MUY BREVE")
        //TODO mal, lo suyo sería obtener el response.status fuera?
        if (response.status === 200) { btn.style.backgroundColor = "green" }
        // document.querySelector('#character-id').reset()
      })

      .catch(err => {
        btn.style.backgroundColor = "red"
        console.log(err)
      })

  }

  printAllCharacters(anclaVital, originalCard, response) {


    axiosApp.get('/characters')
      .then(response => {
        response.data.forEach(element => {
          let cln = originalCard.cloneNode(true);
          document.querySelector(".name").innerHTML = ("Character Name:") + element.name
          document.querySelector(".occupation").innerHTML = ("Character Occupation:") + element.occupation
          document.querySelector(".cartoon").innerHTML = ("Is a Cartoon?:") + (element.cartoon ? ("YES") : ("NO"))
          document.querySelector(".weapon").innerHTML = ("Character Weapon:") + element.weapon
          anclaVital.appendChild(cln)
          //TODO cómo esconder div original?

        });

      })
      // TODO CÓMO RESETEAR PARA QUE NO ME CARGUEN REPES?
      // .then(response => { anclaVital.innerHTML = "" })

      .catch(err => console.log('err', err))
  }

  printAllCharacters(anclaVital, originalCard, response) {


    axiosApp.get('/characters')
      .then(response => {
        response.data.forEach(element => {
          let cln = originalCard.cloneNode(true);
          document.querySelector(".name").innerHTML = ("Character Name:") + element.name
          document.querySelector(".occupation").innerHTML = ("Character Occupation:") + element.occupation
          document.querySelector(".cartoon").innerHTML = ("Is a Cartoon?:") + (element.cartoon ? ("YES") : ("NO"))
          document.querySelector(".weapon").innerHTML = ("Character Weapon:") + element.weapon
          anclaVital.appendChild(cln)
          //TODO cómo esconder div original?

        });

      })
      // TODO CÓMO RESETEAR PARA QUE NO ME CARGUEN REPES?
      // .then(response => { anclaVital.innerHTML = "" })

      .catch(err => console.log('err', err))
  }

  printAOneSadTinyCharacter(anclaVital, originalCard, id) {
    axiosApp.get('/characters/' + id)

      .then(element => {
        console.log("PORQUE NO", element.data)
        let cln = originalCard.cloneNode(true);
        document.querySelector(".name").innerHTML = ("Character Name:") + element.data.name
        document.querySelector(".occupation").innerHTML = ("Character Occupation:") + element.data.occupation
        document.querySelector(".cartoon").innerHTML = ("Is a Cartoon?:") + (element.data.cartoon ? ("YES") : ("NO"))
        document.querySelector(".weapon").innerHTML = ("Character Weapon:") + element.data.weapon
        anclaVital.appendChild(cln)
        //TODO cómo esconder div original?
      })


      // TODO CÓMO RESETEAR PARA QUE NO ME CARGUEN REPES?
      // .then(response => { anclaVital.innerHTML = "" })

      .catch(err => console.log('err', err))
  }
}

