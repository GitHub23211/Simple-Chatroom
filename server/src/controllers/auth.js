require('dotenv').config()
const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require(`jsonwebtoken`)

const SECRET = process.env.SESSION_DB_SECRET

/* Helper function to encode a token from user information */
const encodeToken = (id, username) => {
    const userForToken = {
        id: id,
        username: username
    }
    return jwt.sign(userForToken, SECRET)
}


/* Create a new session for a user */
const createSession = async (request, response) => {

    let password = ""
    await bcrypt.hash(request.body.password, 10)
          .then(response => password = response)

    const session = new models.Session({
        username: request.body.username,
        password: password,
        bio: "Hi, I'm " + request.body.username + "!",
        avatar: `https://robohash.org/${request.body.username}`
    })

    const returned = await session.save()
        .catch((err) => {
            response.json({"status": "username taken"})
        })

    if (returned) {
        if (session._id) {
            const token = encodeToken(session._id, returned.username)
            return response.status(200).json({status: "success", token: token})
        }
    }
}


const getUser = async (request, response) => {

    const authHeader = request.get('Authorization')
    if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
        try {
                const decodedToken = jwt.verify(authHeader.substring(7), SECRET)
                const userId = decodedToken.id
                // this will throw an error if token isn't of the right format
                const match = await models.Session.findById(userId)  
                if (match) {
                    response.json({
                        status: "success",
                        id: match._id,
                        username: match.username,
                        bio: match.bio,
                        avatar: match.avatar
                    })       
                }
        } catch {response.json({status: "missing or invalid token"})}

    } 
    else {
        response.json({status: "unregistered"}) 
    }
}

/* 
 * validUser - check for a valid user via Authorization header
 *   return the username if found, false if not
*/
const validUser = async (request) => {
    
    const authHeader = request.get('Authorization')
    if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
        try{
            const decodedToken = jwt.verify(authHeader.substring(7), SECRET)
            const userId = decodedToken.id     
            const match = await models.Session.findOne({_id: userId})  

            if (match) {
                return match._id
            }
        }
        catch {return false}
    }
    return false
}

/* 
 * loginUser - Checks if the username and password in the request
 *   body contains a valid user.
 *   return the user's token if match, else send an error.
*/
const loginUser = async (request, response) => {
    const username = request.body.username
    const password = request.body.password

    const match = await models.Session.findOne({username: username})

    if(!match) {
        return response.json({status: "invalid username or password"})
    }

    if(await bcrypt.compare(password, match.password)) {
        const token = encodeToken(match._id, match.username)
        return response.status(200).json({status: "success", token: token})
    }
    return response.json({status: "invalid username or password"})
}

module.exports = { validUser, getUser, createSession, loginUser }
