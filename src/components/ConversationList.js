import {Link} from "react-router-dom"
import {useState, useEffect} from 'react'
import {convoService} from '../services'

function ConversationList({}) {
    const [newConvoName, setNewConvoName] = useState("")
    const [myConvos, setMyConvos] = useState([])

    const createConversation = (event) => {
      event.preventDefault()
      const payload = {
        "title": event.target[0].value.toLowerCase()
      }
      convoService.createConversation(payload)
                  .then(response => {setNewConvoName(""); getConversations()})
    }
  
    const getConversations = () => {
        convoService.getConversations()
          .then(response => {console.log(response); setMyConvos(response)})
    }

    useEffect(getConversations, [])

    return(
        <div className="container" style={style.container}>
            <form onSubmit={createConversation}>
                <input type="text" className="u-full-width" placeholder="Conversation Name..." value={newConvoName} onChange={e => setNewConvoName(e.target.value)}></input>
                <button className="u-full-width">
                    Create
                </button>
            </form>
            <h6 style={style.title}><strong>Conversations</strong></h6>
            <ul style={style.list}>
                {myConvos.map(convo => <li style={style.convoName} key={convo.id}><Link style={style.link} to={`/conversations/${convo.id}`}>{convo.title}</Link></li>)}
            </ul>
        </div>
    )
}

const style = {
    container: {
        marginTop: "3%"
    },

    link: {
        display: "block",
        width: "65%"
    },

    convoName: {
        listStyle: 'none',
    },
   
    title: {
        // textAlign: "center"
    },

    list: {
        paddingBottom: "1%"
    }
}


export default ConversationList