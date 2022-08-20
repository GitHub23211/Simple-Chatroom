import Message from './Message'

function Conversation({convo}) {
    return(
        <ul>
            {convo.map(msg => <Message key={msg.id} msg={msg.contents} />)}
        </ul>
    )
}

const style = {
    
}


export default Conversation