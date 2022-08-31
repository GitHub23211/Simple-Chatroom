import axios from 'axios'

const url = 'http://localhost:8102/api/conversations/'

const getConversations = (user) => {
    const headers = {
        headers: {
          "Authorization": 'basic ' + user.token
        }
    }
    return axios.get(url, headers)
                .then(response => response.data.conversations)
}

const createConversation = (user, title) => {
    const headers = {
        headers: {
          "Authorization": 'basic ' + user.token
        }
    }
    return axios.post(url, title, headers)
                .then(response => response.data)
}

const sendMessage = (user, message, id) => {
    const headers = {
        headers: {
          "Authorization": 'basic ' + user.token
        }
    }
    return axios.post(url+id, message, headers)
                .then(response => response.data)
}

const getMessages = (user, num, id) => {
  const headers = {
    headers: {
      "Authorization": 'basic ' + user.token
    },
    params: {
      "num": num
    }
  }
  return axios.get(url+id, headers)
              .then(response => response.data)
}

const getMessage = (user, convoId, msgId) => {
  const headers = {
    headers: {
      "Authorization": 'basic ' + user.token
    }
  }
  return axios.get(url+`${convoId}/${msgId}`, headers)
              .then(response => response.data)
}

const deleteMessage = (user, convoId, msgId) => {
  const headers = {
    headers: {
      "Authorization": 'basic ' + user.token
    }
  }
  return axios.delete(url+`${convoId}/${msgId}`, headers)
              .then(response => response.data)
}

export default { getConversations, createConversation, sendMessage, getMessages, getMessage, deleteMessage }