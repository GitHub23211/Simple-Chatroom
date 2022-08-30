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
export default { getConversations, createConversation, sendMessage }