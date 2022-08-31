import {Message, ConversationList} from './'
import {useState, useEffect} from 'react'
import {convoService} from '../To be categorised/'
import {useParams} from "react-router-dom"
import {SendMsg} from './'

function Conversation({currentUser}) {
    const [myMsgs, setMyMsgs] = useState([])
    const [currentMsg, setCurrentMsg] = useState("")
    const currentConvo = useParams().convoId


    const getMessages = () => {
        convoService.getMessages(currentUser, 5, currentConvo)
                  .then(response => {setMyMsgs(response.messages.reverse()); console.log(myMsgs)})
    }

    const deleteMessage = (event) => {
    convoService.deleteMessage(currentUser, currentConvo, event.target.attributes[0].value)
                .then(response => getMessages())
    }

    const sendMessage = (event) => {
        event.preventDefault()
        const message = {
          "text": event.target[0].value
        }
        convoService.sendMessage(currentUser, message, currentConvo)
        .then(response => {setCurrentMsg(""); getMessages()})
    }

    
    const onChangeCurrentMsg = (event) => {
      setCurrentMsg(event.target.value)
    }

    useEffect(getMessages, [])

    console.log("component reloaded")

    return(
        <div className="row">
            <div className="two columns">
                <ConversationList currentUser={currentUser}/>
            </div>
            <div className="ten columns">
                {myMsgs.map(msg => <Message key={msg.id} msg={msg} onClick={deleteMessage}/>)}
                <div>
                    <SendMsg sendMsg={sendMessage} currMsg={currentMsg} onChange={onChangeCurrentMsg} placeholder={`Message ${currentConvo}...`}/>
                </div>
            </div>
     
        </div>
    )
}

export default Conversation