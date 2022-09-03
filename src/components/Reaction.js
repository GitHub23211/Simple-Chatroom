import { convoService } from "../services"

function Reaction({emoji, convoId, msgId, setReactList}) {

    const onReact = (event) => {
        convoService.addReaction(convoId, msgId, event.target.innerHTML, 1)
                    .then(response => setReactList(false))
    }
    
    return (
        <span onClick={onReact}>
            {emoji}
        </span>
    )
}

export default Reaction