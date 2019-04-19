/**
 * Handle the API calls
 * @class APIHandler
 */
class APIHandler {
  /**
   * @constructor
   * @param {String} baseUrl - base url to mae the requests
   */
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  /**
   * Get the full list of characters
   * @function
   * @returns {Promise}
   */
  getFullList() {
    return axios
      .get(this.BASE_URL)
      .then(response => {
        return response.data;
      })
      .catch(err => console.log('ERROR: ', err));
  }

  /**
   * Get one character selected by its id
   * @function
   * @param {number} id  - The id of the character
   * @returns {Promise}
   */
  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.error('ERROR: ', err));
  }

  /**
   * Create a new character
   * @function
   * @param {String} name - Name of the character
   * @param {String} occupation - Occupation of the character
   * @param {String} Weapon - Weapon of the character
   * @param {Boolean} cartoon - If the character is a cartoon character of not
   * @returns {Promise}
   */
  createOneRegister(name, occupation, weapon, cartoon) {
    return axios.post(this.BASE_URL, { name, occupation, weapon, cartoon }).then(response => {
      return response.data;
    });
  }

  /**
   * Update the new character by its give id
   * @function
   * @param {Number} id - ID of the character
   * @param {String} name - Name of the character
   * @param {String} occupation - Occupation of the character
   * @param {String} Weapon - Weapon of the character
   * @param {Boolean} cartoon - If the character is a cartoon character of not
   * @returns {Promise}
   */
  updateOneRegister(id, name, occupation, weapon, cartoon) {
    return axios
      .put(`${this.BASE_URL}/${id}`, { id, name, occupation, weapon, cartoon })
      .then(response => {
        return response.data;
      })
      .catch(err => console.error('ERROR: ', err));
  }

  /**
   * Delete one character by its give id
   * @function
   * @param {Number} id - ID of the character
   * @returns {Promise}
   */
  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/${id}`)
      .then(response => {
        return response;
      })
      .catch(err => console.error('ERROR: ', err));
  }
}
