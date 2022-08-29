import {Navigation, Home, Form, Conversation} from './components'
import {useState, useEffect} from 'react'
import axios from './components/Axios.js'

function App() {
  const myMessages = require('./messages.json').messages
  const hook = axios.verifyUser(userInfo => console.log(userInfo))

  useEffect(hook, [])

  const [view, setView] = useState(<Home/>)
  const [myMsgs, setMyMsgs] = useState(myMessages)
  
  

  return (
    <>
      <Navigation view={()=> console.log("click")}/>
      <Conversation convo={myMsgs}/>
      <Form onSubmit={() => console.log("Submit")} sendMsg={() => console.log("Sent message")}/>
    </>
  );
}


export default App;
