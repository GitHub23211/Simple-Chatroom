import Message from './Message'

function Conversation ({convo, getConvo}) {
    return(
        <li data-id={convo.id} onClick={getConvo}> {convo.title}</li>
    )
}

const style = {

}


export default Conversation