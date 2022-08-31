import {Link} from "react-router-dom"
import {useState, useEffect} from 'react'
import {convoService} from '../To be categorised/'

function ConversationList({currentUser}) {
    const [newConvoName, setNewConvoName] = useState("Enter name of conversation...")
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
        <div className="convo-list">
            <ul>
                {myConvos.map(convo => <li key={convo.id}><Link to={`/conversations/${convo.id}`}>{convo.title}</Link></li>)}
            </ul>
            <form onSubmit={createConversation}>
                <input value={newConvoName} onChange={onChangeConvoTitle}></input>
                <button>
                    Create Conversation
                </button>
            </form>
        </div>
    )
}

const style = {
    
}


export default ConversationList