import axios from 'axios'

const url = '/auth/'

const verifyUser = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

const registerUser = (userInfo) => {
  const request = axios.post(url+'/register', userInfo)
  return request.then(response => response.data)
}

export default {verifyUser}