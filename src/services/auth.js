import axios from 'axios'

const url = '/auth/'

const getUser = (user) => {
  const headers = {
    headers: {
      "Authorization": 'bearer ' + user
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

export default {registerUser, getUser, loginUser}