import {useEffect, useState} from 'react'
import {auth, convoService} from '../services'
import ReactionList from './ReactionList'

function Message ({msg, user, delMessage, scrollDown}) {
    const [delButton, setDelButton] = useState(false)
    const [reactButton, setReactButton] = useState(false)
    const [showReactList, setReactList] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    const getUserInfo = () => {
        auth.getUser(user).then(response => {
            setUserInfo(response)
        })
    }

    const showMessageOpts = () => {
        if(userInfo.username === msg.creator) {
            setDelButton(!delButton)
        }
        setReactButton(!reactButton)
        setReactList(false)
    }

    useEffect(scrollDown, [delButton, reactButton, showReactList])
    useEffect(getUserInfo, [])

    return(
        <div>
            <div style={style.container}>
                <div style={style.contents}>
                    <img style={style.avatar} src={userInfo.avatar} alt="user_avatar"/>
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
        maxHeight: "35px",
        maxWidth: "35px",
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