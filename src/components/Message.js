import {useState} from 'react'
import {auth, convoService} from '../services'

function Message ({msg, onClick, user}) {
    const [button, setButton] = useState(false)

    const showButton = () => {
        auth.getUser(user)
            .then(response => {
                if(response.username === msg.creator) {
                    setButton(!button)
                    }
                })
    }

    return(
        <div style={style.container}>
            <h6 style={style.creator}><strong>{msg.creator}</strong></h6>
            <li className="msg" style={style.message} data-id={msg.id} onClick={showButton}>
                {msg.text}
            </li>
            {button ? <>
            <button style={style.button} onClick={() => onClick(msg.id)}>Delete</button> 
            <button style={style.button} onClick={() => onClick(msg.id)}>React</button>
            </> : <></>}
        </div>
    )
}

const style = {
    container :{
        paddingBottom: "8px"
    },

    message: {
        listStyle: "none",
        maxWidth: "75ch",
        wordBreak: "break-all",
    },

    creator: {
        marginBottom: "-1px"
    },

    button: {
        marginTop: "-1%"
    },

    reaction: {

    }
}


export default Message