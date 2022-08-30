import {Navigation, Home, Form, Conversation, Registration, Login} from './components'
import {useState, useEffect} from 'react'
import {auth, conversation} from './To be categorised'

function App() {
  const [view, setView] = useState(<Home/>)
  const [myMsgs, setMyMsgs] = useState({})
  const [currentUser, changeUser] = useState({})
  const [myConvos, setMyConvos] = useState([])
  
  const registerNewUser = (event) => {
    auth.registerUser(event)
    .then(response => {
      if(response.token) {
        changeUser(response)
        console.log("registration sucess", currentUser)
      }
      console.log(currentUser)
      console.log(response)
    })
  }

  const createConversation = (event) => {
    event.preventDefault()
    const payload = {
      "title": event.target[0].value
    }
    conversation.createConversation(currentUser, payload)
                .then(response => console.log(response))
  }

  const getConversations = () => {
    auth.getConversations(currentUser)
        .then(response => console.log(response))
  }

  const sendMessage = (event) => {
    event.preventDefault()
    conversation.sendMessage(currentUser, event.target[0].value)
    .then(response => console.log(response))
  }


  return (
    <>
      <Navigation view={()=> console.log("click")}/>
      <Conversation createConvo={createConversation} myConvos={myConvos}/>
      <Form sendMsg={sendMessage}/>
      <Registration registerUser={registerNewUser}/>
    </>
  );
}


export default App;
