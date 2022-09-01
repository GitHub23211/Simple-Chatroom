import {useState} from 'react'
import {auth, convoService} from '../services'

function Message ({msg, onClick, currentConvo, user}) {
    const [button, setButton] = useState(false)

    const showButton = () => {
        convoService.getMessage(currentConvo, msg.id)
                    .then(response => auth.getUser(user)
                                          .then(user => {
                                                if(response.creator === user.username) {
                                                    setButton(!button)
                                                }
                                          }))
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