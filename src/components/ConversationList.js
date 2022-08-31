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

    console.log("ConversationList reloaded")

    return(
        <div className="convo-list" style={style.convoList}>
            <form onSubmit={createConversation}>
                <input type="text" className="u-full-width" placeholder="Conversation Name..." value={newConvoName} onChange={onChangeConvoTitle}></input>
                <button class="u-full-width">
                    Create
                </button>
            </form>
            <h6 style={style.title}><strong>Your Conversations</strong></h6>
            <ul>
                {myConvos.map(convo => <li style={style.convoName} key={convo.id}><Link to={`/conversations/${convo.id}`}>{convo.title}</Link></li>)}
            </ul>
        </div>
    )
}

const style = {
    convoList: {
        margin: "3% 0% 0% 3%",
        paddingRight: "3%",
        height: "80vh",
        overflow: "scroll",
        overflowX: "hidden"
    },

    convoName: {
        listStyle: 'none'
    },
    
    title: {
        textAlign: "center"
    }

}


export default ConversationList