import Conversation from './Conversation'

function ConversationList({createConvo, myConvos, label, onChange}) {
    
    return(
        <>
            <ul>
                {myConvos.map(convo => <Conversation key={convo.id} convo={convo.title + " | " + convo.id }/>)}
            </ul>
            <form onSubmit={createConvo}>
                <input value={label} onChange={onChange}></input>
                <button>
                    Create Conversation
                </button>
            </form>
        </>
    )
}

const style = {
    
}


export default ConversationList