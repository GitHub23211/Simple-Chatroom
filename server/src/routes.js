const express = require('express')
const auth = require('./controllers/auth')
const conv = require('./controllers/conversations')
const messages = require('./controllers/messages')
const profile = require('./controllers/profile')
const users = require('./controllers/users')

const router = express.Router()
 
router.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

router.post('/auth/register', auth.createSession)

router.get('/auth/', auth.getUser)

/* POST user credentials to log them into the server */
router.post(`/auth/login`, auth.loginUser)

/* GET conversations returns a list of all current conservations */
router.get('/api/conversations', conv.getConversations)

/* POST to conversations creates a new conversation */
router.post('/api/conversations', conv.createConversation)

/* GET a conversation returns the list of the last N conversations */
router.get('/api/conversations/:id', messages.getMessages)

/* POST to a conversation to create a new message */
router.post('/api/conversations/:id', messages.createMessage)

/* GET a message URL to get details of a message */
router.get('/api/conversations/:id/:msgid', messages.getMessage)

/* DELETE to message URL to delete the message */
router.delete('/api/conversations/:id/:msgid', messages.deleteMessage)

/* PUT to message URL to add a reaction to the message */
router.put('/api/conversations/:id/:msgid', messages.addReaction)

/* PUT to user profile to make changes to their information */
router.put('/api/profile/:userid', profile.updateProfile)

/* GET a user profile to display */
router.get('/api/users/profile/:userid', users.displayUser)

/* GET the creator of a message and grab their avatar */
router.get('/api/users/:userid', users.getAUser)



module.exports = router 