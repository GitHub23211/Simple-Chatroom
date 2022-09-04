import axios from 'axios'

const url = '/api/conversations/'

let token = null

const setToken = (user) => {
  token = user
}

const createHeaders = () => {
  return {
    headers: {
      "Authorization": "bearer " + token
    }
  }
}

const createConversation = (title) => {
  return axios.post(url, title, createHeaders())
              .then(response => response.data)
}

const getConversations = () => {
    return axios.get(url, createHeaders())
                .then(response => response.data.conversations)
}

const getMessages = (num, id) => {
  const headers = createHeaders()
  headers["params"] = {
    "num": num
  }
  return axios.get(url+id, createHeaders())
              .then(response => response.data)
}

const getMessage = (convoId, msgId) => {
  return axios.get(url+`${convoId}/${msgId}`, createHeaders())
              .then(response => response.data)
}

const sendMessage = (message, id) => {
    return axios.post(url+id, message, createHeaders())
                .then(response => response.data)
}

const deleteMessage = (convoId, msgId) => {
  return axios.delete(url+`${convoId}/${msgId}`, createHeaders())
              .then(response => response.data)
}

const addReaction = (convoId, msgId, reaction) => {
  return axios.put(url+`${convoId}/${msgId}`, reaction, createHeaders())
              .then(response => response.data)
}

export default { getConversations, createConversation, sendMessage, getMessages, getMessage, deleteMessage, addReaction, setToken }