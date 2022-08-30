import Message from './Message'

function Conversation({convo}) {

    return(
        <div>
            {convo.map(msg => <Message key={msg.id} msg={msg.text}/>)}
        </div>  
    )
}

export default Conversation