import {useState} from 'react'
import {auth, convoService} from '../services'
import pic from '../components/1.png'

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
        <div>

            <div style={style.contents}>
                <img style={style.avatar} src={pic} alt="user profile picture"/>

                <div style={style.creator}><strong>{msg.creator}</strong></div>
            </div>

            <li className="msg" style={style.message} data-id={msg.id} onClick={showButton}>
                    {msg.text}
            </li>

            {button ? 
            <>
                <button style={style.button} onClick={() => onClick(msg.id)}>Delete</button> 
                <button style={style.button} onClick={() => onClick(msg.id)}>React</button>
            </> : <></>}


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