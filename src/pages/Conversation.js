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
                    console.log("getting msgs")
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
        setCurrentMsg("")
        const input = event.target[0].value
        if(input != "") {
            const message = {
                "text": event.target[0].value
              }
              convoService.sendMessage(message, currentConvo)
              .then(response => getMessages())
        }
    }

    const onChangeCurrentMsg = (event) => {
      setCurrentMsg(event.target.value)
    }

    const autoScrollDown = () => {
        const elem = document.getElementById("chat")
        elem.scrollTop = elem.scrollHeight
    }

    useEffect(getMessages, [currentConvo])
    useEffect(autoScrollDown, [myMsgs])

    return(
        <div style={style.layout}>

            <div style={style.list}>
                <ConversationList />
            </div>

            <div style={style.chat}>            
                <div style={style.convo}>
                    <div style={style.convoName}>
                        <h5><strong>#{convoName}</strong></h5>
                    </div>
                    <div id="chat" style={style.messages} >
                        {myMsgs.map(msg => <Message key={msg.id} msg={msg} user={user} delMessage={deleteMessage} scrollDown={autoScrollDown}/>)}
                    </div>

                    <div style={style.input}>
                        <SendMsg sendMsg={sendMessage} currMsg={currentMsg} onChange={onChangeCurrentMsg} placeholder={`Message #${convoName}`}/>
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

    convoName: {
        gridColumn: 1,
        gridRow: 1,
        marginTop: "5px",
        marginLeft: "2%",
        borderRadius: "1rem"
    },

    messages: {
        gridColumn: 1,
        gridRow: 2,
        height: "70vh",
        marginBottom: "2rem",
        marginLeft: "3%",
        overflow: "auto"
    },

    input: {
        gridColumn: 1,
        gridRow: 3,
        width: "65.333333%",
        marginLeft: "3%"
    }
}

export default Conversation