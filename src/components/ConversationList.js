import ConvoName from './ConvoName'

function ConversationList({createConvo, myConvos, getConvo, label, onChange}) {
    
    return(
        <div className="convo-list">
            <ul>
                {myConvos.map(convo => <ConvoName key={convo.id} convo={convo} getConvo={getConvo}/>)}
            </ul>
            <form onSubmit={createConvo}>
                <input value={label} onChange={onChange}></input>
                <button>
                    Create Conversation
                </button>
            </form>
        </div>
    )
}

const style = {
    
}


export default ConversationList