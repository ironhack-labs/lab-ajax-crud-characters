class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.bd = 'http://localhost:8000/'
    this.characters = axios.get(`${this.bd}characters`)
  }

  getFullList () {
const tags = []
    this.characters
    .then(object => {
      const {data} = object
        data.forEach(el => console.log(el))
    })
    .catch(err => {
      console.log(err);
    })


  }

  getOneRegister () {
const id = document.querySelector('[name="character-id"]').value
const characterID =axios.get(`${this.bd}characters/${id}`)
    characterID
    .then(object => {
      const {data} = object
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })


  }

  createOneRegister =async (event)=> {

    const {target}=event
    const {data} = await this.characters
    console.log(data.length);
    let newArray={id:data.length+1}
        Array.from(target).forEach(el=>{
        newArray[el.name]
        newArray[el.name]= el.value
      //  el.checked===true?newArray[el.name]=true:newArray[el.name]= el.value
      })
    delete newArray['']
    await axios.post(`http://localhost:8000/characters`, newArray)


  }

  updateOneRegister= async (event) =>{
      const {target}=event

      let newArray = {}
        Array.from(target).forEach(el=>{
          console.log(el.value);

          newArray[el.name] = el.value
          console.log(newArray);
      })

      delete newArray['']
      await axios.put(`http://localhost:8000/characters/${newArray.id}`, newArray)
        event.preventDefault();

  }

  deleteOneRegister () {
    const {target}=event

      let newArray = {}
        Array.from(target).forEach(el=>{
          console.log(el.value);

          newArray[el.name] = el.value
          console.log(newArray);
      })

      delete newArray['']
      await axios.delete(`http://localhost:8000/characters/${newArray.id}`, newArray)
        event.preventDefault();
  }
}
