import {useState} from 'react'
import {auth, convoService} from '../services'
import ReactionList from './ReactionList'
import pic from '../components/1.png'

function Message ({msg, onClick, user, convoId}) {
    const [buttons, setButtons] = useState(false)
    const [showReactList, setReactList] = useState(false)

    const showMessageOpts = () => {
        auth.getUser(user)
            .then(response => {
                if(response.username === msg.creator) {
                    setButtons(!buttons)
                    }
                })
    }

    return(
        <div>

            <div style={style.contents}>
                <img style={style.avatar} src={pic} alt="user profile picture"/>
                <div style={style.creator}><strong>{msg.creator}</strong></div>
            </div>

            <li className="msg" style={style.message} data-id={msg.id} onClick={showMessageOpts}>
                    {msg.text}
            </li>

            <div>
                {buttons ? 
                <>
                    <button style={style.button} onClick={() => onClick(msg.id)}>Delete</button> 
                    <button style={style.button} onClick={() => {setButtons(false); setReactList(!showReactList)}}>React</button>
                </> : <></>}
            </div>
            
            <div>
                {showReactList ? <ReactionList convoId={convoId} msgId={msg.id}/> : <></>}
            </div>
        </div>
    )
}

const style = {
    contents: {
        display: "flex",
        width: "65%",
        alignItems: "center",
        gap: "5px"
    },

    avatar: {
        maxHeight: "25px",
        maxWidth: "25px",
    },

    creator: {
        marginTop: "1rem",
        textAlign: "center"
    },

    message: {
        listStyle: "none",
        maxWidth: "75ch",
        wordBreak: "break-all"
    },

    button: {
        marginTop: "-1%"
    },

    reaction: {

    }
}


export default Message