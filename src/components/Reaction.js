import { convoService } from "../services"

function Reaction({emoji, convoId, msgId}) {
    
    return (
        <span onClick={e => convoService.addReaction(convoId, msgId, e.target.innerHTML, 1).then(response => {console.log(response)})}>
            {emoji}
        </span>
    )
}

export default Reaction