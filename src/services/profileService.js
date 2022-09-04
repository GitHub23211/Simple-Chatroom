import axios from 'axios'
import tokenService from './tokenService'

const url = '/api/profile/'

const updateProfile = (userid, info) => {
    return axios.put(url+userid, info, tokenService.createHeaders())
                .then(response => response.data)
}

export default { updateProfile}