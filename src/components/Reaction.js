import { convoService } from "../services"

function Reaction({emoji, convoId, msgId}) {
    return (
        <div onClick={e => convoService.addReaction(convoId, msgId, e.target.innerHTML, 1).then(response => console.log(response))}>
            {emoji}
        </div>
    )
}

export default Reaction