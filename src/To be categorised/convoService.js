import axios from 'axios'
import auth from './auth'

const url = 'http://localhost:8102/api/conversations/'

let headers = null

const setHeaders = () => {
  headers = {
    headers: {
      "Authorization": 'bearer ' + auth.getToken()
    }
  }
}

const getConversations = () => {
    return axios.get(url, headers)
                .then(response => response.data.conversations)
}

const createConversation = (title) => {
    return axios.post(url, title, headers)
                .then(response => response.data)
}

const sendMessage = (message, id) => {
    return axios.post(url+id, message, headers)
                .then(response => response.data)
}

const getMessages = (num, id) => {
  const headers = {
    headers: {
      "Authorization": 'bearer ' + auth.getToken()
    },
    params: {
      "num": num
    }
  }
  return axios.get(url+id, headers)
              .then(response => response.data)
}

const getMessage = (convoId, msgId) => {
  return axios.get(url+`${convoId}/${msgId}`, headers)
              .then(response => response.data)
}

const deleteMessage = (convoId, msgId) => {
  return axios.delete(url+`${convoId}/${msgId}`, headers)
              .then(response => response.data)
}

export default { getConversations, createConversation, sendMessage, getMessages, getMessage, deleteMessage, setHeaders }