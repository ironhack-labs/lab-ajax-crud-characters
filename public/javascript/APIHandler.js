const axios = require("axios");

class APIHandler {
  constructor (baseUrl) {
      this.BASE_URL = baseUrl;
    } 
  }

  getFullList = () => {
    axios.get(`${this.baseUrl}/characters`)
    
  }

  getOneRegister = (id) => {
    axios.get(`${this.baseUrl}/characters/${id}`)
  }

  createOneRegister = () => {
   axios.post(`${this.baseUrl}/characters`, characterInfo)   //url+characters + informações do novo character 
  }

  updateOneRegister = (id) => {
   axios.put(`${this.baseUrl}/characters/${id}`, characterInfo) //update de 1 espercífico + qual ou quais infos vou atualizar
  }

  deleteOneRegister = (id) => {
   axios.delete(`${this.baseUrl}/characters/${id}`)     //delete one register, então deletar 1 específico
  }

  module.exports= APIHandler;
