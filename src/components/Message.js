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
        <div style={style.container}>

            <div style={style.contents}>
                <img style={style.avatar} src={pic} alt="user profile picture"/>

                <h6 style={style.creator}><strong>{msg.creator}</strong></h6>

                <li className="msg" style={style.message} data-id={msg.id} onClick={showButton}>
                    {msg.text}
                </li>

                {button ? 
                <>
                <button style={style.button} onClick={() => onClick(msg.id)}>Delete</button> 
                <button style={style.button} onClick={() => onClick(msg.id)}>React</button>
                </> : <></>}
            </div>



        </div>
    )
}

const style = {
    container :{
        paddingBottom: "8px"
    },

    contents: {
        display: "flex",
        width: "65%",
        gap: "1rem"
    },

    avatar: {
        maxHeight: "50px",
        maxWidth: "50px",
    },

    creator: {
        marginTop: "1rem",
        textAlign: "center"
    },

    message: {
        alignSelf: "flex-end",
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