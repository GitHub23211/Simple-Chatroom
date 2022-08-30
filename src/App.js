import {Navigation, Home, Form, Conversation, Registration, Login, ConversationList} from './components'
import {useState, useEffect} from 'react'
import {auth, conversation} from './To be categorised'

function App() {
  const [view, setView] = useState(<Home/>)
  const [newConvoName, setNewConvoName] = useState("Enter name of conversation...")
  const [myMsgs, setMyMsgs] = useState({})
  const [currentUser, changeUser] = useState({token: "630e072e6af13c96e18cf4aa"})
  const [myConvos, setMyConvos] = useState([])
  const [currentConvo, setCurrentConvo] = useState({})
  
  const registerNewUser = (event) => {
    auth.registerUser(event)
    .then(response => {
      if(response.token) {
        changeUser(response)
        console.log("registration succcess", currentUser)
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
                .then(response => {console.log(response); getConversations()})
  }

  const getConversations = () => {
    conversation.getConversations(currentUser)
        .then(response => {console.log(response); setMyConvos(response)})
  }

  const sendMessage = (event) => {
    event.preventDefault()
    conversation.sendMessage(currentUser, event.target[0].value)
    .then(response => console.log(response))
  }

  useEffect(getConversations, []) 

  const onChangeConvoTitle = (event) => {
    setNewConvoName(event.target.value)
  }


  return (
    <>
      <Navigation view={()=> console.log("click")}/>
      <ConversationList createConvo={createConversation} myConvos={myConvos} label={newConvoName} onChange={onChangeConvoTitle}/>
      <Form sendMsg={sendMessage}/>
      <Registration registerUser={registerNewUser}/>
    </>
  );
}


export default App;
