const auth = require('./auth')
const models = require('../models')

/* 
 * getAUser - Finds a user based on their username and returns their username and avatar url.
*/
const getAUser = async (request, response) => {

    const user = await auth.validUser(request)
    if (user) {
        try {
            const userId = request.params.userid
            const match = await models.Session.find({username: userId})  
            if (match) {
                response.json({
                    status: "success",
                    username: match[0].username,
                    avatar: match[0].avatar
                })       
            }
        } catch {response.json({status: "missing or invalid userid"})}
    } 
    else {
        response.json({status: "unregistered"}) 
    }
}

const displayUser = async (request, response) => {
    const user = await auth.validUser(request)

    if(user) {
        try {
            const userid = request.params.userid
            const match = await models.Session.find({username: userid})

            response.json({
                status: "OK",
                username: match[0].username,
                bio: match[0].bio,
                avatar: match[0].avatar
            })
        }
        catch {response.json({status: "something went wrong", info: request.body})}

    }
    else {
        response.json({status: "failed to find user"})
    }

}

module.exports = { 
    getAUser,
    displayUser
}