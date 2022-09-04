import { convoService } from "../services"

function Reaction({emoji, convoId, msgId, setReactList}) {

    const onReact = (event) => {
        convoService.getMessage(convoId, msgId).then(response => {

            const reaction = response.reaction
            let newReaction = {}

            for(let i = 0; i < reaction.length; i++) {
                if(reaction[i].emoji === event.target.innerHTML) {
                    newReaction = {
                        ...reaction[i],
                        "num": reaction[i].num + 1,
                        "op": "update"
                    }
                }
                else {
                    newReaction = {
                        "emoji": event.target.innerHTML,
                        "num": 1,
                        "op": "push"
                    }
                }
            }

            console.log(reaction)
            console.log(newReaction)
            convoService.addReaction(convoId, msgId, newReaction)
                        .then(response => setReactList(false))
        })

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