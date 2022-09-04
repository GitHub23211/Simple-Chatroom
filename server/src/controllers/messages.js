const models = require('../models')
const auth = require('./auth')

const createMessage = async (request, response) => {

    const creator = await auth.validUser(request)

    if (creator) {
        const text = request.body.text
        const cid = request.params.id
        // check that this is a valid conversation

        const conversation = await models.Conversation.findOne({_id: cid})

        if (conversation) {

            const message = new models.Message({creator, conversation: conversation._id, text, reaction: {emoji: "", num: 0}})
            const returned = await message.save()

            if (returned) {
                response.json({status: "success", id: returned._id})
            } else {
                response.json({status: "error"})
            }
        } else {
            response.sendStatus(404)
        }
    } else {
        response.sendStatus(401)
    }
}


const getMessages = async (request, response) => {

    const user = await auth.validUser(request)

    if (user) {
        const id = request.params.id
        const num = request.query.num
        const convo = await models.Conversation.findById(id)
        const messages = await models.Message.find({conversation: id})
                .populate('creator')
                .sort({timestamp: -1})
                .limit(num)
        response.json({messages, convo})
    } else {
        response.sendStatus(401)
    }
}

const getMessage = async (request, response) => {

    const user = await auth.validUser(request)

    if (user) { 
        const msgid = request.params.msgid
        const result = await models.Message.findById(msgid).populate('creator')
        response.json(result)
    } else {
        response.sendStatus(401)
    }

}

const deleteMessage = async (request, response) => {

    const user = await auth.validUser(request)

    if (user) { 
        const msgid = request.params.msgid
        const message = await models.Message.findOne({_id: msgid})
        if (message.creator.toString() === user.toString()) {
            const result = await models.Message.deleteOne({_id: msgid})
            if (result.acknowledged) {
                response.json({status: 'success'})
            } else {
                response.json({'status': 'unable to delete message'})
                response.sentStatus(400) // not quite the right status but will do
            }
        } else {
            // not authorised to delete 
            response.json({status: 'not authorised'})
            response.sendStatus(401)
        }
    } else {
            // not authorised to delete 
            response.json({status: 'not authorised'})
            response.sendStatus(401)
    }

}

/* 
 * addReaction - Creates a reaction object
 *   and updates the targeted message's reaction field in the database
 *   return the sent emoji if successful, else send an error.
*/
const addReaction = async (request, response) => {

    const user = await auth.validUser(request)

    if (user) {
        try{
        const msgid = request.params.msgid
        const operation = request.body.op
        const reaction = {
            "emoji": request.body.emoji,
            "num": request.body.num
        }
        if(operation === "push") {
            await models.Message.updateOne({_id: msgid}, {$push: {reaction: reaction}})
        }
        else {
            await models.Message.updateOne({_id: msgid, "reaction.emoji": request.body.emoji}, {$set: {"reaction.$": reaction}})
        }
        response.json({status: "success", emoji: request.body.emoji})
    } 
    catch {request.json({status: "failed something went wrong adding a reaction"})}

    } else {
        response.json({status: "failed to validate user"})
    }
}

module.exports = {
    createMessage, 
    getMessages,
    getMessage, 
    deleteMessage,
    addReaction
}