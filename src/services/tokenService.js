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

export default { setToken, createHeaders }