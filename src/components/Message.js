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
        <>
            <li className="msg" style={style.message} data-id={msg.id} onClick={showButton}>
                {msg.text}
            </li>
            {button ? <button onClick={() => onClick(msg.id)}>Delete?</button> : <></>}
        </>
    )
}

const style = {
    message: {
        position: "relative",
        listStyle: "none",
        maxWidth: "75ch",
        wordBreak: "break-all"
    },
}


export default Message