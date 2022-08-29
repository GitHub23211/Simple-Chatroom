import {Navigation, Home, Form, Conversation, Registration, Login} from './components'
import {useState, useEffect} from 'react'
import auth from './To be categorised/auth.js'

function App() {
  const myMessages = require('./messages.json').messages
  const user = {}


  // useEffect(hook, [])

  const [view, setView] = useState(<Home/>)
  const [myMsgs, setMyMsgs] = useState(myMessages)
  const [currentUser, changeUser] = useState(user)
  
  

  return (
    <>
      <Navigation view={()=> console.log("click")}/>
      <Conversation convo={myMsgs}/>
      <Form onSubmit={(event) => {event.preventDefault(); console.log("Submit")}} sendMsg={() => console.log("Sent message")}/>
      <Registration registerUser={auth.registerUser}/>
      <Login loginUser={auth.loginUser}/>
    </>
  );
}


export default App;
