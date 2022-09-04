import axios from 'axios'
import tokenService from './tokenService'

const url = '/api/users/'


const getAUser = (userid) => {
    return axios.get(url+userid, tokenService.createHeaders())
                .then(response => response.data)
}

const displayUser = (userid) => {
    return axios.get(url+`profile/${userid}`, tokenService.createHeaders())
                .then(response => response.data)
}


export default { getAUser, displayUser }