class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL)
      .then(res => {
        return  res.data
      })
      .catch(err => {
      return err
    })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL +  '/' + id)
      .then(res => {
        return  res.data
      })
      .catch(err => {
      return err
    })
  }

  createOneRegister (name,occupation,weapon,cartoon) {
    return axios.post(this.BASE_URL, name,occupation,weapon,cartoon)
      .then(res => {
        return  res.data
      })
      .catch(err => {
      return err
    })
  }

  updateOneRegister(id,changes) {
    return axios.put(this.BASE_URL +  '/' + id, changes)
      .then(res => {
        return  res.data
      })
      .catch(err => {
      return err
    })
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL +  '/' + id)
    .then(res => {
      return  res.data
    })
    .catch(err => {
    return err
  })
  }
  

}
