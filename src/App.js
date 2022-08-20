import {Navigation, Home, Form, Conversation} from './components'
import {useState} from 'react'

function App() {
  const myMessages = require('./messages.json').messages


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
