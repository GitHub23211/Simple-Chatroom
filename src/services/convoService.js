import axios from 'axios'
import tokenService from './tokenService'

const url = '/api/conversations/'

const createConversation = (title) => {
  return axios.post(url, title, tokenService.createHeaders())
              .then(response => response.data)
}

const getConversations = () => {
    return axios.get(url, tokenService.createHeaders())
                .then(response => response.data.conversations)
}

const getMessages = (num, id) => {
  const headers = tokenService.createHeaders()
  headers["params"] = {
    "num": num
  }
  return axios.get(url+id, tokenService.createHeaders())
              .then(response => response.data)
}

const getMessage = (convoId, msgId) => {
  return axios.get(url+`${convoId}/${msgId}`, tokenService.createHeaders())
              .then(response => response.data)
}

const sendMessage = (message, id) => {
    return axios.post(url+id, message, tokenService.createHeaders())
                .then(response => response.data)
}

const deleteMessage = (convoId, msgId) => {
  return axios.delete(url+`${convoId}/${msgId}`, tokenService.createHeaders())
              .then(response => response.data)
}

const addReaction = (convoId, msgId, reaction) => {
  return axios.put(url+`${convoId}/${msgId}`, reaction, tokenService.createHeaders())
              .then(response => response.data)
}

export default { 
  
  getConversations, 
  createConversation, 
  sendMessage, 
  getMessages, 
  getMessage, 
  deleteMessage, 
  addReaction, 

 }