import { convoService } from "../services"

function Reaction({emoji, convoId, msgId, setReactList}) {

    const onReact = (event) => {
        const reaction = { 
            "emoji": event.target.innerHTML,
            "num": 1
        }
        convoService.addReaction(convoId, msgId, reaction)
                    .then(response => setReactList(false))
    }
    
    return (
        <span className="emoji" style={style.emoji} onClick={onReact}>
            {emoji}
        </span>
    )
}

const style = {
    emoji: {
        flexGrow: 1,
        border: "1px solid black",
        borderRadius: "5px",
    }
}

export default Reaction