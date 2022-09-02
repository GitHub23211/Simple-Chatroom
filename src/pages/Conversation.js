import {Message, ConversationList} from '../components'
import {useState, useEffect} from 'react'
import {convoService} from '../services'
import {useParams} from "react-router-dom"
import {SendMsg} from '../components'

function Conversation({user}) {
    const [myMsgs, setMyMsgs] = useState([])
    const [currentMsg, setCurrentMsg] = useState("")
    const [convoName, setConvoName] = useState("")
    const currentConvo = useParams().convoId


    const getMessages = () => {
        convoService.getMessages(20, currentConvo)
                  .then(response => {
                    setConvoName(response.convo.title)
                    setMyMsgs(response.messages.reverse())
                })
    }

    const deleteMessage = (msgId) => {
        convoService.deleteMessage(currentConvo, msgId)
                .then(response => getMessages())
    }

    const sendMessage = (event) => {
        event.preventDefault()
        const message = {
          "text": event.target[0].value
        }
        convoService.sendMessage(message, currentConvo)
        .then(response => {setCurrentMsg(""); getMessages()})
    }

    
    const onChangeCurrentMsg = (event) => {
      setCurrentMsg(event.target.value)
    }

    useEffect(getMessages, [currentConvo])
    return(
        <div>
            <div style={style.layout}>

                <div style={style.list}>
                    <ConversationList />
                </div>

                <div style={style.chat}>
                    <div style={style.convo}>
                        <div className="msgList" style={style.messages} >
                            {myMsgs.map(msg => <Message key={msg.id} msg={msg} user={user} onClick={deleteMessage}/>)}
                        </div>

                        <div style={style.input}>
                            <SendMsg sendMsg={sendMessage} currMsg={currentMsg} onChange={onChangeCurrentMsg} placeholder={`Message #${convoName}`}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const style = {
    layout: {
        display: "flex",
        flexFlow: "row wrap-reverse"
    },
    
    list: {
    },

    chat: {
        flexGrow: 1
    },

    convo: {
        display: "grid",
        gridTemplateColumns: "5fr"
    },

    messages: {
        gridColumn: 1,
        gridRow: 1,
        height: "70vh",
        marginBottom: "2rem",
        marginTop: "1rem",
        marginLeft: "3%",
        overflow: "auto"
    },

    input: {
        gridColumn: 1,
        gridRow: 2,
        width: "65.333333%",
        marginLeft: "3%"
    }
}

export default Conversation