const auth = require('./auth')
const models = require('../models')


const createConversation = async (request, response) => {

    const creator = await auth.validUser(request)

    if (creator) {
        const title = request.body.title
        const conversation = new models.Conversation({creator, title})
        const returned = await conversation.save()

        if (returned) {
            response.json({status: "success", id: conversation._id, messages: 0})
        } else {
            response.json({status: "error"})
        }
    } else {
        response.sendStatus(401)
    }
}


const getConversations = async (request, response) => {

    const user = await auth.validUser(request)

    if (user) {
        const conversations = await models.Conversation.find({})
                                          .populate('messages')
        response.json({conversations})
    } else {
        response.sendStatus(401)
    }

}

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

module.exports = { 
    createConversation, 
    getConversations,
    getAUser
}