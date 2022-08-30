import Message from './Message'

function Conversation({createConvo, myConvos, label, onChange}) {
    
    return(
        <>
            <ul>
                {myConvos.map(convo => <Message key={convo.id} msg={convo.id}/>)}
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


export default Conversation