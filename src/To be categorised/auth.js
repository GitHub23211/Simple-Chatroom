import axios from 'axios'

const url = 'http://localhost:8102/auth/'
let token = null

const getUser = (user) => {
  const headers = {
    headers: {
      "Authorization": 'basic ' + user.token
    }
  }
  return axios.get(url, headers)
              .then(response => response.data)
}

const registerUser = (newUser) => {
  return axios.post(url+'register', newUser)
              .then(response => response.data)
}

const loginUser = (userToLogin) => {
  return axios.post(url+'login', userToLogin)
              .then(response => response.data)
}

const setToken = (userToken) => {
  token = userToken
}

const getToken = () => {
  return token
}

export default {registerUser, getUser, loginUser, setToken, getToken}