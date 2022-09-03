const auth = require('./auth')
const models = require('../models')  

const uploadAvatar = async (request, response) => {

    const user = await auth.validUser(request)

    if(!user) {
        try {
            await models.Session.findByIdAndUpdate(userId, {avatar: "string"})
            response.json({status: "successfully uploaded avatar"})
        }
        catch {response.json({status: "failed to upload avatar"})}
    }
    else {
        response.json({status: "failed to upload avatar"})
    }
}

module.exports = {
    uploadAvatar
}