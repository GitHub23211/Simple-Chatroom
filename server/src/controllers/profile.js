const auth = require('./auth')
const models = require('../models')
const bcrypt = require('bcrypt')

/* 
 * updateUser - Creates a userInfo object from the request body
 *   If the body contains a password key, encrypt its value
 *   before sending to the database
 *   Returns the information sent on success otherwise returns an error message
*/
const updateUser = async (request, response) => {
    const user = await auth.validUser(request)

    if(user) {
        try {
            let infoToUpdate = request.body
            if(infoToUpdate.password) {
                await bcrypt.hash(request.body.password, 10)
                      .then(response => infoToUpdate['password'] = response)
            }
            await models.Session.findByIdAndUpdate(user, infoToUpdate)
            response.json({status: "OK", info: request.body})
        }
        catch {response.json({status: "something went wrong", info: request.body})}

    }
    else {
        response.json({status: "failed to find user"})
    }
}

module.exports = { updateUser }