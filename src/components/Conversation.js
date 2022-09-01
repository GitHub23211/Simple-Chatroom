import {Message, ConversationList} from './'
import {useState, useEffect} from 'react'
import {convoService} from '../To be categorised/'
import {useParams} from "react-router-dom"
import {SendMsg} from './'

function Conversation({}) {
    const [myMsgs, setMyMsgs] = useState([])
    const [currentMsg, setCurrentMsg] = useState("")
    const currentConvo = useParams().convoId


    const getMessages = () => {
        convoService.getMessages(20, currentConvo)
                  .then(response => setMyMsgs(response.messages.reverse()))
    }

    const deleteMessage = (event) => {
        console.log( event.target.attributes)
        convoService.deleteMessage(currentConvo, event.target.attributes[0].value)
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

    console.log("Conversation reloaded")

    return(
        <div>
            <div style={style.layout}>

                <div className="row">
                    <div style={style.list}>
                        <ConversationList />
                    </div>
                </div>

                <div style={style.convo}>
                    <div style={style.messages} >
                        {myMsgs.map(msg => <Message key={msg.id} msg={msg} onClick={deleteMessage}/>)}
                    </div>

                    <div style={style.input}>
                        <SendMsg sendMsg={sendMessage} currMsg={currentMsg} onChange={onChangeCurrentMsg} placeholder={`Message ${currentConvo}...`}/>
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

    convo: {
        display: "grid",
        gridTemplateColumns: "5fr",
        flexGrow: 1
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
    },

    list: {
        flexGrow: 1,
        width: "100%"
    }
}

export default Conversation