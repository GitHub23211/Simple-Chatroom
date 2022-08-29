import axios from 'axios'

const url = 'http://localhost:8102/auth/'

const getUser = (token) => {
  const request = axios.get(url, token)
  return request.then(response => response.data)
}

const loginUser = (event) => {
  event.preventDefault()
  const user = {
    "username": event.target[0].value,
    "password": event.target[1].value
  }
  console.log(user)
}

const registerUser = (event) => {
  const newUser = createNewUser(event)
  console.log(newUser)
  return axios.post(url+'register', newUser)
              .then(response => {console.log(response.data); return response.data})
}

const createNewUser = (event) => {
  event.preventDefault()
  return {"username": event.target[0].value}
}

export default {registerUser, loginUser}