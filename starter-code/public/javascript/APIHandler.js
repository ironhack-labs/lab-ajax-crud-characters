class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
      const { data } = await axios.get(`${this.BASE_URL}/characters`)
      console.log('get',data)
      data.forEach(character => {
        const listName = document.createElement("li")
        listName.innerText = character.name;
        document.querySelector('#characters-fetch').appendChild(listName)
      })
    
  }

  async getOneRegister () {
      const id = document.querySelector('#fetch-one-input').value
      const { data } = await await axios.get(`${this.BASE_URL}/characters/${id}`)
      const charname = document.createElement('h5')
      charname.innerText = data.name;
      document.querySelector('#fetch-one').appendChild(charname)
    }

  async createOneRegister () {
      event.preventDefault()

      const name = document.querySelector("#new-character-form input[name='name']").value
      const occupation = document.querySelector("#new-character-form input[name='occupation']").value
      const weapon = document.querySelector("#new-character-form input[name='weapon']").value
      const cartoon = document.querySelector("#new-character-form input[name='cartoon']").checked

      await axios.post(`${this.BASE_URL}/characters`, { name, occupation, weapon, cartoon })
        .then(res => console.log(res))
      
  }

  async updateOneRegister () {

      event.preventDefault()
      const id = document.querySelector("#edit-character-form input[name='chr-id']").value
      const name = document.querySelector("#edit-character-form input[name='name']").value
      const occupation = document.querySelector("#edit-character-form input[name='occupation']").value
      const weapon = document.querySelector("#edit-character-form input[name='weapon']").value
      const cartoon = document.querySelector("#edit-character-form input[name='cartoon']").checked

      await axios.patch(`${this.BASE_URL}/characters/${id}`, { name, occupation, weapon, cartoon })
        .then(res => console.log(res))
  }

  async deleteOneRegister () {
      event.preventDefault()
      const id = document.querySelector("input[name='character-id-delete']").value
      await axios.delete(`${this.BASE_URL}/characters/${id}`)
        .then(res => console.log(res))
      }
}
