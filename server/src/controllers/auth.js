const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require(`jsonwebtoken`)

/* Create a new session for a user */
const createSession = async (request, response) => {

    let password = ""

    await bcrypt.hash(request.body.password, 10)
          .then(response => password = response)

    
    const session = new models.Session({
        username: request.body.username,
        password: password
    })

    const returned = await session.save()
        .catch((err) => {
            response.json({"status": "username taken"})
        })

    if (returned) {
        if (session._id) {
            const userForToken = {
                id: session._id,
                username: returned.username
            }
            const token = jwt.sign(userForToken, "secret")
    
            return response.status(200).json({status: "success", token: token})
        }
    }
}


const getUser = async (request, response) => {

    const authHeader = request.get('Authorization')
    if (authHeader && authHeader.toLowerCase().startsWith('basic ')) {
        const token = authHeader.substring(6)
        try {
            // this will throw an error if token isn't of the right format
            const match = await models.Session.findById(token)  
            if (match) {
                response.json({
                    status: "success",
                    username: match.username,
                    token: match._id
                })       
            }
        } catch { }

    }
    response.json({status: "unregistered"}) 
}

/* 
 * validUser - check for a valid user via Authorization header
 *   return the username if found, false if not
*/
const validUser = async (request) => {
    
    const authHeader = request.get('Authorization')
    if (authHeader && authHeader.toLowerCase().startsWith('basic ')) {
        const token = authHeader.substring(6)        
        const match = await models.Session.findOne({_id: token})  

        if (match) {
            return match._id
        }
    } 
    return false
}

/* 
 * loginUser - Checks if the username and password in the request
 *   parameter contains a valid user.
 *   return the user's token if match, else send a 401 error.
*/
const loginUser = async (request, response) => {
    const username = request.body.username
    const password = request.body.password

    const match = await models.Session.findOne({username: username})

    if(!match) {
        return response.status(401).json({error: "invalid username or password"})
    }

    if(await bcrypt.compare(password, match.password)) {
        const userForToken = {
            id: match._id,
            username: match.username
        }

        const token = jwt.sign(userForToken, "secret")

        return response.status(200).json({status: "success", token: token})
    }

    return response.status(401).json({error: "invalid username or password"})
}

module.exports = { validUser, getUser, createSession, loginUser }
