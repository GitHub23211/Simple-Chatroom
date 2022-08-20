import {Message, Navigation, Home, Form} from './components'
import {useState} from 'react'

function App() {
  const myMessages = require('./messages.json').messages
  console.log(myMessages)
  const [view, setView] = useState(<Home/>)
  const [myMsgs, setMyMsgs] = useState(myMessages)

  return (
    <>
      <Navigation view={()=> console.log("click")}/>
      <ul>
        {myMsgs.map(msg => <Message key={msg.id} msg={msg.contents} />)}
      </ul>
      <Form onSubmit={() => console.log("Submit")} sendMsg={() => console.log("Sent message")}/>
    </>
  );
}


export default App;
