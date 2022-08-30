import axios from 'axios'

const url = 'http://localhost:8102/auth/'

const getUser = (user) => {
  const headers = {
    headers: {
      "Authorization": 'basic ' + user.token
    }
  }
  return axios.get(url, headers)
              .then(response => response.data)
}

const registerUser = (event) => {
  const newUser = createNewUser(event)
  return axios.post(url+'register', newUser)
              .then(response => response.data)
}

const createNewUser = (event) => {
  event.preventDefault()
  return {"username": event.target[0].value}
}

export default {registerUser, getUser}