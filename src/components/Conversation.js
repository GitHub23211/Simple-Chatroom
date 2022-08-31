import Message from './Message'

function Conversation({convo, msgOnClick}) {
    // let msgs = [{
    //     id: "N/A",
    //     text: "No messages with this person yet!"
    // }]
    // if(convo != null) {
    //     msgs = convo
    // }

    return(
        <div>
            {convo.map(msg => <Message key={msg.id} msg={msg} onClick={msgOnClick}/>)}
        </div>  
    )
}

export default Conversation