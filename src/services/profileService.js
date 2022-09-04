import axios from 'axios'

const url = '/api/profile/'

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

const updateProfile = (userid, info) => {
    return axios.put(url+userid, info, createHeaders())
                .then(response => response.data)
}

export default {setToken, updateProfile}