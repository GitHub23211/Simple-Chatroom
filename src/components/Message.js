import {useEffect, useState} from 'react'
import {auth, convoService} from '../services'
import ReactionList from './ReactionList'
import pic from '../components/placeholder_avatar.png'

function Message ({msg, user, delMessage}) {
    const [delButton, setDelButton] = useState(false)
    const [reactButton, setReactButton] = useState(false)
    const [showReactList, setReactList] = useState(false)

    const showMessageOpts = () => {
        auth.getUser(user)
            .then(response => {
                if(response.username === msg.creator) {
                    setDelButton(!delButton)
                }
                setReactButton(!reactButton)
                setReactList(false)
            })
    }

    return(
        <div>
            <div style={style.container}>
                <div style={style.contents}>
                    <img style={style.avatar} src={pic} alt="user profile picture"/>
                    <span style={style.creator}><strong>{msg.creator}</strong></span>
                </div>

                <li style={style.message} data-id={msg.id} onClick={showMessageOpts}>
                        {msg.text}
                </li>

                <div style={style.reaction}>
                    {msg.reaction.emoji}
                </div>
            </div>
 
            {delButton ? <button style={style.button} onClick={() => delMessage(msg.id)}>Delete</button> : <></>}
            {reactButton ? <button style={style.button} onClick={() => {setReactButton(false); setDelButton(false); setReactList(!showReactList)}}>React</button> : <></>}

            {showReactList ? <ReactionList msgId={msg.id} setReactList={setReactList} /> : <></>}
        </div>
    )
}

const style = {

    container: {
        paddingTop: "2rem"
    },

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

    reaction: {
        marginTop: "-1rem",
    },

    button: {
        marginTop: "1rem"
    },
}


export default Message