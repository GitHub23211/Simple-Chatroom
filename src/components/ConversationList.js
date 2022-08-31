import {Link} from "react-router-dom"
import {useState, useEffect} from 'react'
import {convoService} from '../To be categorised/'
import {Conversation} from './'

function ConversationList({currentUser}) {
    const [newConvoName, setNewConvoName] = useState("")
    const [myConvos, setMyConvos] = useState([])

  
    const createConversation = (event) => {
      event.preventDefault()
      const payload = {
        "title": event.target[0].value
      }
      convoService.createConversation(currentUser, payload)
                  .then(response => {setNewConvoName(""); getConversations()})
    }
  
    const getConversations = () => {
        convoService.getConversations(currentUser)
          .then(response => {console.log(response); setMyConvos(response)})
    }
  
    const onChangeConvoTitle = (event) => {
        setNewConvoName(event.target.value)
    }

    useEffect(getConversations, [])

    console.log("component reloaded")

    return(
        <div className="convo-list" style={style.convoList}>
            <h6><strong>Your Conversations</strong></h6>
            <ul>
                {myConvos.map(convo => <li style={style.convoName} key={convo.id}><Link to={`/conversations/${convo.id}`}>{convo.title}</Link></li>)}
            </ul>
            <form onSubmit={createConversation}>
                <input className="u-full-width" placeholder="Enter Conversation Name..." value={newConvoName} onChange={onChangeConvoTitle}></input>
                <button>
                    Create Conversation
                </button>
            </form>
        </div>
    )
}

const style = {
    convoList: {
        margin: "5% 0% 0% 5%"
    },

    convoName: {
        listStyle: 'none'
    }
}


export default ConversationList