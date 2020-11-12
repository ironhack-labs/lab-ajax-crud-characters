
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    console.log("llamado a getFullList()")
    const {data} = await axios.get(this.BASE_URL)
    return data
  }

  async getOneRegister(id) {
    try{
      const {data: {name, occupation, weapon, isCartoon}} = await axios.get(`${this.BASE_URL}/${id}`)
    console.log(`data: ${name}, ${occupation}, ${weapon}, ${isCartoon}`)
    return {name, occupation, weapon, isCartoon}
    }
    catch {
      return 
    }
  }

  async createOneRegister(name, occupation, weapon, isCartoon) {
    await axios.post(this.BASE_URL, {
      name, occupation, weapon, isCartoon
    })
  }

  async updateOneRegister(id,name,occupation,weapon, isCartoon) {
    console.log(id)
    await axios.patch(`${this.BASE_URL}/${id}`, {name, occupation, weapon,isCartoon})

  }

  async deleteOneRegister(id) {
    console.log("this is the id" + id)
    await axios.delete(`${this.BASE_URL}/${id}`)
  }


displayCharacters(elements) {
  const $charactersContainer = document.querySelector('.characters-container')
  $charactersContainer.innerHTML = ""
  elements.forEach(element => {
    console.log(element)
    $charactersContainer.innerHTML += `
      <div class="character-info">
        <div class="id">    
          <div style="display: inline"><span>ID: </span> ${element.id}</div>
        </div>
        <div class="name">
          <div style="display: inline"><span>Name: </span>  ${element.name}</div>
        </div>
        <div class="occupation">
          <div style="display: inline"><span>Occupation: </span>  ${element.occupation}</div>
        </div>
        <div class="cartoon">
          <div style="display: inline"><span>Cartoon: </span>  ${element.isCartoon}</div>
        </div>
        <div class="weapon">
          <div style="display: inline"><span>Weapon:</span> ${element.weapon}</div>
        </div>
      </div>
    `
  })
}
// displayCharacters(elements) {
//   const $charactersContainer = document.querySelector('.characters-container')
//   $charactersContainer.innerHTML = ""
//   elements.forEach(element => {
//     console.log(element)
//     $charactersContainer.innerHTML += `
//     <div class="characters-container">
//       <div class="character-info">
//         <div class="name">${element.name}</div>
//         <div class="occupation"> ${element.occupation}</div>
//         <div class="cartoon">${element.isCartoon}</div>
//         <div class="weapon">${element.weapon}</div>
//       </div>
//     </div>
//     `
//   })
// }

}
