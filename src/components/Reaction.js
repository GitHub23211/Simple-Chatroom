import { convoService } from "../services"

function Reaction({emoji, convoId, msgId, setReactList}) {

    const onReact = (event) => {
        convoService.getMessage(convoId, msgId).then(response => {
            const newReaction = createReaction(response.reaction, event)
            convoService.addReaction(convoId, msgId, newReaction)
                        .then(response => setReactList(false))
        })
    }

    const createReaction = (reaction, event) => {
        for(let i = 0; i < reaction.length; i++) {
            if(reaction[i].emoji === event.target.innerHTML) {
                return {
                    ...reaction[i],
                    "num": reaction[i].num + 1,
                    "op": "update"
                }
            }
        }
        return {
            "emoji": event.target.innerHTML,
            "num": 1,
            "op": "push"
        }
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